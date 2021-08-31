import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const LoginCard = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData.username);
    console.log(formData.password);
  };

  return (
    <div className="login-card-container">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            type="text"
            className="form-control base-input"
            placeholder="Email*"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required: "Campo obrigatório!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Senha invalida",
              },
            })}
            type="password"
            className="form-control base-input"
            placeholder="Password*"
            name="password"
          />
        </div>
        <div className="login-submit">
          <ButtonIcon text="FAZER LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
