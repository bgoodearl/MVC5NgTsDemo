var app;
(function (app) {
    var naverror;
    (function (naverror) {
        'use strict';
        angular.module('app.naverror').constant('naverror.ctlr.ver', '0.02');
        var NavErrorController = (function () {
            function NavErrorController($log) {
                //$log.log('construct NavErrorController');
            }
            NavErrorController.$inject = [
                '$log'
            ];
            return NavErrorController;
        })();
        angular
            .module('app.naverror')
            .controller('app.naverror.NavErrorController', NavErrorController);
    })(naverror = app.naverror || (app.naverror = {}));
})(app || (app = {}));
//# sourceMappingURL=naverror.controller.js.map