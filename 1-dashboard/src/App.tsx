
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/router";







function App() {
  const routing = useRoutes(Themeroutes);
  return (
      <div className="App">{routing} </div>
  )



}

export default App;
