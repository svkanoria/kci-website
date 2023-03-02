export interface PageLink {
  href: string;
  title: string;
}

const getLinkHref = (path: string): string =>
  path.replace(/.*pages\//, "/").replace(/(\/index)?\..*$/, "");

const getLinkTitle = (href: string): string =>
  href
    .substring(href.lastIndexOf("/") + 1)
    .split("-")
    .map((i) => i[0].toUpperCase() + i.slice(1))
    .join(" ");

const getPageLinks = (
  glob: Record<string, () => Promise<unknown>>
): Promise<PageLink[]> =>
  Promise.all(
    Object.entries(glob)
      .filter(([path]) => !/.*index\./.test(path))
      .map(([path, fn]) => fn().then((data) => ({ path, data })))
  ).then((pages) =>
    pages.map(({ path, data }) => ({
      href: getLinkHref(path),
      title: (data as any).__kci_navTitle ?? getLinkTitle(getLinkHref(path)),
    }))
  );

const getPageLink = async (
  glob: Record<string, () => Promise<unknown>>
): Promise<PageLink> => {
  const [path, fn] = Object.entries(glob)[0];
  const data = await fn();
  return {
    href: getLinkHref(path),
    title: (data as any).__kci_navTitle ?? getLinkTitle(getLinkHref(path)),
  };
};

export { getPageLink, getPageLinks };
