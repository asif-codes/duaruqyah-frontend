const OptionListItem = ({ src, alt }) => {
  return (
    <div
      style={{
        paddingLeft: "2rem",
      }}
      className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6"
    >
      <div className="relative w-6">
        <img className="cursor-pointer" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default OptionListItem;
