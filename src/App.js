import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
