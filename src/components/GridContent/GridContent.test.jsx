import { GridContent } from '.';
import { renderTheme } from '../../styles/render-themes';

import mock from './mock';

describe('<GridContent />', () => {
  test('should render GridContent', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test('should render GridContent', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
