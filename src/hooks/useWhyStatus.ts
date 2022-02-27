import { useRecoilCallback, useRecoilTransaction_UNSTABLE } from "recoil";
import { stateWhyCause, stateWhyIds } from "../components/model/why/WhyState";
import { WhyId, WhyCause, Why } from "../components/model/why/WhyType";

export const useWhy = () => {

  const upsertWhy = useRecoilTransaction_UNSTABLE(({set}) => (newWhy: Why) => {
    set(stateWhyIds, (prev => [...prev,newWhy.id]))
    set(stateWhyCause(newWhy.id),newWhy.cause)
  });

  const setUpWhys = useRecoilCallback(() => (Whys: Why[]) => {
    Whys.forEach((why) => {
      upsertWhy(why);
    });
  });

  const removeWhy = useRecoilTransaction_UNSTABLE(({set, reset}) => (id: WhyId) => {
    set(stateWhyIds, (prev) => prev.filter((e) => e !== id));
    reset(stateWhyCause(id))
  });

  return {
    setUpWhys,
    upsertWhy,
    removeWhy,
  };
};
