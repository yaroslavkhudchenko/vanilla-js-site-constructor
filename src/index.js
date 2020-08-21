import { model } from './model';
import { templates } from './templateFunctions';
import './styles/app.scss';

const previewDiv = document.querySelector('.configurator__preview');

// map each model and generate html
model.forEach(block => previewDiv.insertAdjacentHTML("beforeend", templates[block.type](block)))
