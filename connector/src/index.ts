import { showTemplate } from "./espruino-template";
import { Connector } from "@espruino-tools/peer";
import "./styles/app.scss";

window.onload = function () {
  let p = new Connector();

  p.connectData();
  showTemplate();
};
