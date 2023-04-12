import React from "react";
import { TDataListOrder } from "./DataList";
import { TListPagedParams } from "./types";
type TProps = {
    loadPage: (params: TListPagedParams) => void;
    defaultPage: number;
    totalItens: number;
    pageLimit: number;
    order: TDataListOrder;
    paginationClassName?: string;
    query?: {
        [key: string]: string;
    };
};
declare const DataListPagination: React.FC<TProps>;
export default DataListPagination;
