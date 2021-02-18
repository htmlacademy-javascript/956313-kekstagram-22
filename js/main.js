'use strict'

import {createPictures} from './pictures-preview.js';
import {generatePhotos} from './random-data.js';
import {showBigPicture} from './big-picture.js';

const data = generatePhotos();
createPictures(data);
showBigPicture(data[0]);
