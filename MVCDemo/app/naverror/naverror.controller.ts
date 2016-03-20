namespace app.naverror {
    'use strict';

    angular.module('app.naverror').constant('naverror.ctlr.ver', '0.02');

    class NavErrorController {

        static $inject = [
            '$log'
        ];
        constructor($log: ng.ILogService) {
            //$log.log('construct NavErrorController');
        }
    }

    angular
        .module('app.naverror')
        .controller('app.naverror.NavErrorController',
        NavErrorController);

}