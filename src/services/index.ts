export interface PaginationResponseData<T> {
  docs: T[]
  total: number
  pages: number
}
