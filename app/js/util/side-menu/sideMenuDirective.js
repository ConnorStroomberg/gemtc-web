'use strict';
define(['jQuery'], function(jQuery) {
  var dependencies = ['$window'];
  var drugisSideMenuDirective = function($window) {
    return {
      restrict: 'E',
      templateUrl: 'js/util/side-menu/sideMenu.html',
      transclude: true,
      link: function(scope, element) {
        var $sideNav = $('#side-nav'),
          $pageContent = $('#page-content'),
          $sideNavMenu = $('#side-nav-menu'),
          $menuTargets = $('[drugis-nav-target]', element),
          navBarOffset = $('nav.top-bar').height();

          scope.isHidden = false;

        _.each($menuTargets, function(target) {
          var $target = $(target);
          var itemLabel = $target.attr('drugis-nav-target');
          var menuItem = $('<li><a>' + itemLabel + '</a></li>');
          menuItem.click(function() {
            var yPos = $target.offset().top - ($target.height() + navBarOffset);
            $('html, body').animate({
              scrollTop: yPos
            }, 300);
          })
          $sideNavMenu.append(menuItem);
        });


        scope.toggleMenu = function() {

          if (!scope.isHidden) {
            $sideNavMenu.hide();
            scope.isHidden = true;
            $pageContent.addClass('end');
          } else {
            $sideNavMenu.show();
            scope.isHidden = false;
            $pageContent.removeClass('end');
          }

        };

      }
    };
  };
  return dependencies.concat(drugisSideMenuDirective);
});