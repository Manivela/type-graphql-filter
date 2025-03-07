export type FilterOperator =
  | "lt"
  | "gt"
  | "lte"
  | "gte"
  | "eq"
  | "ne"
  | "in"
  | "like"
  | "likeAny"
  | "exist"
  | "not"
  | "some";

export const ARRAY_RETURN_TYPE_OPERATORS: FilterOperator[] = ["in", "likeAny"];
