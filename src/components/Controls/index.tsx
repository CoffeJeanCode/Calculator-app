import { FC } from "react";
import { useRecoilState } from "recoil";
import { calcAtom } from "../../atoms/calc";

const Controls: FC = () => {
  const [calc, setCalc] = useRecoilState(calcAtom);

  const handleControl =
    ({
      text,
      type,
    }: {
      text: string;
      type: "number" | "operator" | "symbol";
    }) =>
    () => {
      if (type === "number" || type === "symbol") setCalc(calc.concat(text));
    };

  return (
    <div>
      {controls
        .sort((a, b) => (a.pos > b.pos ? 1 : -1))
        .map((control) => (
          <button
            key={control.pos}
            onClick={handleControl({ text: control.text, type: control.type })}
          >
            {control.text}
          </button>
        ))}
    </div>
  );
};

const controls = [
  { type: "number", text: "7", pos: 1 },
  { type: "number", text: "8", pos: 2 },
  { type: "number", text: "9", pos: 3 },
  { type: "operator", text: "DEL", pos: 4 },
  { type: "number", text: "4", pos: 5 },
  { type: "number", text: "5", pos: 6 },
  { type: "number", text: "6", pos: 7 },
  { type: "operator", text: "+", pos: 8 },
  { type: "number", text: "1", pos: 9 },
  { type: "number", text: "2", pos: 10 },
  { type: "number", text: "3", pos: 11 },
  { type: "operator", text: "-", pos: 12 },
  { type: "symbol", text: ".", pos: 13 },
  { type: "number", text: "0", pos: 14 },
  { type: "operator", text: "/", pos: 15 },
  { type: "number", text: "x", pos: 16 },
  { type: "operator", text: "RESET", pos: 17 },
  { type: "operator", text: "=", pos: 18 },
];

export default Controls;
