import OptionListItem from "./optionlistitem";

const OptionList = () => {
  return (
    <div
      style={{
        paddingLeft: "25rem",
        display: "flex",
      }}
    >
      <OptionListItem
        src={"https://duaruqyah.com/assets/others/copy.svg"}
        alt={"copy"}
      />
      <OptionListItem
        src={"https://duaruqyah.com/assets/others/bookmark.svg"}
        alt={"bookmark"}
      />
      <OptionListItem
        src={"https://duaruqyah.com/assets/others/plan.svg"}
        alt={"plan"}
      />
      <OptionListItem
        src={"https://duaruqyah.com/assets/others/share.svg"}
        alt={"share"}
      />
      <OptionListItem
        src={"https://duaruqyah.com/assets/others/report.svg"}
        alt={"report"}
      />
    </div>
  );
};

export default OptionList;
