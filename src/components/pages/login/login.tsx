import React, { useContext } from 'react'
import { Form, Input, Button } from 'antd';
import { Container, ContentWrapper } from '../../../style';
import { Link } from 'react-router-dom';
import { SignIn } from '../../../interfaces';
import { StoreContext } from '../../store-context';
import { useHistory } from 'react-router';



const Login = () => {
  
  const { storeService } = useContext(StoreContext);
  const {push} = useHistory();



  const onFinish = async (values: SignIn) => {
    const token =  await storeService.signIn(values);
    console.log(token)
    
    if(token){
      push('/')
    }
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



