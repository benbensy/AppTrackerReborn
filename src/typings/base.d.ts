interface ApiResponse<T> {
  metadata: {
    page: number;
    per: number;
    total: number;
  };
  items: AppItem[];
}

interface AppItem {
  id: string;
  appName: string;
  packageName: string;
  activityName: string;
  suggestedName: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  requests: AppItemRequest;
  tags: AppItemTag;
}

interface AppItemRequest {
  appInfo: {
    id: string;
  };
  id: string;
  count: number;
  version: number;
  fromIconPack: {
    id: string;
  };
}

interface AppItemTag {
  id: string;
  name: string;
}
