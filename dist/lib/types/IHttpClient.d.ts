type THttpRequest = {
    url: string;
    method: THttpMethod;
    body?: any;
    headers?: any;
};
declare enum THttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500
}
type THttpResponse<T = any> = {
    statusCode: THttpStatusCode;
    body?: T;
};
type THttpMethod = "post" | "get" | "put" | "delete";
export interface IHttpClient<R = any> {
    request: (data: THttpRequest) => Promise<THttpResponse<R>>;
}
export {};
