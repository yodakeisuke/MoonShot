import React from "react"
import Stack from '@mui/material/Stack';
import { selectAllActions, selectBottomActionId }from "./ActionState"
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useAction } from "../../../hooks/useActionStatus";
import { ActionId, Action } from "./ActionType";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import Editable from "../../molecules/Editable";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const apiResponse = {
  Actions: [
  ],
};

export const ActionList = () => {
  const actions: Action[] = useRecoilValue(selectAllActions);
  const bottomId: ActionId = useRecoilValue(selectBottomActionId);

  const { setUpActions, upsertAction, removeAction } = useAction();

  useEffect(() => {
    setUpActions(apiResponse.Actions);
  }, []);

  const addAction = useCallback(() => {
    const newId: ActionId = bottomId + 1;
    upsertAction({
      id: newId,
      plan: "",
      isAdopted: false,
    });
  }, [actions, upsertAction])

  return (
    <React.Fragment>
        {actions.map((action) => (
          <Stack spacing={1}>
            <Box sx={{display :"flex", justifyContent: "space-between"}}>
              <Editable label={action.id} placeHolder={action.plan}/>
              <Button onClick={() => removeAction(action.id)}
                variant="contained" size="small" sx={{mx: 3, my: 5}}>
                <DeleteForeverIcon />
              </Button>
            </Box>
          </Stack>
          ))}
      <Button onClick={addAction}
        variant="contained" size="medium" sx={{ml: 40, mr: 50}}>
        <AddCircleIcon />
      </Button>
    </React.Fragment>
  );
};
