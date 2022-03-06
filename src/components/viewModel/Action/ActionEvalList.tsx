import React from "react"
import Stack from '@mui/material/Stack';
import { selectAllActions, selectBottomActionId }from "./ActionState"
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useAction } from "../../../hooks/useActionStatus";
import { ActionId, Action } from "./ActionType";
import { Box } from "@mui/material";
import ActionEval from "./ActionEval";

const apiResponse = {
  Actions: [
   // {id: 1, plan: "アクション", isAdopted: false}
  ],
};

export const ActionEvalList: React.FC = () => {
  const actions: Action[] = useRecoilValue(selectAllActions);

  const { setUpActions } = useAction();

  useEffect(() => {
    setUpActions(apiResponse.Actions);
  }, []);

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
        {actions.map((action) => (
          <Stack spacing={1}>
            <ActionEval  plan={action.plan} actionId={action.id} />
          </Stack>
          ))}
    </Box>
  );
};
