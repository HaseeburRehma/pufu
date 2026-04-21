import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { OwnStore } from "./pages/OwnStore";
import { Contact } from "./pages/Contact";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "mein-eigener-store", Component: OwnStore },
      { path: "kontakt", Component: Contact },
      { path: "impressum", Component: Impressum },
      { path: "datenschutz", Component: Datenschutz },
    ],
  },
]);
