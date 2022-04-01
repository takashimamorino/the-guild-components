import React from 'react';
import type { Story, Meta } from '@storybook/react/types-6-0';
import type { INewsletterProps } from '../types/components';
import { Newsletter } from './Newsletter';

export default {
  title: 'Components/Newsletter',
  component: Newsletter,
  argTypes: {
    onNewsletterSubmit: {
      table: {
        disable: true,
      },
      control: false,
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

const Template: Story<INewsletterProps> = (args) => <Newsletter {...args} />;

export const Default = Template.bind({});
Default.args = {
  onNewsletterSubmit: (e: React.FormEvent, value: string) => {
    console.log(e, value);
  },
};
