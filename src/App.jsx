import About from "./components/About.jsx";
import { NavbarPhone } from "./components/NavbarPhone.jsx";
import { ProyectsContainer } from "./components/ProyectsContainer.jsx";
import { Technologies } from "./components/Technologies.jsx";

export const App = () => {
  return (
    <>
      <NavbarPhone />
      <About />
      <Technologies />
      <ProyectsContainer />
    </>
  );
};
