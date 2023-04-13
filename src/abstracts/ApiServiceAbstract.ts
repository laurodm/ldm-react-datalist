import { TListPagedParams } from "ldm-react-datalist";
import { HttpClient, IApiService } from "../apiServices";
import { AxiosHttpClient } from "../infra";

export class ApiServiceAbstract implements IApiService {
  readonly httpClient: HttpClient = new AxiosHttpClient();

  makeOnlyQuery(query: { [key: string]: any }) {
    let queryString = "";
    if (query && Object.keys(query).length > 0) {
      Object.keys(query).forEach((q) => {
        if (query[q] && query[q] !== "") {
          queryString += `${q}=${query[q]}&`;
        }
      });
    }
    return queryString;
  }

  makeQuery(params: TListPagedParams): string {
    const limit = params.limit || 5;
    const page = params.page || 1;
    const query = params.query;
    const orderParam = params.orderParam
      ? `&order_param=${params.orderParam}`
      : "";
    const orderDirection = params.orderDirection
      ? `&order_direction=${params.orderDirection}`
      : "";

    let queryString = "";
    if (query && Object.keys(query).length > 0) {
      Object.keys(query).forEach((q) => {
        if (query[q] && query[q] !== "") {
          queryString += `&${q}=${query[q]}`;
        }
      });
    }
    return `page=${page}&limit=${limit}${queryString}${orderParam}${orderDirection}`;
  }
}
