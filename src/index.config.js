export default ($stateProvider, $urlRouterProvider) => {
  'ngInject';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state({
      name: 'app',
      url: '/',
      template: '<projects-list></projects-list>'
    })
    .state({
      name: 'detail',
      url: '/{id}',
      template: '<projects-detail></projects-detail>'
    });
};
