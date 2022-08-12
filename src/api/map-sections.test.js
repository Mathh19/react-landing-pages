import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

describe('map-sections', () => {
  test('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  test('should map sections two columns is empty', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  test('should map sections two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'test',
      },
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('test');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  test('should map section content without data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  test('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });

    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('Pricing');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('pricing');
    expect(data.html).toBe('abc');
  });
});
