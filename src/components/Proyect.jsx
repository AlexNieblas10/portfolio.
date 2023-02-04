export const Proyect = ({ title, children }) => {
  return (
    <article className="flex h-auto  flex-col items-center p-10 border border-slate-900 gap-3">
      <h1 className="text-lg text-center">{title}</h1>
      <img src="" alt="Imagen del proyecto"/>
      <p className="text-center">{children}</p>
      <button >Ver mas</button>
    </article>
  );
};
