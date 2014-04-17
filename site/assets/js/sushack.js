(function (angular) {
    'use strict';

    var sushack = angular.module('sushack', []);

    sushack.controller('AttendeeController', function ($scope, $http) {
        $http.get('/attendees.json').success(function (attendees) {
            $scope.attendees = attendees;
        });
    });

})(window.angular);
