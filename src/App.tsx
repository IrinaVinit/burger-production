import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import "./index.scss";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { FeedPageAsync } from "./pages/FeedPage/FeedPage.async";
import { LoginPageAsync } from "./pages/LoginPage/LoginPage.acync";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPageAsync />} />
        <Route path='/feed' element={<FeedPageAsync/>}/>
        <Route path ="/login" element={<LoginPageAsync/>}/>
      </Routes>
    </div>
  );
};

export default App;
