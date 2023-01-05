/**
 * Fetcher used by SWR to fetch data from APIs
 */
export const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);

  if (!res.ok) {
    if (url.startsWith("/api") && res.status === 401) {
      const refresh = await fetch("/api/auth/refresh", { method: "POST" });
      if (refresh.ok) {
        return fetcher(url);
      }
    }

    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return res.json();
};
