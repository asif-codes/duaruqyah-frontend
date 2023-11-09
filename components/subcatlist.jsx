import SubCatListItem from "./subcatlist_item";

const SubCatList = ({ subcat, dua }) => {
  // const data = [
  //   {
  //     id: 1,
  //     cat_id: 1,
  //     subcat_id: 1,
  //     subcat_name_bn: "বান্দা তার রবের মুখাপেক্ষী",
  //     subcat_name_en: "The servant is dependent on his Lord",
  //     no_of_dua: 3,
  //   },
  // ];
  return (
    <div className="ml-12 border-l-2 border-dotted my-2 border-primary">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
        {subcat.map((subcate, idx) => (
          <SubCatListItem key={idx} subcat={subcate} dua={dua} />
        ))}
      </div>
    </div>
  );
};

export default SubCatList;
