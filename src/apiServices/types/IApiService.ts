import { HttpClient } from "./THttpClient";

export interface IApiService {
  readonly httpClient: HttpClient;
  makeQuery: (params: { [key: string]: any }) => string;
  makeOnlyQuery: (query: { [key: string]: any }) => string;
  listPaged?: (params: any) => Promise<any>;
}
