import { GetLatestReleases } from "../types";

export const toLatestReleasesUrl = (args: GetLatestReleases) => {
  return `anime/releases/latest?=${args.limit}`;
};
