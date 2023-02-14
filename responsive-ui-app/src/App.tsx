import "./App.css";

import { AppRouter } from "./routes";
import { Navbar } from "./layouts";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
