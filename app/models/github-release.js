import DS from "ember-data";

export default DS.Model.extend({
  tag_name: DS.attr(),
  html_url: DS.attr(),
  prerelease: DS.attr(),
  body: DS.attr(),

  author: DS.belongsTo()
});
