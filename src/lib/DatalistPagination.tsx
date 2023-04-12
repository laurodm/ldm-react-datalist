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
  query?: { [key: string]: string };
};

const DataListPagination: React.FC<TProps> = ({
  defaultPage,
  totalItens,
  pageLimit,
  order,
  paginationClassName,
  query,
  loadPage,
}) => {
  const totalPages = Math.round(totalItens / pageLimit);

  function setDefault(itemId: number): string {
    if (itemId === defaultPage) return "active";
    return "";
  }

  function onClick(e: any) {
    e.preventDefault();
    loadPage({ page: parseInt(e.target.id), ...order, query });
  }

  function onClickNext(e: any) {
    e.preventDefault();
    const nextPage = defaultPage + 1;
    loadPage({ page: nextPage, ...order, query });
  }

  function onClickPrev(e: any) {
    e.preventDefault();
    const prevPage = defaultPage - 1;
    loadPage({ page: prevPage, ...order, query });
  }

  function renderNavButton(type: "prev" | "next") {
    const typeRules = {
      prev: {
        rule: defaultPage === 1,
        label: "Previous",
        text: "Anterior",
        onclick: onClickPrev,
      },
      next: {
        rule: defaultPage === totalPages,
        label: "Next",
        text: "Próximo",
        onclick: onClickNext,
      },
    };
    const { rule, label, text, onclick } = typeRules[type];
    if (rule)
      return (
        <li className="disabled">
          <span aria-hidden="true">{text}</span>
        </li>
      );
    return (
      <li>
        <a href="#" aria-label={label} onClick={onclick}>
          {text}
        </a>
      </li>
    );
  }

  function makeButtons() {
    const btns: any[] = [];
    const lastNumber = totalPages - 4;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === defaultPage ||
        (defaultPage <= 4 && (i === 5 || i <= 4)) ||
        (defaultPage > lastNumber && i >= lastNumber) ||
        (defaultPage <= lastNumber &&
          (i === defaultPage - 1 || i === defaultPage + 1)) ||
        i === totalPages
      ) {
        btns.push(i);
      }
    }

    if (defaultPage >= 5) {
      btns.splice(1, 0, "...");
    }
    if (defaultPage <= totalPages - 4) {
      btns.splice(-1, 0, "...");
    }
    return btns;
  }

  function renderPageBtn() {
    const pageBtns = makeButtons() || [];
    if (!totalPages || totalPages <= 0) return <></>;
    return pageBtns.map((btn, index) => {
      if (btn === "...") {
        return (
          <li className="disabled" key={index}>
            <a href="#">...</a>
          </li>
        );
      }
      return (
        <li key={index} className={`${setDefault(btn)}`}>
          <a href="#" id={btn} onClick={onClick}>
            {btn}
          </a>
        </li>
      );
    });
  }

  function renderPagination() {
    if (totalItens <= 0 || totalItens < pageLimit) return <></>;
    return (
      <div className="datalist-pagination-wrapper">
        <div className="datalist-itens-info">
          Mostrando 1 até {pageLimit} de {totalItens} registros
        </div>
        <ul className={paginationClassName || "datalist-pagination"}>
          {renderNavButton("prev")}
          {renderPageBtn()}
          {renderNavButton("next")}
        </ul>
      </div>
    );
  }

  return <>{renderPagination()}</>;
};

export default DataListPagination;
