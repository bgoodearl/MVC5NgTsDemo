/// <reference path="./_app_typings.ts" />
(function () {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = [
        '$log'
    ];
    function run($log) {
        $log.log('run rehearsals demo app');
    }
})();
//# sourceMappingURL=app.run.js.map