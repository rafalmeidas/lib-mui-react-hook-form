import { MUIHookFormTextField } from "../lib";

export default {
  title: "My Component/Button",
  component: MUIHookFormTextField,
};

const Template = (args) => ({
  //👇 Your template goes here
});

const PrimaryButton: any = Template.bind({});

PrimaryButton.args = {
  variant: "primary",
};

export const Primary = {
  args: {
    variant: "primary",
    children: "My First Button",
  },
};
