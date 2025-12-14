export const API_CONFIG = {
  BASE_URL: "http://localhost:8000", // Use localhost for both local dev and Docker (since backend is port mapped)
  ENDPOINTS: {
    TRANSLATE: "/translate/",
    LANGUAGES: "/languages",
    MESSAGES: '/messages',
  }
};

export function getApiUrl(endpoint) {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
}
