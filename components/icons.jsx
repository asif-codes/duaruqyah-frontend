const Icons = ({ icon, alt }) => {
  return (
    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
      <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
      <div className="p-2 flex flex-row justify-center items-center">
        <div className="bg-icon-bg dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
          <img src={icon} alt={alt} />
        </div>
        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
      </div>
    </div>
  );
};

export default Icons;
