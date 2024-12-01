"use client";
import withLoadingError from "@/components/withLoadingError";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import React from "react";

type Product = {
  id: string;
  author: string;
  date_published: string;
  guid: string;
  title: string;
  url: string;
  icon_url: string;
  tag_line: string;
  description: Array<string>;
};

const transformData = (res: Product[]) => {
  res.forEach((item) => {
    const date = new Date(item.date_published);
    item.date_published =
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

function ProductsPage({ data }: { data: Product[] }) {
  return (
    <div className="mx-auto overflow-x-hidden px-8 sm:p-8 md:max-w-6xl">
      <h1 className="mb-8 font-[Iceberg] text-3xl font-bold sm:mb-10 md:text-4xl">
        Products
      </h1>
      <div className="mx-auto grid max-w-fit grid-cols-1 gap-3 text-gray-800 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {transformData(data).map((item, index) => (
          <motion.div
            key={item.guid}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <ProductCard
              author={item.author}
              productName={item.title.replace(/\s+/g, "")}
              releaseDate={item.date_published}
              description={item.description[0]}
              link={item.url}
              icon={item.icon_url}
              tag={item.tag_line}
            ></ProductCard>
          </motion.div>
        ))}
        <div className="flex h-48 w-80 items-center justify-center text-xl text-gray-500">
          no more
        </div>
      </div>
    </div>
  );
}

export default withLoadingError<Product[]>(ProductsPage, {
  url: "products",
});
