import Model from "@ember-data/model";
import DS from "ember-data";

const { attr, belongsTo } = DS;

export default Model.extend({
  userId: belongsTo("user"),
  title: attr("string"),
  body: attr("string")
});
