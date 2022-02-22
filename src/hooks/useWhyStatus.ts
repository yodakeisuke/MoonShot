import { useRecoilCallback } from "recoil";
import { stateWhy, stateWhyIds } from "../components/model/why/WhyState";
import { Why, WhyId } from "../components/model/why/WhyType";

export const useWhy = () => {

  const readWhys = useRecoilCallback(({ set }) => (Whys: Why[]) => {
    Whys.forEach((why) => {
      set(stateWhy(why.id), why);
    });
  });

  const upsertWhy = useRecoilCallback(({ set }) => (newWhy: Why) => {
    set(stateWhy(newWhy.id), newWhy);
  });

  const removeWhy = useRecoilCallback(({ set, reset }) => (id: WhyId) => {
    reset(stateWhy(id));
    set(stateWhyIds, (prev) => prev.filter((id) => id !== id));
  });

  return {
    readWhys,
    upsertWhy,
    removeWhy,
  };
};
