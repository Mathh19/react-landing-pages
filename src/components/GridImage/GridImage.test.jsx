import { GridImage } from '.';
import { renderTheme } from '../../styles/render-themes';

import mock from './mock';

describe('<GridImage />', () => {
  test('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
