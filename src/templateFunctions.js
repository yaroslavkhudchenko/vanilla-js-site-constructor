
import { row, col } from "./utils";


// functions to generate the html
const title = (block) => row(col(`<h1>${block.value}</h1>`),block.options.styles);

const text = (block) => row(col(`<p>${block.value}</p>`), block.options.styles);

const textColumns = (block) =>
  row(block.value.map((item) => col(item)).join(""), block.options.styles);


export const templates = { title, text, textColumns };