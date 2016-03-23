var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        angular.module('app.services').constant('rehearsalData.svc.ver', '0.5');
        var RehearsalDataService = (function () {
            function RehearsalDataService($http, $log, $q, appInfoProvider, svcVer) {
                var _this = this;
                this.$http = $http;
                this.$log = $log;
                this.$q = $q;
                this.svcVer = svcVer;
                this.getAll = function () {
                    var defer = _this.$q.defer();
                    var promise = defer.promise;
                    var url = _this.rootPath + 'api/rehearsals';
                    _this.$http
                        .get(url)
                        .then(function (response) {
                        _this.$log.log('getAll got');
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
                this.getRehearsal = function (id) {
                    var defer = _this.$q.defer();
                    var promise = defer.promise;
                    var url = _this.rootPath + 'api/rehearsals/' + id;
                    _this.$http
                        .get(url)
                        .then(function (response) {
                        _this.$log.log('getRehearsal got');
                        defer.resolve(response.data);
                    })
                        .catch(function (reason) {
                        _this.$log.log('getRehearsal got error');
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
                $log.log('construct RehearsalDataService ' + svcVer);
                this.appInfo = appInfoProvider.appInfo;
                this.rootPath = this.appInfo.rootPath;
            }
            RehearsalDataService.$inject = ['$http',
                '$log',
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