import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import { useAction } from 'hooks/useActionStatus';

import ActionEvalList from 'components/viewModel/Action/ActionEvalList';

export default {
  component: ActionEvalList,
  decorators: [
    (Story) => {
      const { upsertAction } = useAction();
      useEffect(() => {
        upsertAction({
          id: 1,
          plan: 'story',
          isAdopted: false,
          cost: 50,
          performance: 50,
        });
      }, [upsertAction]);

      return (
        <Story />
      );
    },
  ],
} as ComponentMeta<typeof ActionEvalList>;

export const Index: ComponentStoryObj<typeof ActionEvalList> = {
  args: {
  },
};
