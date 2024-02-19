import { useState } from "react";

export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dateDifference, setDateDifference] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (day === "" || month === "" || year === "") {
      setIsFormValid(false);
      return;
    }

    if (!ValidDate()) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
      calculateTimeDifference();
    }

  };

  // To check if user entered date is a valid date or not

  const MAX_VALID_YR = 2024;
  const MIN_VALID_YR = 1900;

  // Returns true if given year is valid.
  function isLeap(year) {
    // Return true if year is a multiple of 4 and not multiple of 100. OR year is multiple of 400.
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  // Returns true if given year is valid or not.
  function ValidDate(d = day, m = month, y = year) {
    // If year, month and day are not in given range
    if (y > MAX_VALID_YR || y < MIN_VALID_YR) return false;

    if (m < 1 || m > 12) return false;
    if (d < 1 || d > 31) return false;

    // Handle February month with leap year
    if (m == 2) {
      if (isLeap(y)) return d <= 29;
      else return d <= 28;
    }

    // Months of April, June, Sept and Nov must have number of days less than or equal to 30.
    if (m == 4 || m == 6 || m == 9 || m == 11) return d <= 30;

    return true;
  }

  // End date validation

  const calculateTimeDifference = () => {
    const currentDate = new Date();
    const inputDateTime = new Date(`${year}-${month}-${day}`);

    const timeDifference = currentDate.getTime() - inputDateTime.getTime();
    const differenceInYears = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 365)
    );
    const remainingMonths = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30.5)
    );
    const remainingDays = Math.floor(
      ((timeDifference % (1000 * 60 * 60 * 24 * 365)) %
        (1000 * 60 * 60 * 24 * 30.5)) /
        (1000 * 60 * 60 * 24)
    );

    setDateDifference({
      year: differenceInYears,
      month: remainingMonths,
      day: remainingDays,
    });
  };


  return (
    <main className="flex flex-col min-h-screen items-center justify-center font-Poppins bg-light-grey">
      <div className=" rounded-xl rounded-ee-big bg-white p-8 max-sm:p-4">
        <form onSubmit={handleFormSubmit}>
          <div className="w-[28rem] max-sm:w-full flex gap-4 max-sm:gap-3 text-smokey-grey">
            <div className="flex flex-col gap-1 text-smokey-grey">
              <label
                className={`text-xs font-bold ${
                  !isFormValid && (day === "" || day > 31) || !isValidDate
                    ? "text-light-red"
                    : "text-smokey-grey"
                }`}
                htmlFor="day"
              >
                DAY
              </label>
              <input
                className={`w-24 px-3 py-2 rounded-md font-bold text-xl border  hover:border-purple focus:outline-none focus:border-purple ${
                  !isFormValid  && day === "" || !isValidDate
                    ? "border-light-red"
                    : "border-light-grey"
                } focus:ring-0 focus:caret-purple text-off-black`}
                type="number"
                value={day}
                onChange={handleDayChange}
                name="day"
                id="day"
                placeholder="DD"
              />
              <p>
                <span
                  className={`text-light-red italic text-[9px] ${
                    !isFormValid && day === "" ? "block" : "hidden"
                  } `}
                >
                  This field is required
                </span>
                <span
                  className={`text-light-red italic text-[9px] ${
                    !isFormValid && day > 31 ? "block" : "hidden"
                  } `}
                >
                  Must be a valid day
                </span>
                <span className={`text-light-red italic text-[9px] ${!isValidDate  ? "block" : "hidden"} `}>Must be a valid Date</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label
                className={`text-xs font-bold ${
                  !isFormValid && (month === "" || month > 12) || !isValidDate
                    ? "text-light-red"
                    : "text-smokey-grey"
                }`}
                htmlFor="month"
              >
                MONTH
              </label>
              <input
                className={`w-24 px-3 py-2 rounded-md font-bold text-xl text-8 border hover:border-purple focus:outline-none focus:border-purple ${
                  !isFormValid && month === "" || !isValidDate
                    ? "border-light-red"
                    : "border-light-grey"
                } focus:ring-0 focus:caret-purple text-off-black`}
                type="number"
                value={month}
                onChange={handleMonthChange}
                name="month"
                id="month"
                placeholder="MM"
              />
              <p>
                <span
                  className={`text-light-red italic text-[9px] ${
                    !isFormValid && month === "" ? "block" : "hidden"
                  } `}
                >
                  This field is required
                </span>
                <span
                  className={`text-light-red italic text-[9px] ${
                    !isFormValid && month > 12 ? "block" : "hidden"
                  } `}
                >
                  Must be a valid month
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label
                className={`text-xs font-bold ${
                  !isFormValid && (year === "" || year > 2024) || !isValidDate
                    ? "text-light-red"
                    : "text-smokey-grey"
                }`}
                htmlFor="year"
              >
                YEAR
              </label>
              <input
                className={`w-24 px-3 py-2 rounded-md font-bold text-xl border hover:border-purple focus:outline-none ${
                  !isFormValid && year === "" || !isValidDate
                    ? "border-light-red"
                    : "border-light-grey"
                } focus:ring-0 focus:caret-purple text-off-black`}
                type="number"
                value={year}
                onChange={handleYearChange}
                name="year"
                id="year"
                placeholder="YYYY"
              />
              <p>
                <span
                  className={`text-light-red italic text-[9px] ${
                    !isFormValid && year === "" ? "block" : "hidden"
                  } `}
                >
                  This field is required
                </span>
                <span
                  className={`text-light-red italic text-[9px] ${
                    !isFormValid && year > "2024" ? "block" : "hidden"
                  } `}
                >
                  Must be in the past
                </span>
              </p>
            </div>
          </div>
          <div className="relative max-sm:my-12">
            <hr className="my-6 w-full border-b-smokey-grey" />
            <button className="flex items-center justify-center absolute -top-6 right-0  h-16 w-16 bg-purple rounded-full hover:bg-off-black max-sm:right-28 ">
              <img
                className="h-8 w-8"
                src="/images/icon-arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        </form>

        <section className="flex flex-col gap-4">
          <p className="text-off-black text-6xl max-sm:text-5xl font-extrabold italic ">
            <span className="text-purple animate-[animateNumber_1s_ease_forwards]">
              {dateDifference.year ? dateDifference.year : "- -"}
            </span>{" "}
            years
          </p>
          <p className="text-off-black text-6xl max-sm:text-5xl font-extrabold italic">
            <span className="text-purple animate-[animateNumber_1s_ease_forwards]">
              {dateDifference.month ? dateDifference.month : "- -"}
            </span>{" "}
            months
          </p>
          <p className="text-off-black text-6xl max-sm:text-5xl font-extrabold italic">
            <span className="text-purple animate-[animateNumber_1s_ease_forwards]">
              {dateDifference.day ? dateDifference.day : "- -"}
            </span>{" "}
            days
          </p>
        </section>
      </div>
    </main>
  );
}
