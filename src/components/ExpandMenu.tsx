import Link from "next/link";
function ExpandMenu({ status }: { status?: boolean }) {
  const items = ["news", "products", "tools"];
  return (
    <div
      className={`top-18 absolute -left-8 flex h-44 w-32 flex-col overflow-hidden rounded-lg bg-white opacity-0 shadow-lg transition-all duration-300 ${
        status ? "z-10 opacity-100" : "pointer-events-none !h-12"
      }`}
    >
      {items.map((item, index) => {
        return (
          <Link
            className="transition-200 flex flex-grow items-center justify-center font-thin leading-normal transition-all hover:bg-black/10"
            key={index}
            href={`/${item}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}

export default ExpandMenu;
