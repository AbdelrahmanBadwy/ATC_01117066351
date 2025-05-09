import WelcomeContent from "../common/welcome-content";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
function RegisterPage() {
  const onFinish = (values: never) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="col-span-1 lg:flex md:flex hidden">
        <WelcomeContent />
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-sm">
          <Form
            name="register"
            initialValues={{ remember: true }}
            layout="vertical"
            className="flex flex-col gap-4 w-96"
            onFinish={onFinish}
          >
            <h1 className="text-2xl font-bold text-gray-600">
              Register your account
            </h1>
            <Form.Item
              label="Name"
              required
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input type="text" placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              required
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              required
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
            <Link to="/login">Already have an account? Login</Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
