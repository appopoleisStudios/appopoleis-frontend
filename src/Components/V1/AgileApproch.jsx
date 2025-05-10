const AgileApproch = () => {
    return (
      <div className="py-12 flex flex-col md:flex-row items-center" style={{ gap: "3rem" }}>
        <div className="w-full md:w-3/5">
          <img src="https://www.fatbit.com/media/engendering.webp" className="w-full" />
        </div>
        <div className="flex flex-col items-center gap-2 w-full md:w-2/6 px-2">
          <h2 className="text-2xl font-bold mb-2 text-[color:var(--text-primary)]">
            Engendering productivity through Agile
          </h2>
          <button className="agile-button border py-3 px-4 md:w-full w-1/2 md:w-auto">
            Explore Our Agile Approach
          </button>
        </div>
      </div>
    );
  };
  
  export default AgileApproch;
  