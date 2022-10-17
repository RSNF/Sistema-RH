import "./global.css";
import Router from "./router";
import { Footer } from "./components/Footer/index";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router />
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
