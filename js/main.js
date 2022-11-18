import './api.js';
import './picture-effect.js';
import './picture-form.js';
import './setup-user-picture.js';
import {getData} from './api.js';
import {createPictures} from './create-users-pictures.js';
import {showAlert} from './alert-message.js';

getData(createPictures, showAlert);
