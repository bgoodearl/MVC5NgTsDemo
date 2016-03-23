namespace app.rehearsllist {
    'use strict';

    angular.module('app.rehearsallist').constant('rehearsallist.ctlr.ver', '0.06');

    interface IRehearsalListController {
        editRehearsal(id: number): void;
        message: string;
        rehearsals: Array<BGoodMusic.Models.API.IRehearsal>;
    }

    class RehearsalListController implements IRehearsalListController {
        private appInfo: app.blocks.IAppInfo = null;
        public message: string = '';
        rehearsals: Array<BGoodMusic.Models.API.IRehearsal> = [];
        static $inject = [
            '$location',
            '$log',
            'app.blocks.AppInfo',
            'app.services.RehearsalDataService',
            'rehearsallist.ctlr.ver'
        ];
        constructor(private $location: ng.ILocationService,
            private $log: ng.ILogService,
            private appInfoProvider: app.blocks.IAppInfoProvider,
            private rehearsalSvc: app.services.IRehearsalDataService,
            private ctlrVer: string) {
            this.message = "Constructed RehearsalListController";
            $log.log('construct RehearsalListController ' + ctlrVer);
            this.appInfo = appInfoProvider.appInfo;
            this.getRehearsals();
            //$log.log('construct RehearsalListController done');
        }
        getRehearsals = (): void => {
            this.rehearsalSvc.getAll().then((result: Array<BGoodMusic.Models.API.IRehearsal>) => {
                this.rehearsals = result;
                this.message = '';
            }).catch((reason: app.common.IServiceError) => {
                this.message = reason.errorMessage;
            });
        }
        editRehearsal = (id: number) => {
            this.$log.log('editRehearsal: ' + id);
            let path = this.appInfo.appRootPath + '/edit/' + id;
            this.$log.log('path: ' + path);
            this.$location.path(path);
        }
    }

    angular
        .module('app.rehearsallist')
        .controller('app.rehearsallist.RehearsalListController',
        RehearsalListController);

} 