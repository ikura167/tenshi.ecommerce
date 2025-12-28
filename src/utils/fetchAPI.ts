import { ErrorMessage } from "@/constants/dtos/errorMessage";
import type { APIOptions } from "@/constants/fetchAPI";
import { minDelay } from "@/utils/generalUtils";

export async function fetchAPI<T>({
  url,
  method,
  auth = "",
  contentType = "application/json",
  body,
  delay = 300,
}: APIOptions): Promise<T> {
  const api = minDelay(
    fetch(`${url}`, {
      method: method,
      headers: {
        "Content-Type": contentType,
        ...(auth && { Authorization: `Bearer ${auth}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText: ErrorMessage = await response.json();
          throw errorText;
        }
        const contentTypeResp = response.headers.get("content-type") || "";
        if (contentTypeResp && contentTypeResp.includes("application/json")) {
          return response.json();
        }

        return response.text();
      })
      .catch((err) => {
        // ✅ CHỈ XỬ LÝ NETWORK / CORS ERROR
        const networkError: ErrorMessage = {
          title: "Không thể kết nối tới server",
          statusCode: 500,
        };

        throw networkError;
      }),
    delay
  );
  return api;
}
