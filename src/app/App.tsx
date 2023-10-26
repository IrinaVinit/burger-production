import { Route, Routes } from "react-router-dom";
import { AppHeader } from "../sheared/ui/AppHeader/AppHeader";
import "./styles/index.scss";
import { Suspense} from "react";
import { classNames } from "../helpers/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/ui";
import { FeedPage } from "pages/FeedPage";
import { LoginPage } from "pages/LoginPage";
import { MainPage } from "pages/MainPage";


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/feed" element={<FeedPage/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
