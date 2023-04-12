export interface IApiService {
    listPaged?: (params: TListPagedParams) => Promise<any>;
}
export type TListPagedParams = {
    page?: number;
    query?: {
        [key: string]: string;
    };
    limit?: number;
    orderParam?: string | null;
    orderDirection?: "asc" | "desc" | null;
};
