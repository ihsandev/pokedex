import React from "react";
import { IconStyle } from "./styled";

export interface Props {
  name?: string;
  size?: number;
  color?: string;
}
const Icon: React.FC<Props> = ({ name, ...props }) => {
  return (
    <IconStyle {...props}>
      <i className={name} />
    </IconStyle>
  );
};

export default Icon;
