import React from "react";
import styled from "styled-components";
import { Modal } from "../../../components";

export interface Props {
  showAdd?: any;
  types?: string;
  setShowAdd?: any;
}

const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.2em;
  border: none;
  outline: none;
`;

const AddToList: React.FC<Props> = ({ showAdd, types, setShowAdd }) => {
  return (
    <Modal
      visible={showAdd}
      height="100px"
      onClose={() => setShowAdd(false)}
      color={types}
    >
      <Input placeholder="Input Your Nickname" />
    </Modal>
  );
};

export default AddToList;
