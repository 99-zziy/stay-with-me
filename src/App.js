import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import "./App.css";
import FirstStep from "./pages/reserv/FirstStep";
import SecondStep from "./pages/reserv/SecondStep";
import ThirdStep from "./pages/reserv/ThirdStep";
import LoginPage from "./pages/LoginPage";
import CheckPage from "./pages/CheckPage";

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
            <Route path="/reserv/1" element={<FirstStep />} />
            <Route path="/reserv/2" element={<SecondStep />} />
            <Route path="/reserv/3" element={<ThirdStep />} />
            <Route path="/reserv/3" element={<ThirdStep />} />
            <Route path="/check" element={<CheckPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
