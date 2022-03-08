import React from "react"
import { selectAllActions, selectBestAction, selectBottomActionId }from "./ActionState"
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useAction } from "../../../hooks/useActionStatus";
import { ActionId, Action } from "./ActionType";
import Button from "@mui/material/Button";
import { Box, IconButton, ListItem } from "@mui/material";
import Editable from "../../shared/Editable";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { changeEvent } from "../../../pages/GlobalType";
import { selectRootCause } from "../Why/WhyState";
import { Why} from "../Why/WhyType";
import { useWhy } from "../../../hooks/useWhyStatus";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { List } from "@mui/material";

{/*const apiResponse = {
  Actions: [
    {id: 1, plan: "アクション", isAdopted: false, cost: 50, performance: 50}
  ],
};*/}

export const ActionList: React.FC = () => {
  const actions: Action[] = useRecoilValue(selectAllActions);
  const rootCause: Why = useRecoilValue(selectRootCause);
  const bottomActionId: ActionId = useRecoilValue(selectBottomActionId);

  const { setUpActions, upsertAction, removeAction, changeActionPlan } = useAction();
  const { changeWhyCause } = useWhy();

  {/* useEffect(() => {
    setUpActions(apiResponse.Actions);
  }, []); */}

  const addAction = useCallback(() => {
    const newId: ActionId = bottomActionId + 1;
    upsertAction({
      id: newId,
      plan: "",
      isAdopted: false,
      cost: 50,
      performance: 50,
    });
  }, [actions, upsertAction])

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Editable
              onChange={(ev: changeEvent) => changeWhyCause(rootCause.id, ev.target.value)}
              label="root cause" placeHolder={rootCause.cause}
      />
      <KeyboardDoubleArrowUpIcon sx={{alignSelf: "center"}}/>
      <List sx={{width: '100%'}}>
        {actions.map((action?) => (
          <ListItem key={action?.id} disablePadding={true}>
            <Box sx={{display :"flex", justifyContent: "space-between", alignItems: "center", flex: 1}}>
              <Editable onChange={(ev: changeEvent) => changeActionPlan(action?.id, ev.target.value)}
                label="then..." placeHolder={action?.plan}/>
              <IconButton onClick={() => removeAction(action?.id)}>
                <DeleteForeverIcon/ >
              </IconButton>
            </Box>
          </ListItem>
          ))
        }
      </List>
      <Button onClick={addAction}
        variant="contained" size="medium" sx={{width: "20%", alignSelf: "center"}}>
        <AddCircleIcon />
      </Button>
    </Box>
  );
};
