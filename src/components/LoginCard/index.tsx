import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const LoginCard = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
  
  const onSubmit =(formData: FormData) => {
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
            className={`form-control base-input ${errors.username ? "is-invalid" : ""}`}
            placeholder="Email*"
            name="username"
          />
           <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required: "Campo obrigatório!",
              pattern: {
                value: /^.{6,}$/i,
                message: "Senha invalida",
              },
            })}
            type="password"
            className={`form-control base-input ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password*"
            name="password"
          />
           <div className="invalid-feedback d-block">{errors.password?.message}</div>
        </div>
        <div className="login-submit">
          <ButtonIcon text="FAZER LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
