import "./global.css";
import Router from "./router";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <main className="App">
        <Router />
      </main>
    </AuthProvider>
  );
}

export default App;
