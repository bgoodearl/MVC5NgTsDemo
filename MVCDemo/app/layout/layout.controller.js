var app;
(function (app) {
    var navigation;
    (function (navigation) {
        'use strict';
        angular.module('app.layout').constant('layout.ctlr.ver', '0.02');
        var NavigationController = (function () {
            function NavigationController($log, appInfoProvider, ctlrVer) {
                this.ctlrVer = ctlrVer;
                var vm = this;
                //$log.log('construct LayoutController ' + ctlrVer);
                var appInfo = appInfoProvider.appInfo;
                //$log.log('appRootPath: ' + appInfo.appRootPath);
                //$log.log('rootPath: ' + appInfo.rootPath);
                vm.urlRoot = appInfo.rootPath;
            }
            NavigationController.$inject = [
                '$log',
                'app.blocks.AppInfo',
                'layout.ctlr.ver'
            ];
            return NavigationController;
        })();
        angular
            .module('app.layout')
            .controller('app.layout.LayoutController', NavigationController);
    })(navigation = app.navigation || (app.navigation = {}));
})(app || (app = {}));
//# sourceMappingURL=layout.controller.js.map