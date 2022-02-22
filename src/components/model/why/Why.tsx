import React from "react"
import Stack from '@mui/material/Stack';
import WhyButton from "../../atom/WhyButton";
import InputBox from "../../atom/InputBox";
import { stateWhyCause, stateWhys }from "./WhyState"
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useWhy } from "../../../hooks/useWhyStatus";

const apiResponse = {
  Whys: [
    { id: 1, cause: "first" },
  ],
};

export const WhyList = () => {
  const Whys = useRecoilValue(stateWhys);
  const { readWhys, upsertWhy, removeWhy } = useWhy();

  useEffect(() => {
    readWhys(apiResponse.Whys);
  }, []);

  const addWhy = useCallback(() => {
    const newWhyId = Whys[Whys.length - 1].id + 1;

    upsertWhy({
      id: newWhyId,
      cause: "",
    });
  }, [Whys, upsertWhy]);

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
