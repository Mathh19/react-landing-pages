import { mapSections, mapSectionTwoColumns } from './map-sections';

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
});
