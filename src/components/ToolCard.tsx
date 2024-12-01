import Link from "next/link";
import React from "react";
import TagButton from "./TagButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeFork } from "@fortawesome/free-solid-svg-icons";

interface ToolCardProps {
  title: string;
  summary: string;
  stars: number;
  forks: number;
  language: string;
}

const languageColors: { [key: string]: string } = {
  JavaScript: "#f7df1e",
  TypeScript: "#007acc",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#00599C",
  Starlark: "#76D275",
  Ruby: "#701516",
  Go: "#00ADD8",
  PHP: "#4F5D95",
  Swift: "#ffac45",
  Rust: "#dea584",
  Kotlin: "#A97BFF",
  Default: "#333333",
};

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  summary,
  stars,
  forks,
  language,
}) => {
  const bgColor = languageColors[language] || languageColors.Default;
  return (
    <div className="relative h-40 w-[400px] max-w-full transform overflow-hidden rounded-lg shadow-lg shadow-gray-200 transition-transform duration-300 hover:scale-105 sm:w-80 mdlg:h-48 mdlg:w-96">
      <div className="absolute overflow-y-auto overflow-x-clip no-scrollbar inset-0 break-words bg-white p-6 transition-opacity duration-300 hover:bg-yellow-50 mdlg:p-8">
        <div
          className="absolute right-0 top-0 inline-block translate-x-1.5 transform cursor-default rounded-md px-3.5 py-1 sm:px-3 sm:py-1 font-[Inder] text-xs font-semibold text-gray-800 mdlg:-translate-y-0.5 mdlg:rounded-lg mdlg:px-3 mdlg:py-2 mdlg:text-sm"
          style={{
            backgroundColor: `${bgColor}99`,
          }}
        >
          {language}
        </div>
        <p className="z-10 w-full overflow-hidden overflow-ellipsis text-nowrap break-words text-xl font-bold">
          <Link
            href={`https://github.com/${title.split("/")[0]}`}
            target="_blank"
            className="font-sour transition-colors duration-200 hover:text-blue-500"
          >
            {title.split("/")[0]}
          </Link>
          /
          <Link
            href={`https://github.com/${title}`}
            target="_blank"
            className="font-sour transition-colors duration-200 hover:text-blue-500"
          >
            {title.split("/")[1]}
          </Link>
        </p>
        <div className="mt-2 mdlg:mt-3 flex -translate-x-1 gap-3">
          <TagButton number={stars} color={"#FFD43B"}>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFD43B", fontSize: "0.9rem" }}
            ></FontAwesomeIcon>
          </TagButton>
          <TagButton number={forks} color={"#5da4da"}>
            <FontAwesomeIcon
              icon={faCodeFork}
              style={{ color: "#389ae5", fontSize: "0.9rem" }}
            ></FontAwesomeIcon>
          </TagButton>
        </div>
        <p className="mt-3 font-funnel text-xs sm:text-sm mdlg:text-base">
          {summary}
        </p>
      </div>

      {/* <div className="absolute inset-0 break-words bg-yellow-50 p-8 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <p className="z-10 font-bold w-full text-xl break-words overflow-hidden text-nowrap overflow-ellipsis">
          <Link
            href={`https://github.com/${title.split('/')[0]}`}
            target="_blank"
            className="hover:text-blue-500"
          >
            {title.split('/')[0]}
          </Link>
          /
          <Link
            href={`https://github.com/${title}`}
            target="_blank"
            className="hover:text-blue-500"
          >
            {title.split('/')[1]}
          </Link>
        </p>
        <Link href={`https://github.com/${title}`} target="_blank">
          <img
            className="z-0 absolute w-11/12 left-1/2 transform -translate-x-1/2 bottom-4 border rounded-lg"
            src={`https://gh-card.dev/repos/${title}.svg`}
            alt="Github Card"
          />
        </Link>
      </div> */}
    </div>
  );
};

export default ToolCard;
