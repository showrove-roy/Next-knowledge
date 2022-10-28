import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routers/Router/Router";

function App() {
  return (
    <div className='App max-w-screen-2xl mx-auto'>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
