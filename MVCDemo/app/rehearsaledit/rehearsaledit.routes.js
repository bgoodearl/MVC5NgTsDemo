/// <reference path="../_app_typings.ts" />
(function () {
    'use strict';
    //console.log('app.rehearsaledit - route config loaded');
    angular
        .module('app.rehearsaledit')
        .config(config);
    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config($routeProvider, appInfoProvider) {
        //console.log('app.rehearsaledit - route config');
        //var $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //$log.log('config-app.rehearsallist');
        var appInfo = appInfoProvider.appInfo;
        $routeProvider
            .when(appInfo.appRootPath + '/edit/:id', {
            templateUrl: appInfo.rootPath + 'app/rehearsaledit/rehearsaledit.html',
            controller: 'app.rehearsaledit.RehearsalEditController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true,
        });
    }
})();
//# sourceMappingURL=rehearsaledit.routes.js.map