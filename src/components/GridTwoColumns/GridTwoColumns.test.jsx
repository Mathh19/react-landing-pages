import { renderTheme } from '../../styles/render-themes';
import { GridTwoColumns } from './index';

import mock from './mock';

describe('<GridTwocolumns />', () => {
  test('should render grid with two columns', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
