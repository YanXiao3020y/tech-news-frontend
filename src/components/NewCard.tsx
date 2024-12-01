import React from "react";
import Link from "next/link";
interface NewProps {
  index: number;
  published: string;
  link: string;
  title: string;
  icon: string;
}
const NewCard: React.FC<NewProps & React.RefAttributes<HTMLLIElement>> =
  React.forwardRef((props, ref) => {
    // 高阶函数，负责转发 ref
    const { index, published, link, title, icon } = props;
    return (
      <li
        className="relative mb-6 rounded-lg bg-white px-6 pb-10 pt-6 shadow-lg shadow-gray-200 transition-all duration-300 hover:shadow-xl"
        ref={ref}
        style={{
          transform: `translateX(${index % 2 === 0 ? "" : "-"}1500px)`,
        }}
      >
        <span className="font-funnel text-xs text-gray-500 sm:text-sm">
          {published}
        </span>
        <img
          src={icon}
          width="20"
          height="20"
          className="absolute right-6 inline-block"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.png";
          }}
        />
        <Link
          href={link}
          className="mt-2 block font-funnel text-lg font-semibold text-gray-800 transition-colors hover:text-blue-600 sm:text-xl md:text-2xl"
        >
          {title}
        </Link>
      </li>
    );
  });

export default NewCard;
