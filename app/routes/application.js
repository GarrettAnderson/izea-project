import Route from '@ember/routing/route'
import fetch from 'fetch'

export default class PostsRoute extends Route {
  async model() {
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // let parsed = await response.json()
    // return parsed
    let response = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    // .then((json) => console.log(json))
    console.log(response)
    return response
  }
}
