namespace app.test {
    'use strict';

    angular.module('app.rehearsaledit').constant('rehearsaledit.ctlr.ver', '0.11');

    interface IRehearsalEditController {
        dateOpen: boolean;
        id: number;
        message: string;
        rehearsal: BGoodMusic.Models.API.IRehearsal;
        //***
        saveEdit(): void;
        toggleDatePopup(): void;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class RehearsalEditController implements IRehearsalEditController {
        private appInfo: app.blocks.IAppInfo = null;
        public dateOpen = false;
        public id: number;
        public message: string = null;
        public rehearsal: BGoodMusic.Models.API.IRehearsal = null;
        static $inject = [
            '$location',
            '$log',
            '$routeParams',
            'app.blocks.AppInfo',
            'app.services.RehearsalDataService',
            'rehearsaledit.ctlr.ver'
        ];
        constructor(private $location: ng.ILocationService,
            private $log: ng.ILogService,
            private $routeParams: IRouteParams,
            private appInfoProvider: app.blocks.IAppInfoProvider,
            private rehearsalSvc: app.services.IRehearsalDataService,
            private ctlrVer: string) {
            this.appInfo = appInfoProvider.appInfo;
            this.id = $routeParams.id;
            $log.log('construct RehearsalEditController v' + ctlrVer + ' id=' + this.id);
            this.message = 'constructed RehearsalEditController';
            this.getRehearsal(this.id);
        }
        getRehearsal = (id: number): void => {
            this.rehearsalSvc.getRehearsal(id).then((result: BGoodMusic.Models.API.IRehearsal) => {
                this.rehearsal = result;
                this.$log.log('getRehearsal(' + id + ') got:...');
                this.$log.log(this.rehearsal);
                this.message = '';
            }).catch((reason: app.common.IServiceError) => {
                this.message = reason.errorMessage;
            });
        }
        saveEdit = () => {
            let id: number = this.id;
            this.$log.log('saveEdit ' + id);
            this.rehearsalSvc.saveRehearsal(this.rehearsal).then((result: BGoodMusic.Models.API.IRehearsal) => {
                this.rehearsal = result;
                this.$log.log('saveEdit(' + id + ') got:...');
                this.$log.log(this.rehearsal);
                this.message = '';
                let path = this.appInfo.appRootPath + '/rehearsallist/';
                this.$log.log('path: ' + path);
                this.$location.path(path);
            }).catch((reason: app.common.IServiceError) => {
                this.message = reason.errorMessage;
            });
        }
        toggleDatePopup = () => {
            this.dateOpen = !this.dateOpen;
        }
    }

    angular
        .module('app.test')
        .controller('app.rehearsaledit.RehearsalEditController',
        RehearsalEditController);

}  