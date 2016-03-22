namespace app.test {
    'use strict';

    angular.module('app.rehearsaledit').constant('rehearsaledit.ctlr.ver', '0.05');

    interface IRehearsalEditController {
        id: number;
        message: string;
        rehearsal: app.services.IRehearsalResource;
        //***
        saveEdit(): void;
    }

    interface IRouteParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class RehearsalEditController implements IRehearsalEditController {
        public id: number;
        public message: string = null;
        public rehearsal: app.services.IRehearsalResource = null;
        static $inject = [
            '$log',
            '$routeParams',
            'app.services.RehearsalDataAccessService',
            'rehearsaledit.ctlr.ver'
        ];
        constructor(private $log: ng.ILogService,
            private $routeParams: IRouteParams,
            private rehearsalSvc: app.services.IRehearsalDataAccessService,
            private ctlrVer: string) {
            this.id = $routeParams.id;
            $log.log('construct RehearsalEditController v' + ctlrVer + ' id=' + this.id);
            this.message = 'constructed RehearsalEditController';
            let rehearsalResource = rehearsalSvc.getRehearsalResource();
            let rehearsal: app.services.IRehearsalResource = rehearsalResource.get({ id: this.id });
            if (rehearsal) {
                this.rehearsal = rehearsal;
                if (!this.rehearsal.id) {
                    this.$log.log("return from resource.get - rehearsal.id=" + this.rehearsal.id);
                }
                this.message = '';
            } else {
                this.message = "Rehearsal " + this.id + " not found.";
            }
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