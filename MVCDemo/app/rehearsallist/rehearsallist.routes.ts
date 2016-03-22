/// <reference path="../_app_typings.ts" />
((): void => {
    'use strict';
    //console.log('app.rehearsallist - route config loaded');

    angular
        .module('app.rehearsallist')
        .config(config);

    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        appInfoProvider: app.blocks.IAppInfoProvider): void {
        //console.log('app.rehearsallist - route config');
        //var $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //$log.log('config-app.rehearsallist');
        let appInfo: app.blocks.IAppInfo = appInfoProvider.appInfo;
        $routeProvider
            .when(appInfo.appRootPath + '/rehearsallist/', {
                templateUrl: appInfo.rootPath + 'app/rehearsallist/rehearsallist.html',
                controller: 'app.rehearsallist.RehearsalListController',
                controllerAs: 'vm',
                caseInsensitiveMatch: true,
            });
    }
})(); 