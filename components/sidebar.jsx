import Image from "next/image";
import Icons from "./icons";

const Sidebar = () => {
  return (
    <div
      className="row-span-full hidden 
                xl:block xl:z-[-1] 2xl:block 2xl:z-[-1] 
                3xl:block 3xl:z-[-16]"
    >
      <div
        id="left-bar"
        className="w-[100px] flex flex-col gap-y-5 fixed overflow-hidden"
      >
        <div
          className="bg-white rounded-3xl px-4 
                        dark:bg-dark-bg lg:h-[calc(93vh)] 
                        xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] 
                        scrl-left pb-16"
        >
          <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container">
            <Image
              src="https://duaruqyah.com/assets/dua-logo.svg"
              alt="dua-logo"
              width={4}
              height={4}
              className="w-16 h-12 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
            />
          </div>

          <Icons icon="https://duaruqyah.com/assets/nav/home.svg" alt="/" />
          <Icons
            icon="https://duaruqyah.com/assets/nav/alldua.svg"
            alt="alldua"
          />
          <Icons
            icon="https://duaruqyah.com/assets/nav/memorize.svg"
            alt="memorize"
          />
          <Icons
            icon="https://duaruqyah.com/assets/nav/bookmark.svg"
            alt="bookmark"
          />
          <Icons
            icon="https://duaruqyah.com/assets/nav/ruqyah.svg"
            alt="ruqyah"
          />
          <Icons
            icon="https://duaruqyah.com/assets/nav/dua-info.svg"
            alt="dua-info"
          />
          <Icons
            icon="https://duaruqyah.com/assets/nav/books.svg"
            alt="books"
          />

          <div>
            <div className="pt-6 padding-left xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
              <button className="w-13 h-13 bg-primary drop-shadow-primary rounded-lg lg:mr-4 text-white text-sm">
                <div className="flex justify-center items-center">
                  <p className="hidden">I Want To Support</p>
                  <Image
                    src="https://duaruqyah.com/assets/dua-logo.svg"
                    alt="dua-logo"
                    width={4}
                    height={4}
                    className="w-16 h-12 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
