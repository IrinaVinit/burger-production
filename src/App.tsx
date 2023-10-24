import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import "./styles/index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { FeedPageAsync } from "./pages/FeedPage/FeedPage.async";
import { LoginPageAsync } from "./pages/LoginPage/LoginPage.acync";
import { Suspense, useState } from "react";

export type Theme = 'light' | 'dark' | 'blue'


const App = () => {
  const [theme, setTheme] = useState<Theme>('light');


  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className={`app ${theme}`}>
      <AppHeader />
      <button onClick={toogleTheme}>ch</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/feed" element={<FeedPageAsync />} />
          <Route path="/login" element={<LoginPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
