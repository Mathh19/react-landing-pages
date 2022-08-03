import { renderTheme } from '../../styles/render-themes';
import Home from './index';

describe('<Home />', () => {
  test('it should render home', () => {
    renderTheme(<Home />);
  });
});
