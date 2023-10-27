import { AppHeader } from "../sheared/ui/AppHeader/AppHeader";
import "./styles/index.scss";
import { classNames } from "../sheared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppHeader />
      <AppRouter/>
    </div>
  );
};

export default App;
