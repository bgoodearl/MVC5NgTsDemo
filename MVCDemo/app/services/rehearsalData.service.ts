namespace app.services {
    'use strict';

    angular.module('app.services').constant('rehearsalData.svc.ver', '0.8');

    export interface IRehearsalDataService {
        getAll(): ng.IPromise<Array<BGoodMusic.Models.API.IRehearsal> | app.common.IServiceError>;
        getRehearsal(id: number): ng.IPromise<BGoodMusic.Models.API.IRehearsal | app.common.IServiceError>;
        saveRehearsal(rehearsal: BGoodMusic.Models.API.IRehearsal): ng.IPromise<BGoodMusic.Models.API.IRehearsal | app.common.IServiceError>;
    }

    interface IJunkType {
        status: number;
        errorMessage: string;
    }

    class RehearsalDataService implements IRehearsalDataService {
        static $inject = ['$http',
            '$log',
            '$q',
            'app.blocks.AppInfo',
            'rehearsalData.svc.ver'
        ];
        private appInfo: app.blocks.IAppInfo;
        private rootPath: string;
        constructor(private $http: ng.IHttpService,
            private $log: ng.ILogService,
            private $q: ng.IQService,
            appInfoProvider: app.blocks.IAppInfoProvider,
            private svcVer: string) {
            $log.log('construct RehearsalDataService ' + svcVer);
            this.appInfo = appInfoProvider.appInfo;
            this.rootPath = this.appInfo.rootPath;
        }

        private fixupRehearsalDatesFromAPI(rehearsal: BGoodMusic.Models.API.IRehearsal): BGoodMusic.Models.API.IRehearsal {
            if (rehearsal && rehearsal.date) {
                rehearsal.editDate = new Date(rehearsal.date);
            }
            return rehearsal;
        }

        private fixupRehearsalDatesToAPI(rehearsal: BGoodMusic.Models.API.IRehearsal): BGoodMusic.Models.API.IRehearsal {
            if (rehearsal && rehearsal.editDate && angular.isDate(rehearsal.editDate)) {
                let iso: string = rehearsal.editDate.toISOString();
                this.$log.log('date to iso: ' + iso); 
                rehearsal.date = iso;
            }
            return rehearsal;
        }

        private fixupRehearsalsDatesFromAPI (rehearsals: Array<BGoodMusic.Models.API.IRehearsal>): Array<BGoodMusic.Models.API.IRehearsal> {
            if (rehearsals) {
                for (var i: number = 1; i < rehearsals.length; i++) {
                    if (rehearsals[i] && rehearsals[i].date) {
                        rehearsals[i].editDate = new Date(rehearsals[i].date);
                    }
                }
            }
            return rehearsals;
        }

        public getAll = () => {
            let defer = this.$q.defer();
            let promise: ng.IPromise<Array<BGoodMusic.Models.API.IRehearsal>> = defer.promise;
            let url: string = this.rootPath + 'api/rehearsals';
            this.$http
                .get(url)
                .then((response: ng.IHttpPromiseCallbackArg<Array<BGoodMusic.Models.API.IRehearsal>>) => {
                    this.$log.log('getAll got');
                    defer.resolve(this.fixupRehearsalsDatesFromAPI(response.data));
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

        public getRehearsal = (id: number) => {
            let defer = this.$q.defer();
            let promise: ng.IPromise<BGoodMusic.Models.API.IRehearsal> = defer.promise;
            let url: string = this.rootPath + 'api/rehearsals/' + id;
            this.$http
                .get(url)
                .then((response: ng.IHttpPromiseCallbackArg<BGoodMusic.Models.API.IRehearsal>) => {
                    this.$log.log('getRehearsal got');
                    defer.resolve(this.fixupRehearsalDatesFromAPI(response.data));
                })
                .catch((reason: ng.IHttpPromiseCallbackArg<string>) => {
                    this.$log.log('getRehearsal got error');
                    let irError: app.common.IServiceError = {
                        status: reason.status,
                        errorMessage: reason.statusText
                    };
                    if (reason.data) irError.errorMessage = reason.data;
                    defer.reject(irError);
                });
            return promise;
        }

        public saveRehearsal = (rehearsal: BGoodMusic.Models.API.IRehearsal) => {
            let defer = this.$q.defer();
            let promise: ng.IPromise<BGoodMusic.Models.API.IRehearsal> = defer.promise;
            let url: string = this.rootPath + 'api/rehearsals/';
            this.$http
                .post(url, this.fixupRehearsalDatesToAPI(rehearsal))
                .then((response: ng.IHttpPromiseCallbackArg<BGoodMusic.Models.API.IRehearsal>) => {
                    this.$log.log('saveRehearsal got');
                    defer.resolve(this.fixupRehearsalDatesFromAPI(response.data));
                })
                .catch((reason: ng.IHttpPromiseCallbackArg<string>) => {
                    this.$log.log('saveRehearsal got error');
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