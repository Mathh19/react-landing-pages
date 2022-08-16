import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu/index';
import { Footer } from '../../components/Footer/index';
import { GoTop } from '../../components/GoTop/index';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
