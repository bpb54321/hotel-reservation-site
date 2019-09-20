import React from "react";

export const SingleRoomPage = ({match}) => {
  return (
    <div>
      <h1>Single Room Page</h1>
      <p>Room Id: {match.params.slug}</p>
    </div>

  );
};
