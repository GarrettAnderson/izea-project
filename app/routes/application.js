import Route from '@ember/routing/route'
import fetch from 'fetch'

export default class PostsRoute extends Route {
  async model() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&include_metadata=true', {
      headers: {
        Link:
          '<https://jsonplaceholder.typicode.com/posts?_page=1>; rel="first", <https://jsonplaceholder.typicode.com/posts?_page=2>; rel="next", <https://jsonplaceholder.typicode.com/posts?_page=3>; rel="last"'
      }
    })
    const json = await response.json()
    console.log(json)
    return json
  }
}
