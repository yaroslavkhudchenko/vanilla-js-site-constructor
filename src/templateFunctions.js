
import { row } from './utils';

const title = (block) => {
    
  return row(`
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
  `);
};

const text = (block) => {
    
  return row(`
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
  `);
};

const textColumns = (block) => {
    
  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  return row(html.join(""));
};


export const templates = { title, text, textColumns };