// cache.ts
import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import localforage from "localforage";

// Create a Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry on failure
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

// Create an Asynchronous Persister with LocalForage
const persister = createAsyncStoragePersister({
  storage: localforage,
});

persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 24, // Cache for 24 hours
});

export default queryClient;
