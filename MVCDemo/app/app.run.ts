/// <reference path="./_app_typings.ts" />
((): void => {
    'use strict';

    angular
        .module('app')
        .run(run);

    run.$inject = [
        '$log',
        '$rootScope',
        '$route'
    ];
    function run(
        $log: ng.ILogService,
        $rootScope: ng.IRootScopeService,
        $route
        ): void {
        $log.log('run rehearsals demo app');
        $rootScope.$on('$routeChangeStart', function (event: ng.IAngularEvent, next, current) {
            //$log.log('routeChangeStart: ' + event.name);
            //$log.log('current: ');
            //$log.log(current);
            //$log.log('$routeChangeStart next: ');
            //$log.log(next.params);
            //$log.log(next.pathParams);
            //$log.log(next.$$route);
        });

        $rootScope.$on('$routeChangeError', (): void => {
            $log.log('routeChangeError');
        });
        //$rootScope.$on('$routeChangeSuccess', (): void => {
        //    $log.log('routeChangeSuccess');
        //});
        //$log.log($route);
    }
})(); 