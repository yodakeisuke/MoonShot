import React from 'react';
import { useRecoilState } from 'recoil';

import Editable from 'components/shared/Editable';
import StepLeader from 'components/shared/StepLeader';
import { stateAsIs, stateGap, stateToBe } from 'components/viewModel/Analysis/AnalysisState';
import { ChangeEvent } from 'components/viewModel/GlobalType';

import Box from '@mui/material/Box';

export const AnalysisList: React.FC = () => {
  const [asIs, setAsIs] = useRecoilState(stateAsIs);
  const [toBe, setToBe] = useRecoilState(stateToBe);
  const [gap, setGap] = useRecoilState(stateGap);

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box>
        <StepLeader step={1} lead="理想の状態を書き出す" />
        <Editable
          label="ToBe:"
          placeHolder={asIs}
          onChange={(ev: ChangeEvent) => setAsIs(ev.target.value)}
        />
      </Box>
      <Box>
        <StepLeader step={2} lead="現在の状態を書き出す" />
        <Editable
          label="AsIs:"
          placeHolder={toBe}
          onChange={(ev: ChangeEvent) => setToBe(ev.target.value)}
        />
      </Box>
      <Box>
        <StepLeader step={3} lead="理想 - 現在 の差分抽出" />
        <Editable
          label="Gap:"
          placeHolder={gap}
          onChange={(ev: ChangeEvent) => setGap(ev.target.value)}
        />
      </Box>
    </Box>
  );
};

export default AnalysisList;
