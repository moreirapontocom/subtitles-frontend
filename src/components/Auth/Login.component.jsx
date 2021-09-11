import Auth from "./Auth";

const LoginForm = () => {
  return (
    <>
      <button onClick={() => Auth.login()} type="button">
        Login
      </button>
    </>
  );
};

export default LoginForm;
