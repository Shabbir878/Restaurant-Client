import { Route, Routes } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
