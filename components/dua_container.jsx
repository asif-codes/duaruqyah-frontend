const DuaContainer = ({ children }) => {
  return (
    <div
      style={{
        background: "white",
        width: "22rem",
        borderRadius: "10px",
      }}
      className='h-[calc(100vh-32vh)] lg:h-[calc(100vh_-_45.5vh)] 3xl:h-[68vh]"
        scrl-cat pb-8  mb-4'
    >
      {children}
    </div>
  );
};

export default DuaContainer;
