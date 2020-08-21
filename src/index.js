import { model } from './model';

import './styles/app.scss';

const previewDiv = document.querySelector('.configurator__preview');

const blockTitle = (block) => {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
};

const blockText = (block) => {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `;
};

const blockTextColumns = (block) => {
  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);
  return `
    <div class="row">
      ${html.join("")}
    </div>
  `;
};



model.forEach(block => {
    
    let html = '';
    
    if(block.type === 'title') {
        html = blockTitle(block)
    } else if (block.type === 'text') {
        html = blockText(block)
    } else if (block.type === 'textColumns') {
        html = blockTextColumns(block);
    }
    previewDiv.insertAdjacentHTML('beforeend', html)
})
