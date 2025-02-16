import { Stitch } from "../../types/Stitch.types";

export const addRelations = (rounds: Stitch[][]) => {
  return rounds.map((round, roundIndex, allRounds) => {
    let currentRelative = 0;
    const maxPrevIndex =
      roundIndex > 0 ? allRounds[roundIndex - 1].length - 1 : 0;

    return round.map((stitch) => {
      if (stitch.relativeTo === undefined) {
        stitch.relativeTo = Math.min(currentRelative, maxPrevIndex);
      }
      currentRelative = stitch.relativeTo + 1;
      return stitch;
    });
  });
};
