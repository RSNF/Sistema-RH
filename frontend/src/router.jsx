import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { Dashboard } from "./pages/Dashboard/index";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { CreateAccount } from "./pages/Create Account";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<ProtectedLayout/>}> */}
            <Route exact path="/" element={<Dashboard />} />
        {/* </Route> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/criar-conta" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
