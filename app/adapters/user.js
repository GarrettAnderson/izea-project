// import JSONAPIAdapter from '@ember-data/adapter/json-api';

// export default class UserAdapter extends JSONAPIAdapter {
// }
import Typicode from "./typicode";

export default Typicode.extend({
  pathForType() {
    return "users";
  }
});
