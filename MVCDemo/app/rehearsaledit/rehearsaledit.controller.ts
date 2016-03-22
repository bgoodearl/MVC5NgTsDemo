namespace app.test {
    'use strict';

    angular.module('app.rehearsaledit').constant('rehearsaledit.ctlr.ver', '0.08');

    interface IRehearsalEditController {
        id: number;
        message: string;
        rehearsal: BGoodMusic.Models.API.IRehearsal;
        //***
        saveEdit(): void;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class RehearsalEditController implements IRehearsalEditController {
        public id: number;
        public message: string = null;
        public rehearsal: BGoodMusic.Models.API.IRehearsal = null;
        static $inject = [
            '$log',
            '$routeParams',
            'app.services.RehearsalDataService',
            'rehearsaledit.ctlr.ver'
        ];
        constructor(private $log: ng.ILogService,
            private $routeParams: IRouteParams,
            private rehearsalSvc: app.services.IRehearsalDataService,
            private ctlrVer: string) {
            this.id = $routeParams.id;
            $log.log('construct RehearsalEditController v' + ctlrVer + ' id=' + this.id);
            this.message = 'constructed RehearsalEditController';
            this.getRehearsal(this.id);
        }
        getRehearsal = (id: number): void => {
            this.rehearsalSvc.getRehearsal(id).then((result: BGoodMusic.Models.API.IRehearsal) => {
                this.rehearsal = result;
                this.message = '';
            }).catch(function (reason: app.common.IServiceError) {
                this.message = reason.errorMessage;
            });
        }
        saveEdit = () => {
            this.$log.log('saveEdit ' + this.id);
            this.message = "Save not implemented";
        }
    }

    angular
        .module('app.test')
        .controller('app.rehearsaledit.RehearsalEditController',
        RehearsalEditController);

}  