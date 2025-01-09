import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/*
 * <App /> contain only <Layout /> which contain:
 * <MainContext>
 *       <HomeLink />
 *       <AppRoutes />
 *     </MainContext>
 *
 * try to reduce the files, there is no need for a lot of file for nothing
 *
 */

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);
