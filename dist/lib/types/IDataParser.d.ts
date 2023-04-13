export type TDataListDataFormat = {
    total: number;
    data: any[];
};
export type TDataParser = <TApiData = any>(apiData: TApiData) => TDataListDataFormat;
