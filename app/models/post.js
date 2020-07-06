import Model, { attr, belongsTo } from "@ember-data/model";
import DS from "ember-data";

export default class PostModel extends Model {
  @belongsTo("user") userId;
  @attr("string") title;
  @attr("string") body;
}
