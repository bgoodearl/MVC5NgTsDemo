(function () {
    'use strict';
    angular
        .module('app.test')
        .config(config);
    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config($routeProvider, appInfoProvider) {
        //var $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //$log.log('config-app.test');
        var appInfo = appInfoProvider.appInfo;
        //$log.log('appRootPath: ' + appInfo.appRootPath);
        //$log.log('rootPath: ' + appInfo.rootPath);
        $routeProvider
            .when(appInfo.appRootPath + '/test', {
            templateUrl: appInfo.rootPath + 'app/test/test.html',
            controller: 'app.test.TestController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });
    }
})();
//# sourceMappingURL=test.routes.js.map