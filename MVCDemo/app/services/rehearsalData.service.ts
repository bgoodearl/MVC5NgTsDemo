namespace app.services {
    'use strict';

    angular.module('app.services').constant('rehearsalData.svc.ver', '0.04');

    export interface IRehearsalDataService {
        getAll(): ng.IPromise<Array<BGoodMusic.Models.API.IRehearsal> | app.common.IServiceError>;
        getRehearsal(id: number): ng.IPromise<BGoodMusic.Models.API.IRehearsal | app.common.IServiceError>;
    }

    class RehearsalDataService implements IRehearsalDataService {
        static $inject = ['$http',
            //'$log',
            '$q',
            'app.blocks.AppInfo',
            'rehearsalData.svc.ver'
        ];
        private appInfo: app.blocks.IAppInfo;
        private rootPath: string;
        constructor(private $http: ng.IHttpService,
            //private $log: ng.ILogProvider,
            private $q: ng.IQService,
            appInfoProvider: app.blocks.IAppInfoProvider,
            private svcVer: string) {
            console.log('construct RehearsalDataService ' + svcVer);
            this.appInfo = appInfoProvider.appInfo;
            this.rootPath = this.appInfo.rootPath;
        }

        public getAll() {
            let defer = this.$q.defer();
            let promise: ng.IPromise<Array<BGoodMusic.Models.API.IRehearsal>> = defer.promise;
            let url: string = this.rootPath + 'api/rehearsals';
            this.$http
                .get(url)
                .then((response: ng.IHttpPromiseCallbackArg<Array<BGoodMusic.Models.API.IRehearsal>>) => {
                    defer.resolve(response.data);
                })
                .catch((reason: ng.IHttpPromiseCallbackArg<string>) => {
                    let irError: app.common.IServiceError = {
                        status: reason.status,
                        errorMessage: reason.statusText
                    };
                    if (reason.data) irError.errorMessage = reason.data;
                    defer.reject(irError);
                });
            return promise;
        }

        public getRehearsal(id: number) {
            let defer = this.$q.defer();
            let promise: ng.IPromise<BGoodMusic.Models.API.IRehearsal> = defer.promise;
            let url: string = this.rootPath + 'api/rehearsals/' + id;
            this.$http
                .get(url)
                .then((response: ng.IHttpPromiseCallbackArg<BGoodMusic.Models.API.IRehearsal>) => {
                    defer.resolve(response.data);
                })
                .catch((reason: ng.IHttpPromiseCallbackArg<string>) => {
                    let irError: app.common.IServiceError = {
                        status: reason.status,
                        errorMessage: reason.statusText
                    };
                    if (reason.data) irError.errorMessage = reason.data;
                    defer.reject(irError);
                });
            return promise;
        }

    }

    angular.module('app.services')
        .service('app.services.RehearsalDataService', RehearsalDataService);

}