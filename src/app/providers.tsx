import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/** @see {@link https://tanstack.com/query/latest/docs/framework/react/quick-start} */

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
