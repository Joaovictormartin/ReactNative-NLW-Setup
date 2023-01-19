interface HabitDayProps {
  completed?: number;
  type?: "primary" | "secondary";
}

export function HabitDay({ completed, type = "primary" }: HabitDayProps) {
  return (
    <>
      {type === "primary" && (
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg">
          {completed}
        </div>
      )}

      {type === "secondary" && (
        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed">
          {completed}
        </div>
      )}
    </>
  );
}
