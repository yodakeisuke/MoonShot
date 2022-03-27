import React from "react";
import { useRecoilValue } from 'recoil';

import { selectAllActions }from 'components/viewModel/Action/ActionState';
import { Action } from 'components/viewModel/Action/ActionType';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ActionEval from "./ActionEval";

export const ActionEvalList: React.FC = () => {
  const actions: Action[] = useRecoilValue(selectAllActions);

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <List sx={{width: '100%'}}>
        {actions.map((action?) => (
          <ListItem key={action?.id} disablePadding={true}>
            <ActionEval  plan={action?.plan} actionId={action?.id} />
          </ListItem>
          ))
        }
      </List>
    </Box>
  );
};
