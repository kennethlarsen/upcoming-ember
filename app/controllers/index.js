import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  latestRelease: computed("model", function() {
    let highestNumber = 0;
    let versions = this.get("model.ember").map(release => release.tag_name);

    versions.forEach(version => {
      if (version[3] > highestNumber) {
        highestNumber = version[3];
      }
    });

    return `v3.${highestNumber}`;
  }),
});
