import { useRequest } from "vue-request";
import { get } from "./axios";

interface GetAppIconLocal {
  packageName: string;
}
const getAppIconLocal = async (params: Partial<GetAppIconLocal>) => {
  const { data } = await get("/api/icon/local", {
    params,
    responseType: "arraybuffer",
  });

  const imgSrc = 'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint8Array(data)))
  return imgSrc;
};

export function useGetAppIconLocal() {
  return useRequest(getAppIconLocal, {
    manual: true,
  });
}
