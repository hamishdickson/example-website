/**
 * Created by hamishdickson on 16/08/2014.
 */
(function () {
    var app = angular.module('labs-page', []);
    app.directive('labsPage', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/labs.html',
            controller: function() {
                if (!("Notification" in window)) {
                    alert("This browser does not support desktop notification");
                }

                // Let's check if the user is okay to get some notification
                else if (Notification.permission === "granted") {
                    // If it's okay let's create a notification
                    var notification = new Notification("Hi there!");
                }

                // Otherwise, we need to ask the user for permission
                // Note, Chrome does not implement the permission static property
                // So we have to check for NOT 'denied' instead of 'default'
                else if (Notification.permission !== 'denied') {
                    Notification.requestPermission(function (permission) {

                        // If the user is okay, let's create a notification
                        if (permission === "granted") {
                            var notification = new Notification("Hi there!");
                        }
                    });
                }
            },
            controllerAs: "LabController"
        };
    });
})();
