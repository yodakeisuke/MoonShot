import { useRecoilCallback, useRecoilTransaction_UNSTABLE } from "recoil";
import { stateWhyCause, stateWhyIds } from "../components/viewModel/Why/WhyState";
import { WhyId, WhyCause, Why } from "../components/viewModel/Why/WhyType";

export const useWhy = () => {

  const upsertWhy = useRecoilTransaction_UNSTABLE(({set}) => (newWhy: Why) => {
    set(stateWhyIds, (prev => [...prev,newWhy.id]));
    set(stateWhyCause(newWhy.id),newWhy.cause);
  });

  const setUpWhys = useRecoilCallback(() => (Whys: Why[]) => {
    Whys.forEach((why) => {
      upsertWhy(why);
    });
  });

  const removeWhy = useRecoilTransaction_UNSTABLE(({set, reset}) => (id: WhyId) => {
    set(stateWhyIds, (prev) => prev.filter((e) => e !== id));
    reset(stateWhyCause(id));
  });

  const changeWhyCause = useRecoilCallback(({set}) => (id: WhyId, newCause: WhyCause) => {
    set(stateWhyCause(id),newCause);
  });

  return {
    setUpWhys,
    upsertWhy,
    removeWhy,
    changeWhyCause,
  };
};
