var app;
(function (app) {
    var test;
    (function (test) {
        'use strict';
        angular.module('app.rehearsaledit').constant('rehearsaledit.ctlr.ver', '0.10');
        var RehearsalEditController = (function () {
            function RehearsalEditController($log, $routeParams, rehearsalSvc, ctlrVer) {
                var _this = this;
                this.$log = $log;
                this.$routeParams = $routeParams;
                this.rehearsalSvc = rehearsalSvc;
                this.ctlrVer = ctlrVer;
                this.message = null;
                this.rehearsal = null;
                this.getRehearsal = function (id) {
                    _this.rehearsalSvc.getRehearsal(id).then(function (result) {
                        _this.rehearsal = result;
                        _this.rehearsal.editDate = new Date(_this.rehearsal.date);
                        _this.$log.log('getRehearsal(' + id + ') got:...');
                        _this.$log.log(_this.rehearsal);
                        _this.message = '';
                    }).catch(function (reason) {
                        _this.message = reason.errorMessage;
                    });
                };
                this.saveEdit = function () {
                    _this.$log.log('saveEdit ' + _this.id);
                    _this.message = "Save not implemented";
                };
                this.id = $routeParams.id;
                $log.log('construct RehearsalEditController v' + ctlrVer + ' id=' + this.id);
                this.message = 'constructed RehearsalEditController';
                this.getRehearsal(this.id);
            }
            RehearsalEditController.$inject = [
                '$log',
                '$routeParams',
                'app.services.RehearsalDataService',
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