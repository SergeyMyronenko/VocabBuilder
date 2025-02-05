import css from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";

export const Form = () => {
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
          {...register("Name", { required: true })}
          placeholder="Name"
        />
        {errors.Name && <p>Name is required</p>}
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
          {" "}
          Register{" "}
        </button>
      </form>

      <a className={css.link} href="Vocab-builder/login">
        Log In
      </a>
    </div>
  );
};
