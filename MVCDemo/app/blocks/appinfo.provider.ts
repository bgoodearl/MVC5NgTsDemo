namespace app.blocks {
    'use strict';

    //console.log('app.blocks-AppInfoProvider');

    export interface IAppInfoProvider extends ng.IServiceProvider {
        getAppInfo(): IAppInfo;
        appInfo: IAppInfo;
    }

    export interface IAppInfo {
        appRootPath: string;
        rootPath: string;
    }

    class AppInfoProvider implements IAppInfoProvider {
        constructor() {
            //console.log('AppInfoProvider constructor');
            this.appInfo = JSON.parse($('#lo-appdata').attr('data-appdata'));
            //console.log(this.appInfo);
        }
        public appInfo: IAppInfo;

        $get(): IAppInfoProvider {
            //console.log('AppInfoProvider.$get');
            //console.log(this.appInfo);
            return this;
        }

        getAppInfo(): IAppInfo {
            //console.log('AppInfoProvider.getAppInfo');
            //console.log(this.appInfo);
            return this.appInfo;
        }
    }

    angular
        .module('app.blocks')
        .provider('app.blocks.AppInfo', AppInfoProvider);
} 