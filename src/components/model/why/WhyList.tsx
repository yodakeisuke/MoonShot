import React from "react"
import Stack from '@mui/material/Stack';
import WhyButton from "../../atom/WhyButton";
import InputBox from "../../atom/InputBox";
import { selectAllWhys, selectBottomId,  }from "./WhyState"
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useWhy } from "../../../hooks/useWhyStatus";
import { WhyCause, WhyId } from "./WhyType";

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
    const newCause: WhyCause = "dummy";
    upsertWhy({
      id: BottomId + 1,
      cause: newCause
    });
  }, [Whys, upsertWhy])

  return (
    <div>
      <h1>Recoil Why List Sample</h1>
      <button onClick={addWhy}>Add Dummy Why</button>
      <ul>
        {Whys.map((Why) => (
          <li key={Why.id}>
            <div>
              <p>
                原因: {Why.cause}
              </p>
            </div>
            <button onClick={() => removeWhy(Why.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
