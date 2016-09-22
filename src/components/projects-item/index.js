import ng from 'angular';

import ProjectItemComponent from './projects-item.component';

export default ng.module('app.components.project.item', [])
  .directive('projectsItem', ProjectItemComponent)
  .name;
