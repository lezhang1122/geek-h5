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

// 我的 - 个人信息
export type User = {
  id: string;
  name: string;
  photo: string;
  art_count: number;
  follow_count: number;
  fans_count: number;
  like_count: number;
};

export type UserProfile = {
  id: string
  photo: string
  name: string
  mobile: string
  gender: number
  birthday: string
  intro: string
}