import { helper } from '@ember/component/helper';

export function isReleasePost(params/*, hash*/) {
  let [title, version] = params;

  title = title.replace(/\D/g,''); 
  version = version.replace(/\D/g,'');

  if (title.includes(version)) {
    return true;
  }

  return false;
}

export default helper(isReleasePost);
