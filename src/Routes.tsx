// src/Routes.tsx
import { Route, Routes } from "react-router-dom";
// import Form from "./components/Form";
// import Home from "./components/Home";
// import ProductMenu from "./components/ProductMenu";
// import User from "./components/User";
// import View from "./components/View";
import Home from "./page/Home";
import ProductMenu from "./page/ProductMenu";
import User from "./page/User";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/productMenu" element={<ProductMenu />} />
            {/* <Route path="/form" element={<Form />} />
            <Route path="/view" element={<View />} />
            <Route path="/user" element={<User />} />
            <Route path="/productMenu" element={<ProductMenu />} /> */}
        </Routes>
    )
}
