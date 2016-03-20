namespace app.test {
    'use strict';

    angular.module('app.test').constant('test.ctlr.ver', '0.02');

    class TestController {

        static $inject = [
            '$log',
            'test.ctlr.ver'
        ];
        constructor($log: ng.ILogService, private ctlrVer: string) {
            //$log.log('construct TestController ' + ctlrVer);
        }
    }

    angular
        .module('app.test')
        .controller('app.test.TestController',
        TestController);

} 