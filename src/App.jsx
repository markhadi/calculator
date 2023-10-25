import Button from "./components/button";

const App = () => {
  const themeLabels = ["1", "2", "3"];
  const calcButtons = [
    "7",
    "8",
    "9",
    "del",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "reset",
    "=",
  ];

  return (
    <main className="flex flex-col min-w-[327px] max-w-[540px] w-full">
      <section className="flex items-end justify-between mb-8 max-sm:items-center transition-all duration-500">
        <span className="text-[32px] -tracking-[0.01em] text-white">calc</span>

        <div className="flex flex-col gap-1 items-end">
          <div className="flex gap-4 px-[6px]">
            {themeLabels.map((label) => (
              <span
                key={label}
                className="text-[16px] text-white max-sm:text-[14px]"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-7">
            <span className="text-[12px] text-white">theme</span>
            <div className="flex gap-1 p-1 w-[70px] bg-blue-dark-toggle rounded-xl">
              <button className="theme-toggle-button" />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end p-8 rounded-xl bg-blue-dark-screen mb-6 max-sm:p-6 transition-all duration-500">
        <span className="text-[56px] text-white max-sm:text-[40px] transition-all duration-500">
          0
        </span>
      </div>

      <section className="grid grid-cols-[repeat(4,minmax(60px,101px))] gap-x-6 gap-y-7 p-8 bg-blue-dark-toggle rounded-xl max-sm:p-6 max-sm:gap-x-3 max-sm:gap-y-4 transition-all duration-500">
        {calcButtons.map((btn) => (
          <Button key={btn}>{btn}</Button>
        ))}
      </section>
    </main>
  );
};

export default App;
