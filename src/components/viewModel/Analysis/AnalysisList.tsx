import React, { useEffect } from "react"
import { useRecoilCallback, useRecoilState } from "recoil";
import { Box } from "@mui/material";
import Editable from "../../shared/Editable";
import { changeEvent } from "../../../pages/GlobalType";
import StepLeader from "../../shared/StepLeader";
import { stateAsIs, stateGap, stateToBe } from "./AnalysisState";
import { Analysis } from "./AnalysisType";

const apiResponse = {
  Analysis:
    {asIs: "a", toBe: "b", gap: "c"}
};

export const AnalysisList: React.FC = () => {
  const [asIs, setAsIs] = useRecoilState(stateAsIs);
  const [toBe, setToBe] = useRecoilState(stateToBe);
  const [gap, setGap] = useRecoilState(stateGap);

  useEffect(() => {
    setUpAnalysis(apiResponse.Analysis);
  }, []);

  const setUpAnalysis = useRecoilCallback(() => (analysis: Analysis) => {
    setAsIs(analysis.asIs);
    setToBe(analysis.toBe);
    setGap(analysis.gap);
  });

  return (
    <Box sx={{display: 'grid', gap: 3}}>
      <Box>
        <StepLeader step={1} lead="理想の状態を書き出す" />
        <Editable
          label="ToBe:"
          placeHolder={asIs}
          onChange={(ev: changeEvent) => setAsIs(ev.target.value)}
        />
      </Box>
      <Box>
      <StepLeader step={2} lead="現在の状態を書き出す" />
        <Editable
          label="AsIs:"
          placeHolder={toBe}
          onChange={(ev: changeEvent) => setToBe(ev.target.value)}
        />
      </Box>
      <Box>
        <StepLeader step={3} lead="理想 - 現在 の差分抽出" />
        <Editable
          label="Gap:"
          placeHolder={gap}
          onChange={(ev: changeEvent) => setGap(ev.target.value)}
        />
      </Box>
    </Box>
  );
};

export default AnalysisList
