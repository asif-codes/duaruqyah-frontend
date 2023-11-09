import DuaItem from "./duaitem";

const DuaList = ({ dua, cat_id, subcat_id }) => {
  return (
    <div className="mt-2 cursor-pointer">
      {dua.map((dua, idx) => {
        if (dua.cat_id === cat_id && dua.subcat_id === subcat_id)
          <DuaItem key={idx} dua={dua} />;
      })}
    </div>
  );
};

export default DuaList;
