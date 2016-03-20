(function () {
    'use strict';
    angular
        .module('app.naverror')
        .config(config);
    config.$inject = [
        '$routeProvider',
        'app.blocks.AppInfoProvider'
    ];
    function config($routeProvider, appInfoProvider) {
        //let $log: ng.ILogService = angular.injector(['ng']).get('$log');
        //console.log('config-app.naverror');
        var appInfo = appInfoProvider.getAppInfo();
        //console.log('appRootPath: ' + appInfo.appRootPath);
        //console.log('rootPath: ' + appInfo.rootPath);
        $routeProvider
            .when(appInfo.appRootPath + '/naverror/', {
            templateUrl: appInfo.rootPath + 'app/naverror/naverror.html',
            controller: 'app.naverror.NavErrorController',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });
    }
})();
//# sourceMappingURL=naverror.routes.js.map