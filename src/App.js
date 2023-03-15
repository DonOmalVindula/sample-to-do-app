import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SecureApp } from "@asgardeo/auth-react";
import { Spin } from "antd";
import { HomePage } from "./pages/home";
import TodoPage from "./pages/todo";
import { SettingsPage } from "./pages/settings";

const SignInLoader = () => {
    return (
        <div className="loading-container">
            <Spin size="large" />
        </div>
    );
};

const PageNotFound = () => {
    return (
        <div className="loading-container">
            <h1>Page not found :(</h1>
        </div>
    );
};

function App() {
    return (
        <SecureApp fallback={<SignInLoader />}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route index element={<TodoPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </SecureApp>
    );
}

export default App;
