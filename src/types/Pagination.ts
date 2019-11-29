export interface Pagination<T> {
  data: Array<T>;
  pagesCount: number;
  totalCount: number;
}
