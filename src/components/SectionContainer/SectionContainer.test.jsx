import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-themes';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  test('it should render', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
