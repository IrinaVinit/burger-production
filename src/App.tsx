// import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import "./index.scss";
// import FeedPage from "./pages/FeedPage/FeedPage";

const App = () => {
  return (
    <div className="app">
      {/* <Routes> */}
        <AppHeader />
        {/* <Route path='/feed' element={<FeedPage/>}/>
        <Route path ="/login"/> */}
      {/* </Routes> */}
    </div>
  );
};

export default App;
