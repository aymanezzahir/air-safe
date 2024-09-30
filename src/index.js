import React from "react";
import Layout from "./components/layout";
import { createRoot } from "react-dom/client";
import ErrorFunction from "./pages/Error";

import Login , {actiont as actionLoaderLogin}from "./pages/login";
import { Home, Contact, NotFoundPage } from "./pages/page";
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";

import TicketsLayout, { loading } from "./pages/tickets";
import { myLoader } from "./pages/home";
import Company , {companyLoading} from "./pages/rentPage/company";
import JetPlane , { jetLoading }from "./pages/rentPage/jetPlane";
import autoReq from "./pages/autoReq";
const theRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route
        index
        loader={myLoader}
        errorElement={<ErrorFunction />}
        element={<Home />}
      />
      <Route
        errorElement={<ErrorFunction />}
        element={<TicketsLayout />}
        path="ticket"
        loader={loading}
      ></Route>
      <Route path="login" action={actionLoaderLogin} element={<Login />} />
      <Route
        path="rent"
        loader={async () => await autoReq()}
       
      >
        <Route element={<JetPlane />} loader={jetLoading} index errorElement={<ErrorFunction />} />
        <Route
          path="company"
          element={<Company />}
          loader={companyLoading}
          errorElement={<ErrorFunction />}
        />
      </Route>

      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={theRouter} />;
}
createRoot(document.getElementById("root")).render(<App />);
