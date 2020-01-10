import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #eaeaea;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 0px 25px #eaeaea;
    transform: scale(1.02);
  }
  h3 {
    font-weight: bolder;
    text-transform: capitalize;
    margin-left: 30px;
    font-size: 1.2em;
  }
`;

export const ImageView = styled.div`
  width: 100px;
  text-align: center;
  img {
    max-width: 100px;
    max-height: 100px;
  }
`;
