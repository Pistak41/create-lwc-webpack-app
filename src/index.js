import { createElement } from "lwc";
import App from "modules/app";

const elm = createElement("x-app", { is: App });
document.body.appendChild(elm);
