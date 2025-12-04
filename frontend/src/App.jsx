import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsApp from "./Components/ContactsApp";
import HomePage from "./Components/HomePage";
import LogInPage from "./Components/LogInPage";
import NotAuthPage from "./Components/NotAuthPage";
import PageNotFound from "./Components/PageNotFound";
import PrivatePage from "./Components/PrivatePage";
import RegisterPage from "./Components/RegisterPage";


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/home" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="/" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/private" element={<PrivatePage />} />
          <Route path="/not-auth" element={<NotAuthPage />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
