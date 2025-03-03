import { useForm } from "react-hook-form";
import css from "./LoginForm.module.css";

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
        <input
          className={css.input}
          {...register("Password", { required: true })}
          placeholder="Password"
        />
        {errors.Password && <p>Password is required</p>}
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
