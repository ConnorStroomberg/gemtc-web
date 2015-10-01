'use strict';
define([], function() {
	var dependencies = ['$scope', '$stateParams', 'AnalysisResource'];
	var StandAloneModelContainerController = function($scope, $stateParams, AnalysisResource) {

		$scope.toggleMenu = function() {

			if ($('#side-menu').hasClass("large-3")) {
				$('#side-menu').removeClass("large-3");
				$('#side-menu').addClass("large-1");

				$('#page-content').removeClass("large-9");
				$('#page-content').addClass("large-11");
			} else {
				$('#side-menu').removeClass("large-1");
				$('#side-menu').addClass("large-3");

				$('#page-content').removeClass("large-11");
				$('#page-content').addClass("large-9");
			}

		}
	}
	return dependencies.concat(StandAloneModelContainerController);
});