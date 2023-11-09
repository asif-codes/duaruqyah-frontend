import Image from "next/image";
import SubCatList from "./subcatlist";

const CategoryItem = ({ category, subcat, dua }) => {
  return (
    <div className="scroll-mt-4 style-Kalpurush">
      <div className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2">
        <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
          <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
            <div className="bg-dua-bg dark:bg-dark-bg  flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
              <Image
                src="https://duaruqyah.com/assets/icon/duar_gurutto.svg"
                alt="duar_gurutto"
                width={40}
                height={40}
              />
            </div>
            <div className="w-40 text-left ml-2 ">
              <p className="text-base  style-kalpurush text-black style-inter-cat dark:text-dark-text sm:text-mss">
                {category.cat_name_en}
              </p>
              <p className="text-mute-grey text-xs mt-1 dark:text-dark-text xs:text-[11px] ">
                {`Subcategory: ${category.no_of_subcat}`}
              </p>
            </div>
          </div>
          <div className="flex flex-row w-12 items-center ">
            <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
            <div className="flex flex-col gap-y-1 justify-center items-center">
              <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">
                {category.no_of_dua}
              </p>
              <p className="text-mute-grey text-xs dark:text-dark-text xs:text-[11px]">
                Duas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SubCatList subcat={subcat} dua={dua} />
      </div>
    </div>
  );
};

export default CategoryItem;
