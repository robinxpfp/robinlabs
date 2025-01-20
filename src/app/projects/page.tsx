import { projects } from "@/lib/featured-projects";
import { Nav } from "@/components/nav";

export default async function Page() {
  return (
    <div className="min-h-screen md:p-0 py-2 px-4">
      <main className="max-w-2xl mx-auto">
        <Nav />
        <h1 className="text-3xl font-bold my-6 border-b-2 border-black text-black">
          All Projects
        </h1>
        <ul className="space-y-6">
          {projects.map((project, i) => (
            <li key={i} className="group">
              <a
                href={project.url}
                target="_blank"
                className="block border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                         hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none 
                         transition-all rounded-none "
              >
                <h2 className="text-xl font-bold text-black group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                  {project.title}
                </h2>
                <p className="text-xs font-mono  mt-1 text-black">
                  {project.descripcion}
                </p>
                <p className="text-xs font-mono mt-1 text-black flex justify-end items-center">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="block border-2 border-black bg-white py-1 px-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none 
                    transition-all rounded-none "
                    >
                      {tool}
                    </span>
                  ))}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
