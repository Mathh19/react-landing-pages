import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-themes';

describe('<GoTop />', () => {
  test('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
