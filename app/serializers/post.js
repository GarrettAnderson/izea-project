import DS from "ember-data";

export default DS.RESTSerializer.extend({
  // extractMeta: function(store, type, payload) {
  //   if (payload && payload.total) {
  //     store.setMetadataFor(type, { total: payload.total });
  //   }
  // },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { posts: payload };
    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

// export default class PostSerializer extends DS.JSONAPISerializer {
//   normalizeQueryResponse(store, payload) {
//     payload = { posts: payload };
//     console.log(payload);
//     const result = super.normalizeQueryResponse(...arguments);
//     result.meta = result.meta || {};

//     if (payload.links) {
//       result.meta.pagination = this.createPageMeta(payload.links);
//     }
//     return result;
//   }
// }
