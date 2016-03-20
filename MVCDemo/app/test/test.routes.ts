((): void => {
    'use strict';

    angular
        .module('app.test')
        .config(config);

    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        appInfoProvider: app.blocks.IAppInfoProvider): void {
        //var $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //$log.log('config-app.test');
        var appInfo: app.blocks.IAppInfo = appInfoProvider.appInfo;
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