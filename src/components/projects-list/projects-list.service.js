export default class ProjectService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list() {
    const date = ProjectService.getDate();
    const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`;
    return this.$http.get(url).then(result => result.data.items);
  }

  static getDate() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const year = date.getFullYear();
    const month = `0${date.getMonth()}`.slice(-2);
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
}
