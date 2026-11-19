export const API_MESSAGES = {
  SUCCESS: {
    PRODUCTS_RETRIEVED: "Products retrieved successfully",
    GENRES_RETRIEVED: "Genres retrieved successfully",
  },

  ERROR: {
    PRODUCTS_RETRIEVAL_FAILED: "Failed to retrieve products",
    GENRES_RETRIEVAL_FAILED: "Failed to retrieve genres",
    INTERNAL_SERVER_ERROR: "Internal server error",
  },
} as const;
