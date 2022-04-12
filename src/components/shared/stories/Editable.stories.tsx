import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react';
import Editable from '../Editable';

import { ThemeProvider } from '@mui/material/styles';
import lightTheme from '../../../components/Theme';
import CssBaseline from '@mui/material/CssBaseline';

export default {
  component: Editable,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof Editable>;

export const Index: ComponentStoryObj<typeof Editable> = {
  args: {
    label: 'story',
    placeHolder: 'holder',
    rows: 2,
    onChange: () => {},
  }
};
export const verticallyLong: ComponentStoryObj<typeof Editable> = {
  args: {
    label: 'verticallyLong',
    placeHolder: 'holder',
    rows: 5,
    onChange: () => {},
  }
};
