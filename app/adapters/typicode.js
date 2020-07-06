import DS from "ember-data";

export default DS.RESTAdapter.extend({
  headers: {
    Link:
      '<https://jsonplaceholder.typicode.com/posts?_page=1>; rel="first", <https://jsonplaceholder.typicode.com/posts?_page=2>; rel="next", <https://jsonplaceholder.typicode.com/posts?_page=3>; rel="last"'
  },
  host: "https://jsonplaceholder.typicode.com"
});
