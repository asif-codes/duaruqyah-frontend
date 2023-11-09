import DuaList from "./dualist";

const SubCatListItem = ({ subcat, dua }) => {
  return (
    <div className="flex flex-row my-2">
      <div className="bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
          {subcat.subcat_name_en}
          <DuaList dua={dua} cat_id={subcat.cat_id} subcat_id={subcat} />
        </p>
      </div>
    </div>
  );
};

export default SubCatListItem;
