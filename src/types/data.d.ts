export type LoginForm = {
  mobile: string;
  code: string;
};

// 泛型函数，接口，类
export interface ApiResponse<T> {
  message: string;
  data: T;
}

export type Token = {
  refresh_token: string;
  token: string;
};
