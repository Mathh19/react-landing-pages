import { TextComponent } from './index';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga placeat,
    esse hic quos sit sint dicta quia ex magnam rem eos culpa quo,
    non alias officia labore, ratione aut nemo.`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
