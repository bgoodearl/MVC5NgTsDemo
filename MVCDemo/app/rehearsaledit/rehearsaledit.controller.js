var app;
(function (app) {
    var test;
    (function (test) {
        'use strict';
        angular.module('app.rehearsaledit').constant('rehearsaledit.ctlr.ver', '0.05');
        var RehearsalEditController = (function () {
            function RehearsalEditController($log, $routeParams, rehearsalSvc, ctlrVer) {
                var _this = this;
                this.$log = $log;
                this.$routeParams = $routeParams;
                this.rehearsalSvc = rehearsalSvc;
                this.ctlrVer = ctlrVer;
                this.message = null;
                this.rehearsal = null;
                this.saveEdit = function () {
                    _this.$log.log('saveEdit ' + _this.id);
                    _this.message = "Save not implemented";
                };
                this.id = $routeParams.id;
                $log.log('construct RehearsalEditController v' + ctlrVer + ' id=' + this.id);
                this.message = 'constructed RehearsalEditController';
                var rehearsalResource = rehearsalSvc.getRehearsalResource();
                var rehearsal = rehearsalResource.get({ id: this.id });
                if (rehearsal) {
                    this.rehearsal = rehearsal;
                    if (!this.rehearsal.id) {
                        this.$log.log("return from resource.get - rehearsal.id=" + this.rehearsal.id);
                    }
                    this.message = '';
                }
                else {
                    this.message = "Rehearsal " + this.id + " not found.";
                }
            }
            RehearsalEditController.$inject = [
                '$log',
                '$routeParams',
                'app.services.RehearsalDataAccessService',
                'rehearsaledit.ctlr.ver'
            ];
            return RehearsalEditController;
        })();
        angular
            .module('app.test')
            .controller('app.rehearsaledit.RehearsalEditController', RehearsalEditController);
    })(test = app.test || (app.test = {}));
})(app || (app = {}));
//# sourceMappingURL=rehearsaledit.controller.js.map