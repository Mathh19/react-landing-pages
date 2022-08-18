import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/index';
import { Heading } from '../Headig/index';
import { TextComponent } from '../TextComponent/index';

export const GridImage = ({
  background = false,
  title,
  description,
  grid,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={`${element.srcImg}${element.altTxt}`}>
              <Styled.Image src={element.srcImg} alt={element.altTxt} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altTxt: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
