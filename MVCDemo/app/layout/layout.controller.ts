namespace app.navigation {
    'use strict';

    angular.module('app.layout').constant('layout.ctlr.ver', '0.02');

    interface INavigationController {
        urlRoot: string;
    }

    class NavigationController implements INavigationController {
        message: string;
        urlRoot: string;
        static $inject = [
            '$log',
            'app.blocks.AppInfo',
            'layout.ctlr.ver'
        ];
        constructor($log: ng.ILogService,
            appInfoProvider: app.blocks.IAppInfoProvider,
            private ctlrVer: string) {
            var vm = this;
            //$log.log('construct LayoutController ' + ctlrVer);
            var appInfo: app.blocks.IAppInfo = appInfoProvider.appInfo;
            //$log.log('appRootPath: ' + appInfo.appRootPath);
            //$log.log('rootPath: ' + appInfo.rootPath);
            vm.urlRoot = appInfo.rootPath;
        }
    }

    angular
        .module('app.layout')
        .controller('app.layout.LayoutController',
        NavigationController);

} 