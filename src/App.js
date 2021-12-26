import { React, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Form, Input, Button, Space, Radio, Table, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState([]);

  const dateFormat = "YYYY/MM/DD";

  const register = (value) => {
    value.DoB = value.DoB.format(dateFormat);
    // userData.push(value);
    setUserData([...userData, value]);

    // alert("We received your information");
    // form.resetFields();
    console.log(value);
  };
  console.log(userData);
  const columns = [
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "DoB",
      dataIndex: "DoB",
      key: "DoB",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="table-list">
          <h2 style={{ textAlign: "center" }}>User data</h2>
          {/* <Table dataSource={userData} columns={columns} /> */}
        </div>

        <div className="register-form">
          <Form
            form={form}
            name="registerForm"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 4,
            }}
            onFinish={(value) => register(value)}
            autoComplete="off"
          >
            <Form.Item
              label="Your full name"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input placeholder="Type your full name here" />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Type your username here" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Type your password here" />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please choose your gender",
                },
              ]}
            >
              <Radio.Group>
                <Radio value={"male"}>Male</Radio>
                <Radio value={"female"}>Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Your phone number"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input placeholder="Type your phone number here" />
            </Form.Item>

            <Form.Item
              label="Date of birth"
              name="DoB"
              rules={[
                {
                  required: true,
                  message: "Please input your date of birth",
                },
              ]}
            >
              <DatePicker format={dateFormat} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 14,
              }}
            >
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>

                <Button type="default" htmlType="reset">
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
        <div>{userData}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
