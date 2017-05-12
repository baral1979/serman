(function() {
  'use strict';

  angular
    .module('serman')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
