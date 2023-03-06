import * as React from "react";
import { PropsWithChildren } from "react";
import styles from "./DealBox.module.css";

type BoxColor = "orange" | "salmon" | "pink" | "brown";

interface CustomProps {
    color?: BoxColor;
}
  
const getBoxClassName = ({ additionalClasses, color}: CustomProps) => {
    return [
      styles.box,
      styles[color],
      additionalClasses,
    ]
      .filter(Boolean)
      .join(" ");
};

type Props = CustomProps
  
export const DealBox = ({ className, color = "orange",  ...props}: PropsWithChildren<Props>) => {
    const finalClassName = getBoxClassName({  additionalClasses: className, color });
    return <div className={`deal-box ${finalClassName}`} {...props} />;
};
  
export default DealBox;
  