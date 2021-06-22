import React from "react";
import { Form, Input, Cascader, Button, DatePicker, Checkbox } from "antd";
import Api from "../../helpers/api";
import "antd/dist/antd.css";

const status = [
  {
    value: "work",
    label: "Work",
  },
  {
    value: "fired",
    label: "Fired",
  },
  {
    value: "vacation",
    label: "Vacation",
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
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
const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

export const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    Api.setNewUser(values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["work", "fired", "vacation"],
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name Surname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="photo"
        label="Photo"
        rules={[
          {
            required: true,
            message: "Please input link to your Photo!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="position"
        label="Position in company"
        tooltip="What is user position in company?"
        rules={[
          {
            required: true,
            message: "Please input user position in company!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="salary"
        label="Salary"
        rules={[
          {
            required: true,
            message: "Please input user Salary!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your Status!",
          },
        ]}
      >
        <Cascader
          options={status}
          style={{
            width: "60%",
          }}
        />
      </Form.Item>
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>I accept to add new user</Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};
