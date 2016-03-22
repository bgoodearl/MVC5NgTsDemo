var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        angular.module('app.services').constant('rehearsalData.svc.ver', '0.04');
        var RehearsalDataService = (function () {
            function RehearsalDataService($http, 
                //private $log: ng.ILogProvider,
                $q, appInfoProvider, svcVer) {
                this.$http = $http;
                this.$q = $q;
                this.svcVer = svcVer;
                console.log('construct RehearsalDataService ' + svcVer);
                this.appInfo = appInfoProvider.appInfo;
                this.rootPath = this.appInfo.rootPath;
            }
            RehearsalDataService.prototype.getAll = function () {
                var defer = this.$q.defer();
                var promise = defer.promise;
                var url = this.rootPath + 'api/rehearsals';
                this.$http
                    .get(url)
                    .then(function (response) {
                    defer.resolve(response.data);
                })
                    .catch(function (reason) {
                    var irError = {
                        status: reason.status,
                        errorMessage: reason.statusText
                    };
                    if (reason.data)
                        irError.errorMessage = reason.data;
                    defer.reject(irError);
                });
                return promise;
            };
            RehearsalDataService.prototype.getRehearsal = function (id) {
                var defer = this.$q.defer();
                var promise = defer.promise;
                var url = this.rootPath + 'api/rehearsals/' + id;
                this.$http
                    .get(url)
                    .then(function (response) {
                    defer.resolve(response.data);
                })
                    .catch(function (reason) {
                    var irError = {
                        status: reason.status,
                        errorMessage: reason.statusText
                    };
                    if (reason.data)
                        irError.errorMessage = reason.data;
                    defer.reject(irError);
                });
                return promise;
            };
            RehearsalDataService.$inject = ['$http',
                //'$log',
                '$q',
                'app.blocks.AppInfo',
                'rehearsalData.svc.ver'
            ];
            return RehearsalDataService;
        })();
        angular.module('app.services')
            .service('app.services.RehearsalDataService', RehearsalDataService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=rehearsalData.service.js.map