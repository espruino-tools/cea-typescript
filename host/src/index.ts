import { Host } from "@espruino-tools/peer";
import { showTemplate } from "./espruino-template";
import "./styles/app.scss";

window.onload = function () {
  let p = new Host("https://" + window.location.hostname + ":8081/");

  p.getData(function (data) {
    console.log(data);
  });
  showTemplate();
};
