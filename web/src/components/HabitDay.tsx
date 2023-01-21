import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";

interface HabitDayProps {
  type?: "primary" | "secondary";
  amount?: number;
  completed?: number;
}

export function HabitDay({
  type = "primary",
  amount = 0,
  completed = 0,
}: HabitDayProps) {
  
  const comlpetedPercentage =  Math.round((completed / amount) * 100);

  return (
    <>
      {type === "primary" && (
        <Popover.Root>
        <Popover.Trigger
          className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
            'bg-zinc-900 border-zinc-800': comlpetedPercentage === 0,
            'bg-violet-900 border-violet-500': comlpetedPercentage > 0 && comlpetedPercentage < 20,
            'bg-violet-800 border-violet-500': comlpetedPercentage >= 20 && comlpetedPercentage < 40,
            'bg-violet-700 border-violet-500': comlpetedPercentage >= 40 && comlpetedPercentage < 60,
            'bg-violet-600 border-violet-500': comlpetedPercentage >= 60 && comlpetedPercentage < 80,
            'bg-violet-500 border-violet-400': comlpetedPercentage >= 80,
          })}
        />

          <Popover.Portal>
            <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
              <span className="font-semibold text-zinc-400 capitalize">
                terça-feira
              </span>
              <span className="mt-1 font-extrabold leading-tight text-3xl">
                17/01
              </span>

              <ProgressBar progress={comlpetedPercentage} />

              <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      )}

      {type === "secondary" && (
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
      )}
    </>
  );
}
