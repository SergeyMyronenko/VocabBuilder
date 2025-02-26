import css from "./LoginPage.module.css";
import image from "../../image/illustration.jpg";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import { MainScreen } from "../../components/MainScreen/MainScreen";

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <MainScreen />
  ) : (
    <div className={css.container}>
      <img className={css.image} src={image} alt="main image" />
      <p className={css.text}>Word · Translation · Grammar · Progress</p>
      <div className={css.formWrapper}>
        <h2 className={css.title}>Login</h2>
        <p className={css.paragraph}>
          Please enter your login details to continue using our service:
        </p>
        <LoginForm />
      </div>
      <p className={css.textTablet}>Word · Translation · Grammar · Progress</p>
    </div>
  );
};
