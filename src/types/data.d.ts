// 登陆表单
export type LoginForm = {
  mobile: string;
  code: string;
};

// 响应数据
export interface ApiResponse<T> {
  message: string;
  data: T;
}
// 用户token
export type Token = {
  refresh_token: string;
  token: string;
};
