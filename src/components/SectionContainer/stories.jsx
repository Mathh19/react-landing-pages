import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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

export const Container = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
