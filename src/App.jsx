import { useState } from "react";

export default function App() {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dateDifference, setDateDifference] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (day === "" || month === "" || year === "") {
      setIsFormValid(false);
      return;
    }

    calculateTimeDifference();
  };


  const calculateTimeDifference = () => {
    const currentDate = new Date();
    const inputDateTime = new Date(`${year}-${month}-${day}`);

    const timeDifference = currentDate.getTime() - inputDateTime.getTime();
    const differenceInYears = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const remainingMonths = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.5));
    const remainingDays = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30.5) / (1000 * 60 * 60 * 24));

    setDateDifference({ year: differenceInYears, month: remainingMonths, day: remainingDays });
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center font-Poppins bg-light-grey">
      <div className=" rounded-xl rounded-ee-big bg-white p-8">
        <form onSubmit={handleFormSubmit}>
          <div className="w-[28rem] max-sm:w-full flex gap-4 text-smokey-grey">
            <div className="flex flex-col gap-1 text-smokey-grey">
              <label
                className={`text-xs font-bold ${!isFormValid && (day === "" || day > 31) ? "text-light-red" : "text-smokey-grey"}`}
                htmlFor="day"
              >
                DAY
              </label>
              <input
                className={`w-24 px-3 py-2 rounded-md font-bold text-xl border  hover:border-purple focus:outline-none focus:border-purple ${!isFormValid && day === "" ? "border-light-red" : "border-light-grey"} focus:ring-0 focus:caret-purple text-off-black`}
                type="number" value={day} onChange={handleDayChange}
                name="day"
                id="day"
                placeholder="DD"
              />
              <p>
                <span className={`text-light-red text-[9px] ${!isFormValid && day === "" ? "block" : "hidden"} `}>This field is required</span>
                <span className={`text-light-red text-[9px] ${!isFormValid && day > 31 ? "block" : "hidden"} `}>Must be a valid day</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label className={`text-xs font-bold ${!isFormValid && (month === "" || month > 12) ? "text-light-red" : "text-smokey-grey"}`} htmlFor="month">
                MONTH
              </label>
              <input
                className={`w-24 px-3 py-2 rounded-md font-bold text-xl text-8 border  hover:border-purple focus:outline-none focus:border-purple ${!isFormValid && month === "" ? "border-light-red" : "border-light-grey"} focus:ring-0 focus:caret-purple text-off-black`}
                type="number" value={month} onChange={handleMonthChange}
                name="month"
                id="month"
                placeholder="MM"
              />
              <p>
                <span className={`text-light-red text-[9px] ${!isFormValid && month === "" ? "block" : "hidden"} `}>This field is required</span>
                <span className={`text-light-red text-[9px] ${!isFormValid && month > 12 ? "block" : "hidden"} `}>Must be a valid month</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label className={`text-xs font-bold ${!isFormValid && (year === "" || year > 2024) ? "text-light-red" : "text-smokey-grey"}`} htmlFor="year">
                YEAR
              </label>
              <input
                className={`w-24 px-3 py-2 rounded-md font-bold text-xl border hover:border-purple focus:outline-none ${!isFormValid && year === "" ? "border-light-red" : "border-light-grey"} focus:ring-0 focus:caret-purple text-off-black`}
                type="number" value={year} onChange={handleYearChange}
                name="year"
                id="year"
                placeholder="YYYY"
              />
              <p>
                <span className={`text-light-red text-[9px] ${!isFormValid && year === "" ? "block" : "hidden"} `}>This field is required</span>
                <span className={`text-light-red text-[9px] ${!isFormValid && year > "2024" ? "block" : "hidden"} `}>Must be in the past</span>
              </p>
            </div>
          </div>
          <div className="relative max-sm:my-12">
            <hr className="my-6 w-full border-b-smokey-grey" />
            <button className="flex items-center justify-center absolute -top-6 right-0 h-16 w-16 bg-purple rounded-full hover:bg-off-black max-sm:right-36 ">
              <img
                className="h-8 w-8"
                src="/images/icon-arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        </form>

        <section className="flex flex-col gap-4">
          <p className="text-off-black text-6xl font-extrabold italic">
            <span className="text-purple ">{dateDifference.year ? dateDifference.year : "- -"}</span> years
          </p>
          <p className="text-off-black text-6xl font-extrabold italic">
            <span className="text-purple">{dateDifference.month ? dateDifference.month : "- -"}</span> months
          </p>
          <p className="text-off-black text-6xl font-extrabold italic">
            <span className="text-purple">{dateDifference.day ? dateDifference.day : "- -"}</span> days
          </p>
        </section>
      </div>
    </main>
  );
}
