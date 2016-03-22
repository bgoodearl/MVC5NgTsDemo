/// <reference path="../_app_typings.ts" />
((): void => {
    'use strict';
    //console.log('app.rehearsaledit - route config loaded');

    angular
        .module('app.rehearsaledit')
        .config(config);

    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        appInfoProvider: app.blocks.IAppInfoProvider): void {
        //console.log('app.rehearsaledit - route config');
        //var $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //$log.log('config-app.rehearsallist');
        let appInfo: app.blocks.IAppInfo = appInfoProvider.appInfo;
        $routeProvider
            .when(appInfo.appRootPath + '/edit/:id', {
                templateUrl: appInfo.rootPath + 'app/rehearsaledit/rehearsaledit.html',
                controller: 'app.rehearsaledit.RehearsalEditController',
                controllerAs: 'vm',
                caseInsensitiveMatch: true,
            });
    }
})();  