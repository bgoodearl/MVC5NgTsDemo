/// <reference path="./_app_typings.ts" />
((): void => {
    'use strict';

    angular
        .module('app')
        .run(run);

    run.$inject = [
        '$log'
    ];
    function run(
        $log: ng.ILogService
        ): void {
        $log.log('run rehearsals demo app');
    }
})(); 