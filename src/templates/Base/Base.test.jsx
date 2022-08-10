import { renderTheme } from '../../styles/render-themes';
import { Base } from '.';
import { mockBase } from './mock';

describe('<Base />', () => {
  test('it should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
