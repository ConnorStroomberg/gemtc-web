'use strict';
define(
  ['angular',
    'require',
    'jQuery',
    'mmfoundation',
    'foundation',
    'angular-ui-router',
    'angularanimate',
    'ngSanitize',
    'controllers',
    'constants',
    'directives',
    'resources',
    'services',
    'analyses/analyses'
  ],
  function(angular, require, $, Config) {

    var dependencies = [
      'ui.router',
      'ngSanitize',
      'gemtc.controllers',
      'gemtc.resources',
      'gemtc.constants',
      'gemtc.services',
      'gemtc.directives',
      'gemtc.analyses'
    ];
    
    var app = angular.module('gemtc', dependencies);

    app.run(['$rootScope', '$window', '$http',
      function($rootScope, $window, $http) {
  //      var csrfToken = $window.config._csrf_token;
  //      var csrfHeader = $window.config._csrf_header;

  //      $http.defaults.headers.common[csrfHeader] = csrfToken;
        $rootScope.$on('$viewContentLoaded', function() {
          $(document).foundation();
        });

        $rootScope.$safeApply = function($scope, fn) {
          var phase = $scope.$root.$$phase;
          if (phase === '$apply' || phase === '$digest') {
            this.$eval(fn);
          } else {
            this.$apply(fn);
          }
        };

        $rootScope.$on('patavi.error', function(e, message) {
          $rootScope.$safeApply($rootScope, function() {
            $rootScope.error = _.extend(message, {
              close: function() {
                delete $rootScope.errors;
              }
            });
          });

        });
      }
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
      function($stateProvider, $urlRouterProvider, $httpProvider) {

        $stateProvider
          .state('analyses', {
            url: '/analyses',
            templateUrl: '/js/analyses/analyses.html',
            controller: 'AnalysesController'
          });

        // Default route
        $urlRouterProvider.otherwise('/analyses');
      }
    ]);

    return app;
  });