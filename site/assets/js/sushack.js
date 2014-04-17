(function (angular) {
    'use strict';

    var sushack = angular.module('sushack', []);

    sushack.controller('AttendeeController', function ($scope, $http) {
        $scope.new_attendee = {};
        $scope.attendees = [];

        $http.get('/attendees.json').success(function (attendees) {
            $scope.attendees = attendees;
        });

        $scope.add_attendee = function () {
            var new_attendee = angular.copy($scope.new_attendee);

            new_attendee.image_url = get_gravatar_url(new_attendee.email);
            $scope.attendees.push(new_attendee);

            $scope.new_attendee = {};
        };
    });

    var get_gravatar_url = function (email) {
        var email_hash = CryptoJS.MD5(email);
        var gravatar_url = 'http://www.gravatar.com/avatar/' + email_hash;
        return gravatar_url;
    };

})(window.angular);
