import { Pagination } from "../../../../utils/types/Pagination";

export type BasePaginationResponse<T> = {
  data: T;
  pagination: Pagination;
};
