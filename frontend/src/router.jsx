import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { Dashboard } from "./pages/Dashboard/index";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { CreateAccount } from "./pages/Criar Conta";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          exact
          path="/"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/criar-conta" element={<CreateAccount />} />
        
      </Routes>
    </BrowserRouter>
  );
}
