import './api.js';
import './picture-effect.js';
import './picture-form.js';
import {getData} from './api.js';
import {createPictures} from './create-user-pictures.js';
import {showAlert} from './alert-message.js';

getData(createPictures, showAlert);
