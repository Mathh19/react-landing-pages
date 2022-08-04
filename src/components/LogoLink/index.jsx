import P from 'prop-types';
import { Heading } from '../Headig/index';
import * as Styled from './styles';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
