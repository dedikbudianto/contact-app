export const FILTERING = 'FILTERING';

export function handleUserInput(searchItem) {
  return {
    type: FILTERING,
    searchItem
  }
}
