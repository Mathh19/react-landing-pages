import { GridText } from '.';
import { renderTheme } from '../../styles/render-themes';

import mock from './mock';

describe('<GridText />', () => {
  test('should render with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test('should render whithout background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
