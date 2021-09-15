import { DragComponent } from "../components/drag.component";
import { Validator } from "../components/validator.component";

const dragElement = new DragComponent('.place-down', '.placeholder')
const navCreater = new Validator('.place-down', '.submit', 'nav', '.row')