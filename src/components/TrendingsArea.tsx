"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type DataType = {
  _id: string;
  link: string;
  published: string;
  title: string;
};

const transformData = (res: DataType[]) => {
  res.sort(
    (a: DataType, b: DataType) =>
      new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
  res.splice(5);
  res.forEach((item) => {
    const date = new Date(item.published);
    item.published =
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0") +
      " " +
      String(date.getHours()).padStart(2, "0") +
      ":" +
      String(date.getMinutes()).padStart(2, "0");
  });
  return res;
};

export default function TrendingsArea({ data }: { data: DataType[] }) {
  return (
    <div className="flex h-[394px] w-5/6 flex-col items-center rounded-lg bg-white shadow-lg shadow-gray-200 sm:w-[700px]">
      <div className="flex w-full items-center pb-3 pl-6 pt-6 sm:px-10 sm:py-8">
        <h1 className="mr-3 font-sour text-3xl">Trendings</h1>
        <FontAwesomeIcon icon={faArrowTrendUp} className="text-xl" />
      </div>
      <div className="w-[calc(100%-80px)] font-funnel sm:w-3/4">
        <ol className="w-full list-decimal text-sm sm:text-base">
          {(transformData(data as DataType[]) as DataType[]).map(
            (item, index) => {
              return (
                <li className="mb-3 sm:mb-6" key={index}>
                  <p className="line-clamp-2 overflow-x-hidden break-all text-sm sm:line-clamp-1 sm:text-ellipsis sm:text-nowrap sm:text-base">
                    <a
                      href={item.link}
                      className="no-underline transition-colors duration-200 hover:text-blue-600"
                    >
                      {item.title}
                    </a>
                  </p>
                  {/* <span className="text-sm text-gray-500">
                    <b>{item.published}</b>
                  </span> */}
                </li>
              );
            },
          )}
        </ol>
      </div>
      <Link
        href="/news"
        className="mt-auto flex w-full flex-col items-center rounded-b-lg pb-4 pt-4 transition-colors duration-300 hover:bg-gray-100"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-xl"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
}
