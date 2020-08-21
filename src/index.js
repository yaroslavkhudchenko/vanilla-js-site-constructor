import { model } from './model';

import './styles/app.scss';


model.forEach(block => {
    
    let html = '';
    
    if(block.type = 'title') {
        html = blockTitle()
    } else if (block.type = 'text') {
        html = blockText()
    } else if (block.type = 'textColumns') {
        htmk = blockColumns()
    }

})