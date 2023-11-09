import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="xl:col-start-2 xl:col-span-full 2xl:col-start-2 2xl:col-span-full 
                2xl:z-[-1] 3xl:col-start-2 3xl:col-span-full 3xl:z-[-16]"
    >
      <div
        style={{
          paddingLeft: "1.5rem",
        }}
        className="right-10 lg:left-[1rem] xl:left-1  hidden xl:relative mb-20 lg: xl:block 2xl:block 3xl:block"
      >
        <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
          <div className="flex flex-row justify-between">
            <div className="text-left flex items-center">
              <div>
                <h1 className="text-2xl dark:text-dark-text">Duas Page</h1>
                <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
              </div>
            </div>
            <div className="flex flex-row items-center relative">
              <form className="sm-max:w-full">
                <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
                  <div
                    style={{
                      height: "3rem",
                    }}
                    className="flex justify-between sm-max:flex-col sm-max:gap-4"
                  >
                    <input
                      id="search_box"
                      style={{
                        background: "white",
                        borderRadius: "revert",
                      }}
                      className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                      placeholder="Search by Dua Name"
                      type="text"
                      name="search"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                    >
                      <span className="flex items-center sm-max:hidden">
                        <Image
                          style={{
                            height: "2rem",
                            marginLeft: "1rem",
                          }}
                          src="https://duaruqyah.com/assets/dua-logo.svg"
                          alt="dua-logo"
                          width={4}
                          height={4}
                          className="w-16 h-12 heighwidth mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
                        />
                      </span>
                      <p className="hidden sm-max:block sm-max:text-white">
                        Search
                      </p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end">
            <div className="md:-z-[1] lg:-z-[1]">
              <div className="relative">
                <button
                  className="
                    text-opacity-90
                    group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
                    sm:px-0
                    "
                >
                  <img
                    src="https://duaruqyah.com/assets/settings/profile.svg"
                    alt="profile"
                  />
                  <svg
                    class="ml-2 mr-2"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                      fill="#868686"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
