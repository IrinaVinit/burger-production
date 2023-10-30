import { AppHeader } from "../sheared/ui/AppHeader/AppHeader";
import "./styles/index.scss";
import { classNames } from "../sheared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";




const App = () => {
  const {theme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading">
      <AppHeader />
      
      <AppRouter/>
      </Suspense>
    </div>
  );
};

export default App;
