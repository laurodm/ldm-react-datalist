import { ApiServiceAbstract } from "../abstracts";
import { TListPagedParams } from "../lib";
import { HttpResponse } from "./types/THttpClient";

export class BooksApiService extends ApiServiceAbstract {
  async listPaged(params: TListPagedParams): Promise<HttpResponse<any>> {
    const queryString = this.makeQuery(params);
    return await this.httpClient.request({
      url: `http://gutendex.com/books/?${queryString}`,
      method: "get",
    });
  }
}
