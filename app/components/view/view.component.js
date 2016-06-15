(function() {
    'use strict';

    angular
        .module('module')
        .component('myView', ComponentDefinition());

    ComponentController.$inject = [];
    
    function ComponentDefinition() {
        var definition = {
            controller: ComponentController,
            templateUrl: 'components/view/view.html'
        };
        return definition;

    }

    function ComponentController () {
        
    }
})();