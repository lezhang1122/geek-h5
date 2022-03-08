import { Button, NavBar, Form, Input, List } from 'antd-mobile';
import { RootState } from '@/types/store';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';

const Login = () => {
  const submitHandle = (values: LoginForm) => {
    console.log(values, 'values')
  };
  // useSelector((state: RootState) => state.login)
  return (
    <div className={styles.root}>
      <NavBar />

      <div className="login-form">
        <h2 className="title">账号登录</h2>

        <Form onFinish={submitHandle}>
          <Form.Item
            className="login-item"
            name="mobile"
            rules={[
              { required: true, message: '请输入手机号' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误',
              },
            ]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <List.Item className="login-code-extra" extra={<span className="code-extra">发送验证码</span>}>
            <Form.Item className="login-item" name="code" rules={[{ required: true, message: '请输入验证码' }]}>
              <Input placeholder="请输入验证码" autoComplete="off" />
            </Form.Item>
          </List.Item>

          <Form.Item noStyle>
            <Button block type="submit" color="primary" className="login-submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
