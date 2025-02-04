import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { DictionaryPage } from "./pages/DictionaryPage/DictionaryPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="Vocab-builder/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="registration" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dictionary" element={<DictionaryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
