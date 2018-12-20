import { helper } from "@ember/component/helper";

export function isNewVersion([version, latestRelease]) {
  if (version.includes(latestRelease)) {
    return true;
  }

  return false;
}

export default helper(isNewVersion);
