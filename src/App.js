import './App.css';
import { LoginPage } from './pages/login'
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home';
import { TodoPage } from './pages/todo';
import { SettingsPage } from './pages/settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />}>
          <Route path="todo" element={<TodoPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
