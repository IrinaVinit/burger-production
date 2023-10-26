import { Route, Routes } from "react-router-dom";
import { AppHeader } from "../sheared/ui/AppHeader/AppHeader";
import "./styles/index.scss";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { FeedPageAsync } from "../pages/FeedPage/FeedPage.async";
import { LoginPageAsync } from "../pages/LoginPage/LoginPage.acync";
import { Suspense} from "react";
import { classNames } from "../helpers/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/ui";


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppHeader />
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
