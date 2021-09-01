import Review from "components/Review";
import { useForm } from "react-hook-form";
import { hasAnyRoles } from "util/auth";
import "./styles.css";

type FormData = {
  review: string;
};

const MoviesReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {
    console.log("submmit");
  };

  return (
    <div className="page-container">
      <h1>Tela detalhes do filme id: 1</h1>
      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <div className="input-containter">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("review", {
                required: "Campo obrigatório",
              })}
              type="text"
              className={`form-control base-input ${
                errors.review ? "is-invalid" : ""
              }`}
              placeholder="Digite sua avaliação aqui!*"
              name="review"
            />
          </form>
          <div className="review-submit">
            <button className="btn">SALVAR AVALIAÇÂO</button>
          </div>
        </div>
      )}
      <div className="review-container">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default MoviesReview;
