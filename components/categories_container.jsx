const CategoriesContainer = ({ children }) => {
  return (
    <div className="md:z-[-3] md-max:flex md-max:w-full lg-min:grid-cols-[350px,1fr] lg:gap-6 lg:z-[-2] xl-min:col-span-2 xl:gap-x-6 2xl:gap-x-6 2xl:z-[-1] 2xl-min:w-full 3xl:gap-x-6 3xl:z-[-16]  grid xs:mx-auto sm:mx-auto md:mx-auto lg:w-[96%] lg:mx-auto">
      {children}
    </div>
  );
};

export default CategoriesContainer;
