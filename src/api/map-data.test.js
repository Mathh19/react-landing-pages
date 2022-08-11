import { mapData } from './map-data';

describe('map-data', () => {
  test('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({});
  });

  test('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footerText: '<p>Test</p>',
        slug: 'slug',
        title: 'title',
        sections: [1, 2, 3, 4],
        menu: { test: 'test' },
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Test</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
    expect(pagesData.sections).toEqual([1, 2, 3, 4]);
    expect(pagesData.menu).toEqual({ test: 'test' });
  });
});
