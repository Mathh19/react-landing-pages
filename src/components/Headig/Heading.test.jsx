import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-themes';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  test('it should render with default values', () => {
    renderTheme(<Heading>Text test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text test' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  test('it should render with wihte color', () => {
    renderTheme(<Heading colorDark={false}>Text test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text test' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  test('it should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Text test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text test' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Text test</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text test' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Text test</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text test' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Text test</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Text test' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  test('it should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Text test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text test' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  test('it should render with uppercase latters', () => {
    renderTheme(<Heading uppercase>Text test</Heading>);
    const heading = screen.getByRole('heading', { name: 'Text test' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  test('it should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Text test</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
