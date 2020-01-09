import React from "react";
import styled, { keyframes } from "styled-components";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
}

const animation = keyframes`
  0% {
    opacity: 1 
  }
  50% {
    opacity: .2
  }
  100% {
    opacity: 1
  }
`;

const LineStyle: any = styled.div`
  width: ${({ width }: any) => width || 100}px;
  height: ${({ height }: any) => height || 10}px;
  margin-top: ${({ mt }: any) => mt || 10}px;
  margin-bottom: ${({ mb }: any) => mb || 10}px;
  margin-right: ${({ mr }: any) => mr || 10}px;
  margin-left: ${({ ml }: any) => ml || 10}px;
  background-color: #ddd;
  animation: ${animation} 0.8s linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
  border-radius: 4px;
`;

const Line: React.FC<Props> = ({ width, height, mb, mt, mr, ml, ...props }) => {
  return <LineStyle mb={mb} mt={mt} width={width} height={height} {...props} />;
};

export default Line;
