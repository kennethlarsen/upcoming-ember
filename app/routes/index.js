import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model() {
    return hash({
      ember: this.get("store").query("github-release", {
        repo: "emberjs/ember.js"
      }),
      datajs: this.get("store").query("github-release", {
        repo: "emberjs/data"
      }),
      cli: this.get("store").query("github-release", {
        repo: "ember-cli/ember-cli"
      })
    });
  }
});
