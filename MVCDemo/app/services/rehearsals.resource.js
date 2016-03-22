var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        console.log('loading app.services - rehearsals resource v0.01');
        var RehearsalDataAccessService = (function () {
            function RehearsalDataAccessService($log, $resource, appInfoProvider) {
                this.$log = $log;
                this.$resource = $resource;
                $log.log('RehearsalDataAccessService constructor');
                this.appInfo = appInfoProvider.appInfo;
            }
            RehearsalDataAccessService.prototype.getRehearsalResource = function () {
                return this.$resource(this.appInfo.rootPath + 'api/rehearsals/:id', { id: '@id' }, {});
            };
            RehearsalDataAccessService.$inject = [
                '$log',
                '$resource',
                'app.blocks.AppInfo'
            ];
            return RehearsalDataAccessService;
        })();
        services.RehearsalDataAccessService = RehearsalDataAccessService;
        angular.module('app.services')
            .service('app.services.RehearsalDataAccessService', RehearsalDataAccessService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=rehearsals.resource.js.map