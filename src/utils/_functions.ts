export const PokemonTypeColor = (pokemonType: string) => {
  switch (pokemonType) {
    case "grass":
      return "#49CFB0";

    case "fire":
      return "#FC6B6D";

    case "water":
      return "#75BEFE";

    case "electric":
      return "#FFD76F";

    case "ice":
      return "#9AD3EA";

    case "psychic":
      return "#999999";

    case "flying":
      return "#9BDFD4";

    case "poison":
      return "#CF4981";

    case "bug":
      return "#BA1E2D";

    case "ground":
      return "#6B470D";

    case "fairy":
      return "pink";

    case "fighting":
      return "#999";

    case "rock":
      return "#000";

    default:
      return "#ccc";
  }
};
