import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import Editable from 'components/shared/Editable';

export default {
  component: Editable,
} as ComponentMeta<typeof Editable>;

export const Index: ComponentStoryObj<typeof Editable> = {
  args: {
    label: 'story',
    placeHolder: 'holder1',
    rows: 2,
    onChange: () => {},
  },
};

export const VerticallyLong: ComponentStoryObj<typeof Editable> = {
  args: {
    label: 'verticallyLong',
    placeHolder: 'holder2',
    rows: 5,
    onChange: () => {},
  },
};
