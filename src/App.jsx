import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import { Layout } from "./components/Layout/Layout";
import { DictionaryPage } from "./pages/DictionaryPage/DictionaryPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RecommendPage } from "./pages/RecommendPage/RecommendPage";
import { TrainingPage } from "./pages/TrainingPage/TrainingPage";

function App() {
  return (
    <Routes>
      <Route path="Vocab-builder/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dictionary" element={<DictionaryPage />} />
        <Route path="recommend" element={<RecommendPage />} />
        <Route path="training" element={<TrainingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
