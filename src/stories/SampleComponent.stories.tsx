import React from "react";
import { Story, Meta } from "@storybook/react";

import { SampleComponent, SampleComponentProps } from "../components/SampleComponent";

export default {
  title: "Example/SampleComponent",
  component: SampleComponent,
} as Meta;

const Template: Story<SampleComponentProps> = (args) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Hello, Storybook!",
};
