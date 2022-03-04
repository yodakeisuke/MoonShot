import React from "react"
import Stack from '@mui/material/Stack';
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useWhy } from "../../../hooks/useWhyStatus";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box } from "@mui/material";
import Editable from "../../molecules/Editable";
import { selectAllWhys, selectBottomWhyId } from "./WhyState";
import { Why, WhyId } from "./WhyType";

const apiResponse = {
  Whys: [
  ],
};

export const WhyList = () => {
  const whys: Why[] = useRecoilValue(selectAllWhys);
  const bottomWhyId: WhyId = useRecoilValue(selectBottomWhyId);
  const { setUpWhys, upsertWhy, removeWhy } = useWhy();

  useEffect(() => {
    setUpWhys(apiResponse.Whys);
  }, []);

  const addWhy = useCallback(() => {
    upsertWhy({
      id: bottomWhyId + 1,
      cause: ""
    });
  }, [whys, upsertWhy])

  const popWhy = useCallback(() => {
    removeWhy(bottomWhyId);
  }, [whys, removeWhy])

  return (
    <React.Fragment>
        {whys.map((why) => (
          <Stack spacing={1}>
            <Editable label={why.id} placeHolder={why.cause} />
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
