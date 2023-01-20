import { TouchableOpacity, Dimensions } from "react-native";

const WEEK_DAY = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAY - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps {
  type?: "primary" | "secondary";
}

export const HabitDay = ({ type = "primary" }: HabitDayProps) => {
  return (
    <>
      {type === "primary" && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ width: DAY_SIZE, height: DAY_SIZE }}
          className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
        />
      )}

      {type === "secondary" && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ width: DAY_SIZE, height: DAY_SIZE }}
          className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
        />
      )}
    </>
  );
};
