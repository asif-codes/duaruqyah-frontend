import OptionList from "./optionslist";

const DetailsItem = ({ dua }) => {
  return (
    <div className=" bg-white rounded-2lg mb-5 dark:bg-dark-bg">
      <div className="p-6">
        <div>
          <div className="flex flex-row justify-start items-center ">
            <img
              src="https://duaruqyah.com/assets/duacard.svg"
              alt="dua-card"
              className="mr-3"
            />
            <p
              style={{
                color: "green",
              }}
              className="text-primary font-medium style-Kalpurush-dua-title"
            >
              {dua.dua_name_en}
            </p>
          </div>
          <div className="w-full">
            <p
              style={{
                color: "black",
              }}
              className="style-Kalpurush style-inter dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal"
            >
              <span>{dua.top_en}</span>
              <p
                style={{
                  textAlign: "right",
                  wordSpacing: "8px",
                  fontSize: "26px",
                  fontFamily: "me_quran",
                }}
              >
                {dua.dua_arabic}
              </p>
            </p>
          </div>
          <p className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-justify leading-8 italic">
            <span
              style={{
                fontSize: "18px",
                color: "black",
              }}
              className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium"
            >
              Transliteration:{" "}
            </span>
            <span
              style={{
                color: "black",
              }}
            >
              {dua.transliteration_en}
            </span>
          </p>
          <p
            style={{
              fontSize: "18px",
            }}
            className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-title text-justify font-normal"
          >
            <span
              style={{
                fontSize: "18px",
                color: "black",
              }}
              className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium"
            >
              Translation:{" "}
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "black",
              }}
            >
              {dua.translation_en}
            </span>
            <br />
            <br />
            <span
              style={{
                fontSize: "18px",
                color: "black",
              }}
            >
              {dua.bottom_en}
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div>
            <p
              style={{
                color: "green",
              }}
              className="mt-5 style-Kalpurush style-inter font-normal text-primary"
            >
              Reference:
            </p>
            <div
              style={{ fontSize: "18px" }}
              className="mt-1 style-Kalpurush style-inter font-normal dark:text-dark-text"
            >
              <span>{dua.refference_en}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-between px-6">
          <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
            <audio src={dua.audio}></audio>
            <div className="flex flex-row items-center gap-x-3 xs:w-full">
              <img
                className="cursor-pointer xs:w-8"
                src="https://duaruqyah.com/assets/others/audiobtn.svg"
              />
              <input
                className="hidden"
                type="range"
                min="0"
                max="1360"
                value="0"
                style={{ backgroundSize: "0% 100%" }}
              ></input>
            </div>
            <OptionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
