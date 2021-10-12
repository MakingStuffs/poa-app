import { registerUser } from "services";
import { Form } from "components";

const handleFormSubmit: React.FormEventHandler = async (
  event: React.FormEvent
) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget as HTMLFormElement);
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const username = form.get("username") as string;
  const response = await registerUser(username, email, password);
  console.log(response);
};

const RegisterPage: React.FC = () => {
  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <label>
          username
          <input type="text" inputMode="text" name="username" />
        </label>
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
export default RegisterPage;
