import styled from "styled-components";
import { PokemonTypeColor } from "../../utils";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 9999;
  background-color: ${({ color }: any) => PokemonTypeColor(color)};
  border-radius: 30px;
  padding: 30px 70px 30px 30px;
  width: ${({ width }: any) => width || `auto`};
  margin: auto;
  animation-name: anime;
  animation-timing-function: ease;
  box-sizing: border-box;
  color: #fff;
  animation-duration: 0.6s;
  animation-fill-mode: both;
  @keyframes anime {
    from {
      opacity: 0;
      height: 0;
    }

    to {
      opacity: 1;
      height: ${({ height }: any) => height || `400px`};
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
`;
