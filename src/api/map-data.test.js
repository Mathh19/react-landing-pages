import { mapData } from './map-data';

describe('map-data', () => {
  test('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  test('should map data if there are data', () => {
    const pagesData = mapData({
      data: [
        {
          footerText: '<p>Test</p>',
          slug: 'slug',
          title: 'title',
        },
      ],
    })[0];
    expect(pagesData.footerHtml).toBe('<p>Test</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
