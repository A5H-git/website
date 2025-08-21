import humps from "humps";

import { API_ROOT } from "@/utils/constants";


/**
 * Performs Fetch request against the backend API.
 * @param endpoint    - Path relative to the API root.
 * @param options     - Additional `fetch` options (e.g. headers, body, etc.)
 * @returns The JSON response in camelCase.
 * 
 * @throws {Error} If the response is NOK.
 */
export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_ROOT}${endpoint}`, options);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return humps.camelizeKeys(data) as T; 
}
