import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sit corrupti debitis repellat. Quo, debitis voluptatibus fugiat porro
          cumque ratione assumenda? Culpa laboriosam veniam cupiditate voluptas
          a repellendus nam eum?
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
};

export const Background = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
