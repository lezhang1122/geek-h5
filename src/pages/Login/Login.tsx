import { Button, NavBar, Form, Input, List, Toast, Divider } from 'antd-mobile';
import { useDispatch } from 'react-redux';
import { getCode, login } from '@/store/actions/login';
import { LoginForm } from '@/types/data';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useRef, useState } from 'react';
import { InputRef } from 'antd-mobile/es/components/input';
import useCountDown from '@/hooks/useCountDown';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const mobileRef = useRef<InputRef>(null);
  const [showCountDown, setShowCountDown] = useState(false);
  const { count, start } = useCountDown(60, () => setShowCountDown(false));
  const submitHandle = async (values: LoginForm) => {
    try {
      await dispatch(login(values));
      Toast.show({
        content: '登陆成功',
        duration: 600,
        afterClose: () => {
          history.push('/home');
        },
      });
    } catch (e) {
      const err = e as AxiosError<{ message: string }>;
      console.dir(err.response?.data.message);
      alert(err.response?.data.message);
    }
  };
  const sendCode = async () => {
    const hasError = form.getFieldError('mobile').length > 0;
    if (hasError) {
      mobileRef.current?.focus();
      return Toast.show({
        content: '请输入正确的手机号',
      });
    }
    const mobile = form.getFieldValue('mobile');
    try {
      await dispatch(getCode(mobile));
      Toast.show({ content: '验证码已发送' });
      setShowCountDown(true);
      start();
    } catch (e) {
      const err = e as AxiosError<{ message: string }>;
      Toast.show({ content: err.response?.data.message });
    }
  };
  return (
    <div className={styles.root}>
      <NavBar />

      <div className="login-form">
        <h2 className="title">账号登录</h2>

        <Form form={form} onFinish={submitHandle} initialValues={{ mobile: '13911111111', code: '246810' }}>
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
            <Input maxLength={11} placeholder="请输入手机号" ref={mobileRef} />
          </Form.Item>
          <List.Item
            className="login-code-extra"
            extra={(
              <span onClick={showCountDown ? undefined : sendCode} className="code-extra">
                {showCountDown ? count : '发送验证码'}
              </span>
            )}
          >
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
