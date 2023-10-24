import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import "../src/styles/index.scss";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { FeedPageAsync } from "./pages/FeedPage/FeedPage.async";
import { LoginPageAsync } from "./pages/LoginPage/LoginPage.acync";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
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
