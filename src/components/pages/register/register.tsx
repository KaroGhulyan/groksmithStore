import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd';
import { ContentWrapper } from '../../../style';
import { useActions } from '../../hooks/useAction';

const { Option } = Select;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const { signUp } = useActions()

  const onFinish = (values: any) => {

    console.log('Received values of form: ', values);
    signUp({
      email: 'karo@gmail.com',
      username: 'karo',
      password: '1111',
      name: {
        firstname: 'John',
        lastname: 'Doe'
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496'
        }
      },
      phone: '1-570-236-7033'
    })
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


  return (
    <ContentWrapper>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="first name"
          label="First name"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="last Name"
          label="Last Name"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your last Name!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your city!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="street"
          label="Street"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your street!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="zipcode"
          label="Zipcode"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your zipcode!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </ContentWrapper>
  );
};

export default RegistrationForm