import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: '^',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto quo
        earum assumenda. Voluptatum reprehenderit dolor nulla est voluptates
        esse sapiente omnis non natus, exercitationem officia tempore adipisci
        quod inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptates, rem reiciendis eos repudiandae veritatis fuga nihil facilis
        eveniet impedit illum dolore, voluptatem fugit nesciunt et iure. Magnam,
        at similique!
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto quo
        earum assumenda. Voluptatum reprehenderit dolor nulla est voluptates
        esse sapiente omnis non natus, exercitationem officia tempore adipisci
        quod inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptates, rem reiciendis eos repudiandae veritatis fuga nihil facilis
        eveniet impedit illum dolore, voluptatem fugit nesciunt et iure. Magnam,
        at similique!
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto quo
        earum assumenda. Voluptatum reprehenderit dolor nulla est voluptates
        esse sapiente omnis non natus, exercitationem officia tempore adipisci
        quod inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptates, rem reiciendis eos repudiandae veritatis fuga nihil facilis
        eveniet impedit illum dolore, voluptatem fugit nesciunt et iure. Magnam,
        at similique!
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto quo
        earum assumenda. Voluptatum reprehenderit dolor nulla est voluptates
        esse sapiente omnis non natus, exercitationem officia tempore adipisci
        quod inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptates, rem reiciendis eos repudiandae veritatis fuga nihil facilis
        eveniet impedit illum dolore, voluptatem fugit nesciunt et iure. Magnam,
        at similique!
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto quo
        earum assumenda. Voluptatum reprehenderit dolor nulla est voluptates
        esse sapiente omnis non natus, exercitationem officia tempore adipisci
        quod inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptates, rem reiciendis eos repudiandae veritatis fuga nihil facilis
        eveniet impedit illum dolore, voluptatem fugit nesciunt et iure. Magnam,
        at similique!
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto quo
        earum assumenda. Voluptatum reprehenderit dolor nulla est voluptates
        esse sapiente omnis non natus, exercitationem officia tempore adipisci
        quod inventore?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptates, rem reiciendis eos repudiandae veritatis fuga nihil facilis
        eveniet impedit illum dolore, voluptatem fugit nesciunt et iure. Magnam,
        at similique!
      </p>
      <GoTop {...args} />
    </div>
  );
};
