import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base/index';
import { mockBase } from '../Base/mock';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/api/pages/?filters[slug]=criando-para-teste&populate=deep',
      );
      const json = await data.json();
      const { attributes } = json.data[0];
      const pageData = mapData([attributes]);
      setData(pageData[0]);
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    console.log(data);
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
