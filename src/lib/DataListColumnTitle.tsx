import React from "react";
import { TDataListOrder } from "./DataList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faArrowDownShortWide,
  faArrowsUpDown,
} from "@fortawesome/free-solid-svg-icons";

type TProps = {
  title: string;
  dataName: string;
  setOrder: (order: TDataListOrder) => void;
  order: TDataListOrder;
};

const DataListColumnTitle: React.FC<TProps> = ({
  title,
  dataName,
  order,
  setOrder,
}) => {
  function renderIcon() {
    if (order.orderParam === dataName && order.orderDirection === "asc") {
      return <FontAwesomeIcon icon={faArrowDownShortWide} />;
    } else if (
      order.orderParam === dataName &&
      order.orderDirection === "desc"
    ) {
      return <FontAwesomeIcon icon={faArrowDownWideShort} />;
    }
    return (
      <FontAwesomeIcon
        icon={faArrowsUpDown}
        className="datalist-icon-sort-disabled"
      />
    );
  }

  function onClick() {
    setOrder({ orderParam: dataName, orderDirection: "desc" });
  }
  return (
    <th className="datalist-column-title" onClick={onClick}>
      <span>
        {title}
        {renderIcon()}
      </span>
    </th>
  );
};

export default DataListColumnTitle;
