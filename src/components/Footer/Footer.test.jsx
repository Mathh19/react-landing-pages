import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-themes';

describe('<Footer />', () => {
  test('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Test</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
