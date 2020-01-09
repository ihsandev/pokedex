import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #eaeaea;
  padding: 0px 10px;
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
    margin-left: 15px;
  }
`;

export const ImageView = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
