export default function App() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center font-Poppins bg-light-grey">
      <div className="rounded-xl rounded-ee-big bg-white p-8">
        <div className="w-96 max-sm:w-full">
          <form className="flex gap-4 text-smokey-grey">
            <div className="flex flex-col gap-1 text-smokey-grey">
              <label className="text-xs font-bold text-smokey-grey" htmlFor="day">DAY</label>
              <input className="w-24 px-3 py-2 rounded-md font-bold text-xl border border-light-grey hover:border-purple focus:outline-none focus:border-purple focus:ring-0 focus:caret-purple text-off-black" type="text" name="day" id="day" placeholder="DD"/>
            </div>
            <div className="flex flex-col gap-1">
              <label className=" text-xs font-bold" htmlFor="month">MONTH</label>
              <input className="w-24 px-3 py-2 rounded-md font-bold text-xl text-8 border border-light-grey hover:border-purple focus:outline-none focus:border-purple focus:ring-0 focus:caret-purple text-off-black" type="text" name="month" id="month" placeholder="MM"/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-bold text-xs" htmlFor="year">YEAR</label>
              <input className="w-24 px-3 py-2 rounded-md font-bold text-xl border border-light-grey hover:border-purple focus:outline-none focus:border-purple focus:ring-0 focus:caret-purple text-off-black" type="text" name="year" id="year" placeholder="YYYY"/>
            </div>
          </form>

          <div className="relative max-sm:my-12">
            <hr className="my-6 w-full border-b-smokey-grey"/>
            <button className="flex items-center justify-center absolute -top-6 right-0 h-12 w-12 bg-purple rounded-full hover:bg-off-black max-sm:right-36 ">
              <img className="h-8 w-8 " src="/images/icon-arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>

        <section className="">
          <p className="text-off-black text-5xl font-extrabold italic"><span className="text-purple ">- -</span> years</p>
          <p className="text-off-black text-5xl font-extrabold italic"><span className="text-purple">- -</span> months</p>
          <p className="text-off-black text-5xl font-extrabold italic"><span className="text-purple">- -</span> days</p>
        </section>
      </div>
    </main>
  )
}
