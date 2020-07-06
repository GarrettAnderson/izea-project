// import JSONAPISerializer from "@ember-data/serializer/json-api";

// export default class PostSerializer extends JSONAPISerializer {
//   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//     console.log(payload);
//     payload = { posts: payload };
//     return super.normalizeResponse(
//       store,
//       primaryModelClass,
//       payload,
//       id,
//       requestType
//     );
//   }
// }

import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };
    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
