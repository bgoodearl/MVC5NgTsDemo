var app;
(function (app) {
    var test;
    (function (test) {
        'use strict';
        angular.module('app.test').constant('test.ctlr.ver', '0.02');
        var TestController = (function () {
            function TestController($log, ctlrVer) {
                this.ctlrVer = ctlrVer;
                //$log.log('construct TestController ' + ctlrVer);
            }
            TestController.$inject = [
                '$log',
                'test.ctlr.ver'
            ];
            return TestController;
        })();
        angular
            .module('app.test')
            .controller('app.test.TestController', TestController);
    })(test = app.test || (app.test = {}));
})(app || (app = {}));
//# sourceMappingURL=test.controller.js.map