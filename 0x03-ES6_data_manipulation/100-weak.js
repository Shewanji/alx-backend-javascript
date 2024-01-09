// Create a WeakMap instance to track the number of queries for each endpoint
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize the count for the endpoint if not present in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the current endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is >= 5, throw an error if true
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Return the current count for the endpoint
  return count;
}
