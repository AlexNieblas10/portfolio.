import TailwindIcon from "../assets/tailwindcss.svg";

export const Technologies = () => {
  return (
    <section id="tecnologias" className="h-screen ">
      <article className="flex flex-col h-full">
        <div className="h-1/6 grid place-items-center">
          <h1 className="text-center p-4 border-box text-6xl">Tecnologias</h1>
        </div>
        <div className="grid h-5/6 place-items-center w-full">
          <ul className="flex flex-wrap p-10 gap-5 justify-center">
            <li>
              <i className="fa-brands fa-html5 text-[#f06529] text-6xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-css3-alt text-[#264de4] text-6xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-js text-[#f7df1e] text-6xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-react text-[#7cc5d9] text-6xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-git-alt text-[#f34f29] text-6xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-github  text-6xl"></i>
            </li>
            <li>
              <i className="fa-solid fa-terminal text-[#241F31] text-6xl"></i>
            </li>
            <li>
              <TailwindIcon width="60px" />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
