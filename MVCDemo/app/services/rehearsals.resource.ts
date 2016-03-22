namespace app.services {
    'use strict';
    console.log('loading app.services - rehearsals resource v0.02');

    export interface IRehearsalResource extends ng.resource.IResource<BGoodMusic.Models.API.IRehearsal>,
        BGoodMusic.Models.API.IRehearsal { }

    export interface IRehearsalDataAccessService {
        getRehearsalResource(): ng.resource.IResourceClass<IRehearsalResource>;
    }

    export class RehearsalDataAccessService implements IRehearsalDataAccessService {
        static $inject = [
            '$log',
            '$resource',
            'app.blocks.AppInfo'
        ];
        private appInfo: app.blocks.IAppInfo;
        constructor(private $log: ng.ILogService,
            private $resource: ng.resource.IResourceService,
            appInfoProvider: app.blocks.IAppInfoProvider) {
            $log.log('RehearsalDataAccessService constructor');
            this.appInfo = appInfoProvider.appInfo;
        }

        getRehearsalResource(): ng.resource.IResourceClass<any> {
            let url: string = this.appInfo.rootPath + 'api/rehearsals/:id';
            return this.$resource(url, { id: '@id' }, {
            });
        }
    }

    angular.module('app.services')
        .service('app.services.RehearsalDataAccessService', RehearsalDataAccessService);
}