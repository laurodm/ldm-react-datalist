import { useState } from "react";
import {
  IApiService,
  TDataListDataFormat,
  TDataParser,
  TListPagedParams,
} from "./types";

type TParams = {
  limit?: number;
  defaultOrder?: string;
  apiService: IApiService;
  orderDirection?: "asc" | "desc";
  query?: { [key: string]: string };
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

export function dataListDataLoader(params: TParams): THook {
  const { apiService, limit, dataParser } = params;
  const [defaultPage, setDefaultPage] = useState<number>(1);
  const [data, setData] = useState<any[] | null>(null);
  const [totalItens, setTotalItens] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  function loadData(listPagedparams: TListPagedParams) {
    if (!apiService.listPaged) return;
    setLoaded(false);
    const { page, limit, orderParam, orderDirection, query } = listPagedparams;
    apiService
      .listPaged({ page, limit, orderParam, orderDirection, query })
      .then((response) => {
        setTimeout(() => {
          if (response.statusCode !== 200) return;

          const parsedData: TDataListDataFormat = dataParser
            ? dataParser(response.body)
            : response.body;

          setData(parsedData.data);
          setTotalItens(parsedData.total);
          setDefaultPage(page || 1);
          setLoaded(true);
        }, 300);
      });
  }

  function loadPage(params: TListPagedParams) {
    const { page, orderDirection, orderParam, query } = params;
    loadData({ page, limit, orderDirection, orderParam, query });
    setDefaultPage(page || 1);
  }

  return { defaultPage, data, totalItens, loaded, loadData, loadPage };
}
