import { useRecoilCallback, useRecoilTransaction_UNSTABLE } from 'recoil';
import { stateActionPlan, stateActionIds, stateActionIsAdopted } from 'components/viewModel/Action/ActionState';
import { ActionId, ActionPlan, Action } from 'components/viewModel/Action/ActionType';

export const useAction = () => {

  const upsertAction = useRecoilTransaction_UNSTABLE(({set}) => (newAction: Action) => {
    set(stateActionIds, (prev => [...prev,newAction.id]));
    set(stateActionPlan(newAction.id),newAction.plan);
  });

  const setUpActions = useRecoilCallback(() => (Actions: Action[]) => {
    Actions.forEach((Action) => {
      upsertAction(Action);
    });
  });

  const removeAction = useRecoilTransaction_UNSTABLE(({set, reset}) => (id: ActionId) => {
    set(stateActionIds, (prev) => prev.filter((e) => e !== id));
    reset(stateActionPlan(id));
  });

  const AdoptAction = useRecoilCallback(() => ({set}) => {
    set(stateActionIsAdopted,true)
  });

  const changeActionPlan = useRecoilCallback(({set}) => (id: ActionId, newPlan: ActionPlan) => {
    set(stateActionPlan(id),newPlan);
  });

  return {
    setUpActions,
    upsertAction,
    removeAction,
    AdoptAction,
    changeActionPlan,
  };
};
