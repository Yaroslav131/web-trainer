import Router from "./Components/Roots"
import {
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
