var app;
(function (app) {
    var rehearsllist;
    (function (rehearsllist) {
        'use strict';
        angular.module('app.rehearsallist').constant('rehearsallist.ctlr.ver', '0.03');
        var RehearsalListController = (function () {
            function RehearsalListController($location, $log, appInfoProvider, rehearsalSvc, ctlrVer) {
                var _this = this;
                this.$location = $location;
                this.$log = $log;
                this.appInfoProvider = appInfoProvider;
                this.rehearsalSvc = rehearsalSvc;
                this.ctlrVer = ctlrVer;
                this.rehearsals = [];
                this.editRehearsal = function (id) {
                    _this.$log.log('editRehearsal: ' + id);
                    var path = _this.appInfo.appRootPath + '/edit/' + id;
                    _this.$log.log('path: ' + path);
                    _this.$location.path(path);
                };
                this.message = "Constructed RehearsalListController";
                $log.log('construct RehearsalListController ' + ctlrVer);
                var rehearsalResource = rehearsalSvc.getRehearsalResource();
                rehearsalResource.query(function (data) {
                    _this.rehearsals = data;
                    if (_this.rehearsals == null)
                        _this.$log.log('rehearsals not set');
                    else if (!_this.rehearsals.length)
                        _this.$log.log('rehearsals empty');
                    else
                        _this.$log.log('rehearsals: ' + _this.rehearsals.length);
                });
                this.appInfo = appInfoProvider.appInfo;
                $log.log('construct RehearsalListController done');
            }
            RehearsalListController.$inject = [
                '$location',
                '$log',
                'app.blocks.AppInfo',
                'app.services.RehearsalDataAccessService',
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