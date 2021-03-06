/**
 * Created by hamishdickson on 16/08/2014.
 */
(function () {
    var app = angular.module('contact-controller', []);

    app.controller('ContactController', ['$scope', '$alert', '$http', function($scope, $alert, $http) {
        this.message = {};

        this.addMessage = function (message) {
            $http.post('/api/message', message)
                .success( function() {
                    $alert({
                        title: 'Cheers!',
                        content: 'Thanks for messaging me - I will get back to you as soon as I can!',
                        placement: 'top-right',
                        type: 'success',
                        duration: 3
                    });
                })
                .error( function() {
                    $alert({
                        title: 'Eh no!',
                        content: 'Thanks for messaging me - but there was a problem, please contact me via linkedIn!',
                        placement: 'top-right',
                        type: 'danger',
                        duration: 10
                    });
                });

            // clear out the preview
            this.message = {};

            // remove the styling
            $scope.contactForm.$setPristine();
        };
    }]);

    var messages = [{
        "body": "",
        "name": "",
        "email": ""
    }];

})();