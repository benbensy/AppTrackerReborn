import { useRequest } from "vue-request";
import { get } from "./axios";

interface GetAppInfoPayload {
  q: string;
  regex: string;
  page: number;
  per: number;
}
const getAppInfo = async (params: Partial<GetAppInfoPayload>) => {
  const { data } = await get<
    ApiResponse<GetAppinfoResponse> | null | undefined
  >("/api/appinfo", {
    params: {
      ...params,
      per: 20,
    },
  });
  return data;
};

export function useGetAppInfo() {
  return useRequest(getAppInfo, {
    manual: true,
  });
}
