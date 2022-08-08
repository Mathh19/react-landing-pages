import { screen, fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/render-themes';
import { Menu } from '.';

import linkMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  test('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linkMock} logoData={logoData}>
        Children
      </Menu>,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  test('should render menu mobile and button for open and close the menu', () => {
    renderTheme(
      <Menu links={linkMock} logoData={logoData}>
        Children
      </Menu>,
    );

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  test('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
