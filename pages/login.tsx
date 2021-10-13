import { login } from "services";
import { Form } from "components";

const handleFormSubmit: React.FormEventHandler = async (
  event: React.FormEvent
) => {
  event.preventDefault();
  try {
    const form = new FormData(event.currentTarget as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const request = await login(email, password);
    console.log(request);
  } catch (e) {
    console.log(e);
  }
};

const LoginPage: React.FC = () => {
  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <label>
          email
          <input type="email" inputMode="email" name="email" />
        </label>
        <label>
          password
          <input type="password" inputMode="text" name="password" />
        </label>
        <input type="submit" placeholder="Submit" />
      </Form>
    </div>
  );
};
export default LoginPage;
