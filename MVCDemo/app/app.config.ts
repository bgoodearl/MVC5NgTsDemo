/// <reference path="./_app_typings.ts" />
((): void => {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = [
        '$locationProvider',
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config($locationProvider: ng.ILocationProvider,
        $routeProvider: ng.route.IRouteProvider,
        appInfoProvider: app.blocks.IAppInfoProvider): void {
        //let $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //console.log('config-app');
        $locationProvider.html5Mode(true);
        var appInfo = appInfoProvider.appInfo;
        //console.log('appRootPath: ' + appInfo.appRootPath);
        //console.log('rootPath: ' + appInfo.rootPath);
        $routeProvider.otherwise({ redirectTo: appInfo.appRootPath + '/naverror/' });
    }
})(); 