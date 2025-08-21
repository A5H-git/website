/**
 * Builds the query string used in conjunctionw with the API.
 * @param params - Key-value pairs used for querying the API.
 * @returns The query string
 */
function buildQuery(params: Record<string, any>): string {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });

  return query.toString();
}


export default buildQuery;