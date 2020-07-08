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
    firstPage: function() {
      this.set("page", 1);
    },
    nextPage: function() {
      if (this.get("page") >= 10) {
        this.set("page", 1);
      } else {
        this.set("page", this.get("page") + 1);
      }
    },
    previousPage: function() {
      if (this.get("page") > 1) {
        this.set("page", this.get("page") - 1);
      } else {
        this.set("page", 10);
      }
    },
    lastPage: function() {
      this.set("page", 10);
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
