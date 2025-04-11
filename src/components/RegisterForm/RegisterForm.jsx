import css from "./RegisterForm.module.css";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const giveUserData = (data) => {
    console.log(data);

    const { name, email, password } = data;

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(giveUserData)}>
        <input
          className={css.input}
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <p>Name is required</p>}
        <input
          className={css.input}
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>Email is required</p>}
        <input
          className={css.input}
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <p>Password is required</p>}
        <button className={css.button} type="submit">
          Register
        </button>
      </form>

      <a className={css.link} href="/Vocab-builder/login">
        Log In
      </a>
    </div>
  );
};
