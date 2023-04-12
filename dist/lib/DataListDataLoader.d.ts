import { IApiService, TDataParser, TListPagedParams } from "./types";
type TParams = {
    limit?: number;
    defaultOrder?: string;
    apiService: IApiService;
    orderDirection?: "asc" | "desc";
    query?: {
        [key: string]: string;
    };
    dataParser?: TDataParser;
};
type THook = {
    data: any[] | null;
    totalItens: number;
    defaultPage: number;
    loaded: boolean;
    loadData: (params: TListPagedParams) => void;
    loadPage: (params: TListPagedParams) => void;
};
export declare function dataListDataLoader(params: TParams): THook;
export {};
