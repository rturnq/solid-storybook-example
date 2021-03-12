import Button from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export const Primary = (args) => <Button {...args} />;

Primary.args = {
  label: 'Button',
};