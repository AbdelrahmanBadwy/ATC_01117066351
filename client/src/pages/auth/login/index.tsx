import WelcomeContent from "../common/welcome-content";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
function LoginPage() {
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
              Login to your account
            </h1>

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
              Login
            </Button>
            <Link to="/register">Don't have an account? Register</Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
