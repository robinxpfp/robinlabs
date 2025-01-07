import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <div className="md:relative md:my-20 md:grid md:grid-cols-3 md:items-center flex flex-col md:space-y-0 space-y-4 my-10">
      <p className="text-neutral-800 text-sm leading-relaxed col-span-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        eaque, nihil rerum accusantium explicabo quisquam maxime eveniet
        repellat quos impedit dolor minima cum fugiat, ratione fuga consequuntur
        repudiandae reprehenderit debitis?
      </p>

      <div className="md:absolute right-0 top-0 flex md:flex-col md:items-end">
        <div className="md:space-y-0.5 md:flex md:flex-col md:items-end flex ">
          <div className="md:mr-4">
            <Badge
              variant="outline"
              className="text-xs bg-white hover:bg-white border shadow-[0_2px_4px_rgba(0,0,0,0.06)] px-4 py-1 rounded-xl transform hover:scale-105 transition-transform"
            >
              Gamer
            </Badge>
          </div>

          <div>
            <Badge
              variant="outline"
              className="text-xs bg-white hover:bg-white border shadow-[0_2px_4px_rgba(0,0,0,0.06)] px-4 py-1 rounded-xl transform hover:scale-105 transition-transform"
            >
              Software Developer
            </Badge>
          </div>
          <div className="md:mr-6">
            <Badge
              variant="outline"
              className="text-xs bg-white hover:bg-white border shadow-[0_2px_4px_rgba(0,0,0,0.06)] px-4 py-1 rounded-xl transform hover:scale-105 transition-transform"
            >
              Something
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
