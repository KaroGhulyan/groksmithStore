import React from 'react'
import { Form, Input, Button } from 'antd';
import { Container, ContentWrapper } from '../../../style';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useAction';
import { SignIn } from '../../../interfaces';
// import axios from 'axios';
// import { signInUrl} from '../../../config/config.json'
const Login = () => {
  const { signIn } = useActions()
  // interface Token {
  //   token: string
  // }
  const onFinish = async (values: SignIn) => {
    console.log('Success:', values);
    // const response = await axios.post<Token>(signInUrl, values);
    // const token = response.data.token
    // localStorage.setItem('token',token)
    signIn(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <ContentWrapper>
        <h1>Sign in</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Link to='register'>Register</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ContentWrapper>
    </Container>
  );
}

export default Login
