/* eslint-disable */

/**
 * Expects items to be objects with an .id key.
 */
export const getMax = (collection) => {
  const allIds = collection.map(item => item.id);
  const maxId = Math.max(...allIds);
  return maxId;
}
