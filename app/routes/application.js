import Ember from "ember";
// // import { action } from "@ember/object";

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.query("post", {
      _page: params.page,
      _limit: params.limit
    });
  }

  // afterModel: function(model) {
  //   if (isEmpty(model)) {
  //     this.transitionTo({ queryParams: {page: 1}})
  //   })
  // }
});

// export default Ember.Route.extend({
//   model(params) {
//     return this.store.query("post", {
//       page: {
//         number: params.page,
//         size: params.size
//       }
//     });
//   }
// });

// import Route from "@ember/routing/route";
// import fetch from "fetch";
// import RouteMixin from "ember-cli-pagination/remote/route-mixin";

// export default class PostsRoute extends Route {
//   async model() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       headers: {
//         Link:
//           '<https://jsonplaceholder.typicode.com/posts?_page=1>; rel="first", <https://jsonplaceholder.typicode.com/posts?_page=2>; rel="next", <https://jsonplaceholder.typicode.com/posts?_page=3>; rel="last"'
//       }
//     });
//     const json = await response.json();
//     console.log(json);
//     return json;
//   }
// }

// BELOW IS CODE FROM THE ROUTE posts.js AND I OVERWROTE THE DATA

// import Route from "@ember/routing/route";
// // import { action } from "@ember/object";

// export default class PostRoute extends Route {
//   queryParams = {
//     page: {
//       refreshModel: true
//     },
//     size: {
//       refreshModel: true
//     }
//   };

//   model(params) {
//     return this.store.query("post", {
//       page: {
//         number: params.page,
//         size: params.size
//       }
//     });
//   }
// }

// export default class PostsRoute extends Route {
//   confirm(data) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: this.get,
//       body: JSON.stringify(data)
//     })
//       .then(response => response.json())
//       .then(postList => {
//         this.store.push(postList);
//       });
//   }
// }
// import Route from "@ember/routing/route";
// import fetch from "fetch";
// import RouteMixin from "ember-cli-pagination/remote/route-mixin";

// export default class PostsRoute extends Route {
//   queryParams = {
//     page: {
//       refreshModel: true
//     },
//     size: {
//       refreshModel: true
//     }
//   };

//   async model() {
//     let response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?_page=1",
//       {
//         headers: {
//           Link:
//             '<https://jsonplaceholder.typicode.com/posts?_page=1>; rel="first", <https://jsonplaceholder.typicode.com/posts?_page=2>; rel="next", <https://jsonplaceholder.typicode.com/posts?_page=3>; rel="last"'
//         }
//       }
//     );
//     const json = await response.json();
//     console.log(json);
//     return json;
//   }
// }
