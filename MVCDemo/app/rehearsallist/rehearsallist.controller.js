var app;
(function (app) {
    var rehearsllist;
    (function (rehearsllist) {
        'use strict';
        angular.module('app.rehearsallist').constant('rehearsallist.ctlr.ver', '0.05');
        var RehearsalListController = (function () {
            function RehearsalListController($location, $log, appInfoProvider, rehearsalSvc, ctlrVer) {
                var _this = this;
                this.$location = $location;
                this.$log = $log;
                this.appInfoProvider = appInfoProvider;
                this.rehearsalSvc = rehearsalSvc;
                this.ctlrVer = ctlrVer;
                this.appInfo = null;
                this.message = '';
                this.rehearsals = [];
                this.getRehearsals = function () {
                    _this.rehearsalSvc.getAll().then(function (result) {
                        _this.rehearsals = result;
                        _this.message = '';
                    }).catch(function (reason) {
                        this.message = reason.errorMessage;
                    });
                };
                this.editRehearsal = function (id) {
                    _this.$log.log('editRehearsal: ' + id);
                    var path = _this.appInfo.appRootPath + '/edit/' + id;
                    _this.$log.log('path: ' + path);
                    _this.$location.path(path);
                };
                this.message = "Constructed RehearsalListController";
                $log.log('construct RehearsalListController ' + ctlrVer);
                this.appInfo = appInfoProvider.appInfo;
                this.getRehearsals();
                //$log.log('construct RehearsalListController done');
            }
            RehearsalListController.$inject = [
                '$location',
                '$log',
                'app.blocks.AppInfo',
                'app.services.RehearsalDataService',
                'rehearsallist.ctlr.ver'
            ];
            return RehearsalListController;
        })();
        angular
            .module('app.rehearsallist')
            .controller('app.rehearsallist.RehearsalListController', RehearsalListController);
    })(rehearsllist = app.rehearsllist || (app.rehearsllist = {}));
})(app || (app = {}));
//# sourceMappingURL=rehearsallist.controller.js.map