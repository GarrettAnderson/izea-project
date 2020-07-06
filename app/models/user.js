import Model from "@ember-data/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default Model.extend({
  post: hasMany("post"),
  name: attr("string"),
  email: attr("string"),
  phone: attr("string"),
  website: attr("string")
});
