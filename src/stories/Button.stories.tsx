import Button, { Props as ButtonProps} from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export const Primary = (args: ButtonProps) => <Button {...args} />;

Primary.args = {
  label: 'Button',
};