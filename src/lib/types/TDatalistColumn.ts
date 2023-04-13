export type TDatalistColumn = {
  title?: string;
  data?: string;
  noOrder?: boolean;
  render?: (tableData: any) => any;
};
