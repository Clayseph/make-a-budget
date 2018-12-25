export const STORE_ACTIONS = {
  UPDATE_BUDGET_LIST: 'UPDATE_BUDGET_LIST',
};

export function updateBudget(budget) {
  return { type: STORE_ACTIONS.UPDATE_BUDGET_LIST, budget };
}
