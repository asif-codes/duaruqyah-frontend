const Categories = () => {
  return (
    <>
      <div class="fixed w-[350px] rounded-t-2lg bg-primary justify-center items-center h-14 flex flex-row px-5">
        <p class="text-base text-white mx-auto">Categories</p>
      </div>
      <div className="fixed w-[350px] mt-14">
        <div mx-3 pt-4>
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center ">
              <input
                style={{
                  marginTop: "50px",
                  width: "22rem",
                  textAlign: "justify",
                }}
                className="h-12   placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
            sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
                placeholder="Search Categories"
                type="text"
                name="search"
              />
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Categories;
