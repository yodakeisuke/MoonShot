import React from "react"
import Stack from '@mui/material/Stack';
import { selectAllWhys, selectBottomId,  }from "./WhyState"
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useWhy } from "../../../hooks/useWhyStatus";
import { WhyCause, WhyId } from "./WhyType";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box } from "@mui/material";
import Editable from "../../molecules/Editable";

const apiResponse = {
  Whys: [
  ],
};

export const WhyList = () => {
  const Whys = useRecoilValue(selectAllWhys);
  const BottomId = useRecoilValue(selectBottomId);
  const { setUpWhys, upsertWhy, removeWhy } = useWhy();

  useEffect(() => {
    setUpWhys(apiResponse.Whys);
  }, []);

  const addWhy = useCallback(() => {
    upsertWhy({
      id: BottomId + 1,
      cause: ""
    });
  }, [Whys, upsertWhy])

  const popWhy = useCallback(() => {
    removeWhy(BottomId);
  }, [Whys, removeWhy])

  return (
    <React.Fragment>
        {Whys.map((Why) => (
          <Stack spacing={1} alignItems="stretch">
            <Editable label={Why.id} placeHolder={Why.cause} />
            <KeyboardDoubleArrowDownIcon sx={{alignSelf: "center"}}/>
          </Stack>
          ))}
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
