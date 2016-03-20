/// <reference path="./_app_typings.ts" />
(function () {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = [
        '$locationProvider',
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config($locationProvider, $routeProvider, appInfoProvider) {
        //let $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //console.log('config-app');
        $locationProvider.html5Mode(true);
        var appInfo = appInfoProvider.appInfo;
        //console.log('appRootPath: ' + appInfo.appRootPath);
        //console.log('rootPath: ' + appInfo.rootPath);
        $routeProvider.otherwise({ redirectTo: appInfo.appRootPath + '/naverror/' });
    }
})();
//# sourceMappingURL=app.config.js.map