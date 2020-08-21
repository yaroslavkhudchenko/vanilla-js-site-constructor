
import { row, col } from "./utils";

const title = (block) => row(col(`<h1>${block.value}</h1>`));

const text = (block) => row(col(`<p>${block.value}</p>`))

const textColumns = (block) => {
  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  return row(html.join(""));
};


export const templates = { title, text, textColumns };