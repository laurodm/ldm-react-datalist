import React from "react";
import { IApiService, TDataParser } from "./types";
import { TDatalistColumn } from "./types/TDatalistColumn";
export type TDataListOrder = {
    orderParam: string | null;
    orderDirection: "asc" | "desc" | null;
};
type TProps = {
    columns: TDatalistColumn[];
    apiService: IApiService;
    pageLimit?: number;
    defaultOrder?: string;
    orderDirection?: "asc" | "desc";
    className?: string;
    paginationClassName?: string;
    query?: {
        [key: string]: string;
    };
    requiredQuery?: {
        [key: string]: string;
    };
    dataParser?: TDataParser;
};
type TDatalistContext = {
    reloadList: () => void;
};
export declare const DatalistContext: React.Context<TDatalistContext>;
declare const DataList: React.FC<TProps>;
export default DataList;
