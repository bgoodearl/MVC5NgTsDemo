/// <reference path="../_app_typings.ts" />
(function () {
    'use strict';
    //console.log('app.rehearsallist - route config loaded');
    angular
        .module('app.rehearsallist')
        .config(config);
    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config($routeProvider, appInfoProvider) {
        //console.log('app.rehearsallist - route config');
        //var $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //$log.log('config-app.rehearsallist');
        var appInfo = appInfoProvider.appInfo;
        $routeProvider
            .when(appInfo.appRootPath + '/rehearsallist/', {
            templateUrl: appInfo.rootPath + 'app/rehearsallist/rehearsallist.html',
            controller: 'app.rehearsallist.RehearsalListController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true,
        });
    }
})();
//# sourceMappingURL=rehearsallist.routes.js.map