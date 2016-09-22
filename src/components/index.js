import ng from 'angular';

import App from './app';
import ProjectsList from './projects-list';
import ProjectsItem from './projects-item';

export default ng.module('app.components', [App, ProjectsList, ProjectsItem]).name;
