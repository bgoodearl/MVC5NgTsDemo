/// <reference path="./_app_typings.ts" />
(function () {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = [
        '$log',
        '$rootScope',
        '$route'
    ];
    function run($log, $rootScope, $route) {
        $log.log('run rehearsals demo app');
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            //$log.log('routeChangeStart: ' + event.name);
            //$log.log('current: ');
            //$log.log(current);
            //$log.log('next: ');
            //$log.log(next.params);
            //$log.log(next.pathParams);
            //$log.log(next.$$route);
        });
        $rootScope.$on('$routeChangeError', function () {
            $log.log('routeChangeError');
        });
        //$rootScope.$on('$routeChangeSuccess', (): void => {
        //    $log.log('routeChangeSuccess');
        //});
        //$log.log($route);
    }
})();
//# sourceMappingURL=app.run.js.map