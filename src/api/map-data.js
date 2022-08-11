export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footerText: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections,
      menu,
    };
  });
};
