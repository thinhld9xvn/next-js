import { WP_API_URL } from "@constants/constants";
const API_URL = WP_API_URL;
export async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) {    
    throw new Error('Failed to fetch API');
  }
  return json.data;
}