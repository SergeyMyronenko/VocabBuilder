import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import image from "../../image/illustration.jpg";
import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <div className={css.container}>
      <img className={css.image} src={image} alt="main image" />
      <div className={css.formWrapper}>
        <h2 className={css.title}>Register</h2>
        <p className={css.paragraph}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <RegisterForm />
      </div>
      <p className={css.textTablet}>Word · Translation · Grammar · Progress</p>
    </div>
  );
};
