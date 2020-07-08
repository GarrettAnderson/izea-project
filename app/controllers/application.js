import Ember from "ember";
import { tracked } from "@glimmer/tracking";
import { alias, oneWay } from "@ember/object/computed";
import pagedArray from "ember-cli-pagination/computed/paged-array";

export default Ember.Controller.extend({
  isShowingModal: false,
  // actions: {
  //   toggleModal: function() {
  //     this.toggleProperty("isShowingModal");
  //   }
  // },
  queryParams: ["page", "limit"],
  page: 1,
  limit: 10,
  actions: {
    nextPage: function() {
      this.set("page", this.get("page") + 1);
    },
    previousPage: function() {
      this.set("page", this.get("page") - 1);
    },
    toggleModal: function() {
      this.toggleProperty("isShowingModal");
    }
  },
  // metaData: Ember.computed("model", function() {
  //   let metadata = this.store.metadataFor("post");
  //   console.log(metadata);
  //   return Ember.get(metadata, "pagination");
  // })
  pagedContent: pagedArray("content", {
    page: Ember.computed.alias("parent.page"),
    perPage: Ember.computed.alias("parent.perPage")
  }),

  totalPages: Ember.computed.oneWay("pagedContent.totalPages")
});
