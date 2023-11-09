import DetailItemList from "./detail_item_list";

const DetailsContainer = ({ dua }) => {
  return (
    <div
      style={{
        paddingTop: "4rem",
        width: "49rem",
      }}
      className="w-full sm-max:overflow-y-auto scrl sm-max:pb-20
        md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto
        lg:pb-6 lg:pt-24 lg:col-start-2
        xl-min:pb-8 xl:w-full
        md:pt-24 sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%]
        }
        col-start-2 
        "
    >
      <div className="flex  mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg">
        <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush ">
          <span className="text-primary font-medium leading-[25px] text-mss style-Kalpurush">
            Section:{" "}
          </span>
          {dua[0].dua_name_en}
        </p>
      </div>
      <DetailItemList dua0={dua[0]} dua1={dua[1]} dua2={dua[2]} />
    </div>
  );
};

export default DetailsContainer;
