export function handleUserInput(searchItem) {
  const FILTERING = 'FILTERING';
  return {
    type: FILTERING,
    searchItem
  }
}
