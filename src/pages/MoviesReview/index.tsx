import { AxiosRequestConfig } from "axios";
import Review from "components/Review";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { hasAnyRoles } from "util/auth";
import { requestBackend } from "util/requests";
import "./styles.css";

type FormData = {
  review: string;
};

type Review = {
  text: string;
  user: {
    name: string;
  };
};

const params: AxiosRequestConfig = {
  url: "/movies/1/reviews",
  withCredentials: true,
};

const MoviesReview = () => {
  
  const [review, setReview] = useState<[Review]>();

  useEffect(() => {
    requestBackend(params).then((response) => {
      setReview(response.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {

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
            <div className="review-submit">
              <button className="btn">SALVAR AVALIAÇÂO</button>
            </div>
          </form>
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
