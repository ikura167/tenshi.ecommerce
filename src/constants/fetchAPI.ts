export interface APIOptions<TBody = unknown> {
  url?: string;
  query?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  auth?: string;
  contentType?: string;
  body?: TBody;
  delay?: number;
}
