import template from './projects-item.template.html';
import controller from './projects-item.controller';
// export default { template };

export default () => ({
  template,
  controller,
  bindToController: true,
  controllerAs: '$ctrl',
  scope: {
    item: '='
  }
});
