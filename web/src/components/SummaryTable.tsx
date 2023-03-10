import { HabitDay } from "./HabitDay";
import { genetateDatesFromYearBeginning } from "../utils/genetate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const minimumSummaryDatesSize = 18 * 7;
const summaryDates = genetateDatesFromYearBeginning();
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable = () => {
  return (
    <div className="w-screen flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => (
          <div
            key={i}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => (
          <HabitDay
            key={date.toString()}
            amount={5}
            completed={Math.round(Math.random() * 5)}
          />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <HabitDay key={i} type="secondary" />
          ))}
      </div>
    </div>
  );
};
