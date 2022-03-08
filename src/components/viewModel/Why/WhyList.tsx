import React from "react"
import Stack from '@mui/material/Stack';
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useWhy } from "../../../hooks/useWhyStatus";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, List, ListItem } from "@mui/material";
import Editable from "../../shared/Editable";
import { selectAllWhys, selectRootCause } from "./WhyState";
import { Why } from "./WhyType";
import { changeEvent } from "../GlobalType";
import { stateGap } from "../Analysis/AnalysisState";



{/*const apiResponse = {
  Whys: [
    {id: 1, cause: "なぜなぜ"}
  ],
};*/}

export const WhyList = () => {
  const [gap, setGap] = useRecoilState(stateGap);
  const whys: Why[] = useRecoilValue(selectAllWhys);
  const rootCause: Why = useRecoilValue(selectRootCause);
  const { setUpWhys, upsertWhy, removeWhy, changeWhyCause } = useWhy();

  {/*useEffect(() => {
    setUpWhys(apiResponse.Whys);
  }, []);*/}

  const addWhy = useCallback(() => {
    upsertWhy({
      id: rootCause.id + 1,
      cause: ""
    });
  }, [whys, upsertWhy]);

  const popWhy = useCallback(() => {
    removeWhy(rootCause.id);
  }, [whys, removeWhy]);

  return (
    <React.Fragment>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Editable
            label="gap on the surface:"
            placeHolder={gap}
            onChange={(ev: changeEvent) => setGap(ev.target.value)}
        />
        <KeyboardDoubleArrowDownIcon sx={{alignSelf: "center"}} />
      </Box>
      <List sx={{width: '100%'}}>
        {whys.map((why) => (
          <ListItem key={why?.id} disablePadding={true}>
            <Box sx={{display: "grid", flex: 1}}>
              <Editable
                onChange={(ev: changeEvent) => changeWhyCause(why?.id, ev.target.value)}
                label="because..." placeHolder={why?.cause}
              />
              <KeyboardDoubleArrowDownIcon sx={{justifySelf: "center"}}/>
            </Box>
          </ListItem>
          )
        )}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button onClick={popWhy} variant="contained" size="medium">
          TRUE? <ArrowUpwardIcon />
        </Button>
        <Button onClick={addWhy} variant="contained" size="medium">
          WHY? <ArrowDownwardIcon />
        </Button>
      </Box>
    </React.Fragment>
  );
};
