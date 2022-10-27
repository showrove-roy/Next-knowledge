import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routers/Router/Router";

function App() {
  return (
    <div className='App'>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
