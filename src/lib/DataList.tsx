import React, { createContext, useEffect, useState } from "react";
import DataListColumnTitle from "./DataListColumnTitle";
import { dataListDataLoader } from "./DataListDataLoader";
import DataListPagination from "./DatalistPagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
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
  query?: { [key: string]: string };
  requiredQuery?: { [key: string]: string };
  dataParser?: TDataParser;
};

type TDatalistContext = {
  reloadList: () => void;
};

export const DatalistContext = createContext<TDatalistContext>(
  {} as TDatalistContext
);

const DataList: React.FC<TProps> = ({
  columns,
  apiService,
  pageLimit,
  defaultOrder,
  orderDirection,
  className,
  paginationClassName,
  query,
  requiredQuery,
  dataParser,
}) => {
  pageLimit = pageLimit || 10;
  const { data, defaultPage, totalItens, loaded, loadPage, loadData } =
    dataListDataLoader({
      apiService,
      limit: pageLimit,
      defaultOrder,
      orderDirection,
      query: { ...query, ...requiredQuery },
      dataParser,
    });
  const [order, setOrder] = useState<TDataListOrder>({
    orderDirection: null,
    orderParam: null,
  });

  function changeOrder(newOrder: TDataListOrder) {
    if (newOrder.orderParam === order.orderParam) {
      if (order.orderDirection === "asc") newOrder.orderDirection = "desc";
      if (order.orderDirection === "desc") newOrder.orderDirection = "asc";
    }
    setOrder(newOrder);
  }

  function renderColumnsTitle() {
    if (!columns || columns.length <= 0) return <></>;
    return columns.map((column, index) => {
      if (!column) return;
      if (column.noOrder) return <th key={index}>{column.title}</th>;
      return (
        <DataListColumnTitle
          key={index}
          title={column.title || ""}
          dataName={column.data || ""}
          setOrder={changeOrder}
          order={order}
        />
      );
    });
  }

  function renderData(column: TDatalistColumn, item: { [key: string]: any }) {
    if (column.render) {
      return column.render(item);
    }
    return column.data ? item[column.data] : " - ";
  }

  function renderColumnsData(item: { [key: string]: any }) {
    if (!columns || columns.length <= 0) return <></>;
    return columns.map((column, index) => {
      if (!column) return;
      return <td key={index}>{renderData(column, item)}</td>;
    });
  }

  function renderTableBody() {
    if (!data || data.length <= 0) return <></>;
    return data.map((item, index) => {
      return <tr key={index}>{renderColumnsData(item)}</tr>;
    });
  }

  function renderLoading() {
    if (loaded) return <></>;
    return (
      <div className="datalist-loading">
        <FontAwesomeIcon icon={faRotate} /> <span>Carregando...</span>
      </div>
    );
  }

  function reloadList() {
    loadData({ limit: pageLimit, query: { ...query, ...requiredQuery } });
  }

  useEffect(() => {
    if (!order || !order.orderParam) return;
    loadData({
      limit: pageLimit,
      ...order,
      query: { ...query, ...requiredQuery },
    });
    console.log("datalist");
  }, [order]);

  useEffect(() => {
    if (data != null && (!query || Object.keys(query).length <= 0)) return;
    loadData({ limit: pageLimit, query: { ...query, ...requiredQuery } });
  }, [query]);

  function renderDataList() {
    if (loaded && (!data || data.length <= 0)) {
      return <>Não há ítens a serem exibidos.</>;
    }
    return (
      <div className="datalist">
        {renderLoading()}
        <table className="datalist-table">
          <thead className="datalist-thead">
            <tr className="datalist-tr">{renderColumnsTitle()}</tr>
          </thead>
          <tbody className="datalist-tbody">{renderTableBody()}</tbody>
        </table>
        <DataListPagination
          defaultPage={defaultPage}
          loadPage={loadPage}
          pageLimit={pageLimit || 10}
          totalItens={totalItens}
          order={order}
          paginationClassName={paginationClassName}
          query={{ ...query, ...requiredQuery }}
        />
      </div>
    );
  }

  return (
    <DatalistContext.Provider value={{ reloadList }}>
      {renderDataList()}
    </DatalistContext.Provider>
  );
};

export default DataList;
