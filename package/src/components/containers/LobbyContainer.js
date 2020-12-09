import React from "react";

import { LobbyList } from "../LobbyList";
import { LobbyImage } from "../LobbyImage";

export function LobbyContainer() {
  return (
    <div className="lobby">
      <LobbyImage />
      <LobbyList />
    </div>
  );
}
