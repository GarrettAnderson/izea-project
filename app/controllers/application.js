import Ember from "ember";
import pagedArray from "ember-cli-pagination/computed/paged-array";

export default Ember.Controller.extend({
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty("isShowingModal");
    }
  }

  //   queryParams: ["page", "perPage"],
  //   page: 1,
  //   perPage: 10,

  //   pagedContent: pagedArray("content", {
  //     page: Ember.computed.alias("parent.page"),
  //     perPage: Ember.computed.alias("parent.perPage")
  //   }),

  //   totalPages: Ember.computed.oneWay("pagedContent.totalPages")
});
