import React, { useState } from "react";
import { WrapperAdd, PokemonImage, Input } from "../styled";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "../../../components";

export interface Props {
  showAdd?: any;
  types?: string;
  setShowAdd?: any;
  name?: string;
}

const AddToList: React.FC<Props> = ({ showAdd, types, setShowAdd, name }) => {
  const history = useHistory();
  const [nickName, setNickName] = useState("");

  const handleAdd = () => {
    const data = {
      name: name,
      nickName: nickName
    };

    if (localStorage.getItem("list") === null) {
      const list = [];
      list.push(data);
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      const storage: any = localStorage.getItem("list");
      const list = JSON.parse(storage);
      list.push(data);
      localStorage.setItem("list", JSON.stringify(list));
    }
    setShowAdd(false);
    history.push("/my-list");
  };

  return (
    <Modal
      visible={showAdd}
      height="330px"
      onClose={() => setShowAdd(false)}
      color={types}
    >
      <WrapperAdd>
        <PokemonImage>
          <img
            src={`https://img.pokemondb.net/artwork/${name}.jpg`}
            alt="pokemon"
          />
        </PokemonImage>
        <Input
          placeholder="Input Your Nickname"
          onChange={(e: any) => setNickName(e.target.value)}
        />
        <Button onClick={handleAdd} top={20}>
          Add Pokemon
        </Button>
      </WrapperAdd>
    </Modal>
  );
};

export default AddToList;
