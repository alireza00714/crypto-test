// cache.ts
import { QueryClient, onlineManager } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import localforage from "localforage";

// Initialize LocalForage storage for persistence
localforage.config({
  name: "crypto-test",
  storeName: "reqStore",
});

// Create a Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry on failure
      staleTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false, // Disable refetching on window focus
      refetchOnReconnect: false, // Disable refetching on network reconnect
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

// Set offline mode detection for react-query
onlineManager.setEventListener((setOnline) => {
  const onOnline = () => setOnline(true);
  const onOffline = () => setOnline(false);

  window.addEventListener("online", onOnline);
  window.addEventListener("offline", onOffline);

  // Return a cleanup function to remove the event listeners
  return () => {
    window.removeEventListener("online", onOnline);
    window.removeEventListener("offline", onOffline);
  };
});

export default queryClient;
