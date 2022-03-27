import { atom, atomFamily, selector, selectorFamily } from 'recoil';

import { WhyId, WhyCause, Why } from "components/viewModel/Why/WhyType";

/* values */

export const stateWhyIds = atom<WhyId[]>({
  key: "whyIds",
  default: [1],
});

export const stateWhyCause = atomFamily<WhyCause, WhyId>({
  key: "whyCause",
  default: "",
});

/* model */

export const selectWhy = selectorFamily<Why, WhyId>({
  key: "Why",
  get: (whyId) => ({ get }) => {
    return {
      id: whyId,
      cause: get(stateWhyCause(whyId)),
    };
  }
});

/* selectors */

export const selectRootCause = selector<Why>({
  key: "getRootCause",
  get: ({ get }) => {
    const Ids: WhyId[] = get(stateWhyIds);
    const aryMax = function (a: WhyId, b: WhyId) {return Math.max(a, b);}
    const BottomId = Ids.length ? Ids.reduce(aryMax) : 0;
    return get(selectWhy(BottomId));
  },
});

export const selectAllWhys = selector({
  key: "getAllWhys",
  get: ({ get }) => {
    const whyIds = get(stateWhyIds);
    return whyIds.map((id) => get(selectWhy(id)));
  },
});
