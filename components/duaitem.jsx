const DuaItem = ({ dua }) => {
  console.log({ dua });
  return (
    <div className="flex flex-row">
      <img
        className="-translate-y-1 mr-2"
        src="https://duaruqyah.com/assets/duaarrow.svg"
        alt="dua"
      />
      <p
        style={{
          color: "black",
        }}
        className="text-primary text-2xs my-3 text-left w-[95%] dark:text-gray-300"
      >
        {dua.dua_name_en}
      </p>
    </div>
  );
};

export default DuaItem;
