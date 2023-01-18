import React from "react";
import CategoryItem from "../category-item/category-item";
import "./directory.styles.scss";

export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
}
