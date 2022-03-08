import { Token } from '@/types/data';

const TOKEN_KEY = 'geek-app-66';

// 获取 token
export function getToken(): Token {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}');
}

// 设置 token
export function setToken(data: Token): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
}

// 移除 token
export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

// 判断是否登录（授权）
export function hasToken(): boolean {
  return Boolean(getToken().token);
}
