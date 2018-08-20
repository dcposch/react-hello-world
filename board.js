import React from "react";

const colors = {
  g: "#0a0",
  s: "#888"
};

export default function Board(props) {
  // const terrain = props.terrain;
  // const x= props.x
  // const y = props.y
  const { terrain, x, y } = props;

  console.log('')

  return (
    <table style={{ tableLayout: "fixed" }}>
      <tbody>
        {terrain.map((row, ty) => (
          <tr key={ty}>
            {row.split("").map((char, tx) => (
              <BoardCell
                key={tx}
                tx={tx}
                ty={ty}
                char={char}
                isPlayer={x == tx && y == ty}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function BoardCell(props) {
  const { tx, ty, char, isPlayer } = props;

  let color = colors[char];
  if (isPlayer) {
    color = "#a00";
  }

  return <td style={{ backgroundColor: color }}>&nbsp;</td>;
}
