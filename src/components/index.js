import ng from 'angular';

import ProjectsList from './projects-list';
import ProjectsItem from './projects-item';

export default ng.module('app.components', [ProjectsList, ProjectsItem]).name;
