import { useForm } from "react-hook-form";
import css from "./LoginForm.module.css";
import sprite from "/public/sprite.svg";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          {...register("Email", { required: true })}
          placeholder="Email"
        />
        {errors.Email && <p>Email is required</p>}
        <div className={css.wrapperForIcon}>
          <input
            className={css.input}
            {...register("Password", { required: true })}
            placeholder="Password"
          />
          <svg className={css.iconEyeOff}>
            <use href={`${sprite}#icon-eye-off`}></use>
          </svg>
          {/* <svg className={css.iconEyeOn}>
            <use href={`${sprite}#icon-eye`}></use>
          </svg> */}
          {errors.Password && <p>Password is required</p>}
        </div>
        <button className={css.button} type="submit">
          Login
        </button>
      </form>

      <a className={css.link} href="/Vocab-builder/register">
        Register
      </a>
    </div>
  );
};
