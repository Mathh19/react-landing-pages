import { Base } from '../Base/index';
import { mockBase } from '../Base/mock';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
