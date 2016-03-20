var app;
(function (app) {
    var blocks;
    (function (blocks) {
        'use strict';
        var AppInfoProvider = (function () {
            function AppInfoProvider() {
                //console.log('AppInfoProvider constructor');
                this.appInfo = JSON.parse($('#lo-appdata').attr('data-appdata'));
                //console.log(this.appInfo);
            }
            AppInfoProvider.prototype.$get = function () {
                //console.log('AppInfoProvider.$get');
                //console.log(this.appInfo);
                return this;
            };
            AppInfoProvider.prototype.getAppInfo = function () {
                //console.log('AppInfoProvider.getAppInfo');
                //console.log(this.appInfo);
                return this.appInfo;
            };
            return AppInfoProvider;
        })();
        angular
            .module('app.blocks')
            .provider('app.blocks.AppInfo', AppInfoProvider);
    })(blocks = app.blocks || (app.blocks = {}));
})(app || (app = {}));
//# sourceMappingURL=appinfo.provider.js.map