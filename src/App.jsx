import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import VerificationPage from "./pages/VerificationPage";
import SignInPage from "./components/SignInPage";
import ProfileForm from "./Forms/ProfileForm";
import ApiCallExample from "./components/ApiCallExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/profileForm",
    element: <ProfileForm/>,
  },
  {
    path: "/verification",
    element: <VerificationPage />,
  },
  {
      path: "/apiCallExample",
      element: <ApiCallExample />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
