import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import Editable from 'components/shared/Editable';
import { selectAllActions, selectBottomActionId } from 'components/viewModel/Action/ActionState';
import { ActionId, Action } from 'components/viewModel/Action/ActionType';
import { selectRootCause } from 'components/viewModel/Why/WhyState';
import { Why } from 'components/viewModel/Why/WhyType';
import { useWhy } from 'hooks/useWhyStatus';
import { useAction } from 'hooks/useActionStatus';
import { ChangeEvent } from 'components/viewModel/GlobalType';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const ActionList: React.FC = () => {
  const actions: Action[] = useRecoilValue(selectAllActions);
  const rootCause: Why = useRecoilValue(selectRootCause);
  const bottomActionId: ActionId = useRecoilValue(selectBottomActionId);

  const { upsertAction, removeAction, changeActionPlan } = useAction();
  const { changeWhyCause } = useWhy();

  const addAction = useCallback(() => {
    const newId: ActionId = bottomActionId + 1;
    upsertAction({
      id: newId,
      plan: '',
      isAdopted: false,
      cost: 50,
      performance: 50,
    });
  }, [upsertAction, bottomActionId]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Editable
        onChange={(ev: ChangeEvent) => changeWhyCause(rootCause.id, ev.target.value)}
        label="root cause"
        placeHolder={rootCause.cause}
      />
      <KeyboardDoubleArrowUpIcon sx={{ alignSelf: 'center' }} />
      <List sx={{ width: '100%' }}>
        {actions.map((action) => (
          <ListItem key={action?.id} disablePadding>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
              <Editable
                onChange={(ev: ChangeEvent) => changeActionPlan(action?.id, ev.target.value)}
                label="then..."
                placeHolder={action?.plan}
              />
              <IconButton onClick={() => removeAction(action?.id)}>
                <DeleteForeverIcon />
              </IconButton>
            </Box>
          </ListItem>
        )) }
      </List>
      <Button
        onClick={addAction}
        variant="contained"
        size="medium"
        sx={{ width: '20%', alignSelf: 'center' }}
      >
        <AddCircleIcon />
      </Button>
    </Box>
  );
};

export default ActionList;
