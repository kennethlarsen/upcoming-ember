import { helper } from '@ember/component/helper';

export function stripChangelog(params/*, hash*/) {
  let [content] = params;
  content = content.split('Changelog');

  return content[1];
}

export default helper(stripChangelog);
