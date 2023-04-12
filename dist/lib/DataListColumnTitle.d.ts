import React from "react";
import { TDataListOrder } from "./DataList";
type TProps = {
    title: string;
    dataName: string;
    setOrder: (order: TDataListOrder) => void;
    order: TDataListOrder;
};
declare const DataListColumnTitle: React.FC<TProps>;
export default DataListColumnTitle;
