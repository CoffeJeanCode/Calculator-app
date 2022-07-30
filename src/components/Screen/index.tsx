import { FC } from "react";
import { useRecoilValue } from "recoil";
import { calcAtom } from "../../atoms/calc";

const Screen: FC = () => {
  const calcValue = useRecoilValue(calcAtom);
  return <div>{calcValue}</div>;
};

export default Screen;
