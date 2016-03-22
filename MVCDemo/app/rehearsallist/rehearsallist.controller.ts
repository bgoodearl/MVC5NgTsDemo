namespace app.rehearsllist {
    'use strict';

    angular.module('app.rehearsallist').constant('rehearsallist.ctlr.ver', '0.03');

    interface IRehearsalListController {
        editRehearsal(id: number): void;
        message: string;
        rehearsals: Array<app.services.IRehearsalResource>;
    }

    class RehearsalListController implements IRehearsalListController {
        private appInfo: app.blocks.IAppInfo;
        public message: string;
        public rehearsals: Array<app.services.IRehearsalResource> = [];
        static $inject = [
            '$location',
            '$log',
            'app.blocks.AppInfo',
            'app.services.RehearsalDataAccessService',
            'rehearsallist.ctlr.ver'
        ];
        constructor(private $location: ng.ILocationService,
            private $log: ng.ILogService,
            private appInfoProvider: app.blocks.IAppInfoProvider,
            private rehearsalSvc: app.services.IRehearsalDataAccessService,
            private ctlrVer: string) {
            this.message = "Constructed RehearsalListController";
            $log.log('construct RehearsalListController ' + ctlrVer);
            let rehearsalResource = rehearsalSvc.getRehearsalResource();
            rehearsalResource.query((data: Array<app.services.IRehearsalResource>) => {
                this.rehearsals = data;
                if (this.rehearsals == null) this.$log.log('rehearsals not set');
                else if (!this.rehearsals.length) this.$log.log('rehearsals empty');
                else this.$log.log('rehearsals: ' + this.rehearsals.length);
            });
            this.appInfo = appInfoProvider.appInfo;
            $log.log('construct RehearsalListController done');
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