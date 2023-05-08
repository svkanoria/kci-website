import { groupBy, mapObjIndexed, omit, T, values } from "ramda";

export interface PageLink {
  href: string;
  title: string;
  thumb?: string;
  banner?: string;
  desc?: string;
  group?: string;
}

const getLinkHref = (path: string): string => {
  let result = path.replace(/.*pages\//, "/").replace(/(\/index)?\.[^.]*$/, "");
  if (result === "") result = "/"; // Edge case to correctly handle home page
  return result;
};

const getLinkTitle = (href: string): string =>
  href
    .substring(href.lastIndexOf("/") + 1)
    .split("-")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");

const buildPageLink = (path: string, data: any): PageLink => ({
  href: getLinkHref(path),
  title: data.__kci_navTitle ?? getLinkTitle(getLinkHref(path)),
  thumb: data.__kci_navThumb ?? undefined,
  banner: data.__kci_navBanner ?? undefined,
  desc: data.__kci_navDesc ?? undefined,
  group: data.__kci_navGroup ?? undefined,
});

const getPageLinks = (
  glob: Record<string, () => Promise<unknown>>
): Promise<Record<string, PageLink[]>> =>
  Promise.all(
    Object.entries(glob)
      .filter(([path]) => !/.*index\./.test(path))
      .map(([path, fn]) => fn().then((data) => ({ path, data })))
  )
    .then((pages) => pages.map(({ path, data }) => buildPageLink(path, data)))
    .then(groupBy((l) => l.group ?? "__default"));

const getPageLink = async (
  glob: Record<string, () => Promise<unknown>>
): Promise<PageLink> => {
  const [path, fn] = Object.entries(glob)[0];
  const data = await fn();
  return buildPageLink(path, data);
};

const mapPageLinks = <T>(
  f: (links: PageLink[], group: string) => T,
  links: Record<string, PageLink[]>
) => values(mapObjIndexed(f, links));

const concatPageLink = (
  links: Record<string, PageLink[]>,
  link: PageLink,
  group: string = "__default"
) => ({
  [group]: [link, ...(links[group] ?? [])],
  ...omit([group], links),
});

const DEFAULT_NAV_GROUP = "__default";

const isDefaultNavGroup = (group: string) => group === DEFAULT_NAV_GROUP;

export {
  getPageLink,
  getPageLinks,
  mapPageLinks,
  concatPageLink,
  DEFAULT_NAV_GROUP,
  isDefaultNavGroup,
};
