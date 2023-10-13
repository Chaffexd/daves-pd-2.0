import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/Root.jsx";
import HomePage from "./routes/HomePage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import WorkPage from "./routes/WorkPage.jsx";
import ContactPage from "./routes/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: ''
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'work', element: <WorkPage /> },
      { path: 'contact', element: <ContactPage />   }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
