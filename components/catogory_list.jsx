import CategoryItem from "./category_item";

const CategoryList = ({ category, subcat, dua }) => {
  return (
    <div
      style={{
        marginTop: "7rem",
        background: "white",
      }}
      className="mt-2"
    >
      {category.map((category, idx) => (
        <CategoryItem key={idx} category={category} subcat={subcat} dua={dua} />
      ))}
    </div>
  );
};

export default CategoryList;
