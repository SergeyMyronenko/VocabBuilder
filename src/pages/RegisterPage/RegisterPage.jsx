import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import image from "../../image/illustration.png";
import css from "./RegisterPage.module.css";
import imageDesktop from "../../image/illustration-desktop.png";

export const RegisterPage = () => {
  return (
    <div className={css.container}>
      <div className={css.desktopImage}>
        <picture className={css.image}>
          <source srcSet={imageDesktop} media="(min-width: 1440px)" />
          <img src={image} alt="Responsive" />
        </picture>
        <p className={css.text}>Word · Translation · Grammar · Progress</p>
      </div>
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
