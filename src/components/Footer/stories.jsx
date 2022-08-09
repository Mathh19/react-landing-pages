import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p><a href="https://github.com/Mathh19" target="_blank">Feito com <span class="heart">❤</span> por Matheus Freitas</a></p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
