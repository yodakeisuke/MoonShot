import React from "react"
import { selectAllActions, selectBottomActionId }from "./ActionState"
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useAction } from "../../../hooks/useActionStatus";
import { ActionId, Action } from "./ActionType";
import { Box, List, ListItem } from "@mui/material";
import ActionEval from "./ActionEval";

{/*const apiResponse = {
  Actions: [
    {id: 1, plan: "アクション", isAdopted: false}
  ],
};*/}

export const ActionEvalList: React.FC = () => {
  const actions: Action[] = useRecoilValue(selectAllActions);

  const { setUpActions } = useAction();

  {/*useEffect(() => {
    setUpActions(apiResponse.Actions);
  }, []);*/}

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
