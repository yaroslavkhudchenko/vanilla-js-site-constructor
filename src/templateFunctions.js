
import { row, col } from "./utils";


// functions to generate the html
const title = (block) => {
    const { tag, styles } = block.options;

    return row(col(`<${tag}>${block.value}</${tag}>`),styles)
};

const text = (block) => row(col(`<p>${block.value}</p>`), block.options.styles);

const textColumns = (block) => row(block.value.map((item) => col(item)).join(""), block.options.styles);

const image = (block) => row(col(`<img src='${block.value}' alt='${block.options.alt}' />`), block.options.styles)

export const templates = { title, text, textColumns, image };