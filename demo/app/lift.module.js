angular.module('lifts', [])
  .controller('liftController', app.LiftController);

angular.module('app').requires.push('lifts');
