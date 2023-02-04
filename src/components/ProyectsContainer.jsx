import { Proyect } from "./Proyect.jsx";

export const ProyectsContainer = () => {
  return (
    <main className="h-screen flex flex-col">
      <section className="h-1/6 grid place-items-center">
        <h1 className="text-4xl">Proyectos</h1>
      </section>
      <section className="h-5/6 p-10 flex flex-wrap gap-3">
        <Proyect title={"Proyecto #1"}>
          Aqui iria la info de el proyecto y las tecnologias utilizadas
        </Proyect>

        <Proyect title={"Proyecto #2"}>
          Aqui iria la info de el proyecto y las tecnologias utilizadas
        </Proyect>

        <Proyect title={"Proyecto #3"}>
          Aqui iria la info de el proyecto y las tecnologias utilizadas
        </Proyect>
      </section>
    </main>
  );
};
