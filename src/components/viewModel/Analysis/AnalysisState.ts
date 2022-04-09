import { atom } from 'recoil';
import { AsIs, ToBe, Gap } from 'components/viewModel/Analysis/AnalysisType';

/* values */

export const stateAsIs = atom<AsIs>({
  key: 'AsIsDesc',
  default: '（テーマ）についてどのような状態である',
});

export const stateToBe = atom<ToBe>({
  key: 'ToBeDesc',
  default: '（テーマ）についてどのような状態であるべきである',
});

export const stateGap = atom<Gap>({
  key: 'gapDesc',
  default: 'どこについて何がどの程度どうなっていない',
});
