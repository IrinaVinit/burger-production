import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { FeedPage } from "pages/FeedPage";
import { LoginPage } from "pages/LoginPage";
import { MainPage } from "pages/MainPage";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/feed" element={<FeedPage/>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Suspense>
  );
};

export default AppRouter;
