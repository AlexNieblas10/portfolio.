import { useState } from "react";

export const NavbarPhone = () => {
  const [state, setState] = useState(false)
  const handleClick = () => {
    setState(!state)
  };
  const listElement = (
    <ul
      className="flex h-screen flex-col justify-around items-center text-10xg divide-y divide-slate-700"
    >
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="#about" className="text-2xl">
          Sobre mi
        </a>
      </li>
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="#tecnologias" className="text-2xl">
          Tecnologias
        </a>
      </li>
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="#" className="text-2xl">
          Proyectos
        </a>
      </li>
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="#" className="text-2xl">
          Contacto
        </a>
      </li>
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="https://github.com/AlexNieblas10" className="text-2xl">
          <i className="fa-brands fa-github flex gap-1 flex-col"></i>GitHub
        </a>
      </li>
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="https://www.linkedin.com/in/alex-nieblas-moreno-a90818235/" className="text-2xl">
          <i className="fa-brands fa-linkedin flex gap-1 flex-col"></i>LinkedIn
        </a>
      </li>
      <li className=" h-full border-stone-300 w-full text-center border-box grid place-items-center">
        <a target={"_blank"} href="#" className="text-2xl">
          <i className="fa-brands fa-twitter flex gap-1 flex-col"></i>Twitter
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="border-box flex flex-col">
        <i
          onClick={handleClick}
          className="fa-solid fa-bars border-box absolute top-1 left-1 text-3xl "
        ></i>
        {state && listElement }
      </nav>
    </>
  );
};
