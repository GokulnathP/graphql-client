import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

/*
* Library - "@tanstack/react-query, graphql-request,
*            @graphql-codegen/cli,
*            @graphql-codegen/typescript
*            @graphql-codegen/typescript-operations
*            @graphql-codegen/typescript-react-query"
* Have hooks, client side parsing graphql query, cache and so on
* Auto generated types output
* */

const client = new QueryClient()

export const GCBooksProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}