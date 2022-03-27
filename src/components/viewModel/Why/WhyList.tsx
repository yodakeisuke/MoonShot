import React from 'react'
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Editable from 'components/shared/Editable';
import { selectAllWhys, selectRootCause } from 'components/viewModel/Why/WhyState';
import { Why } from 'components/viewModel/Why/WhyType';
import { changeEvent } from 'components/viewModel/GlobalType';
import { stateGap } from 'components/viewModel/Analysis/AnalysisState';
import { useWhy } from 'hooks/useWhyStatus';

import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const WhyList: React.FC = () => {

  const [gap, setGap] = useRecoilState(stateGap);
  const whys: Why[] = useRecoilValue(selectAllWhys);
  const rootCause: Why = useRecoilValue(selectRootCause);
  const { upsertWhy, removeWhy, changeWhyCause } = useWhy();

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
