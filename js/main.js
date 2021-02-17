'use strict'

import {createPictures} from './pictures-preview.js';
import {generatePhotos} from './random-data.js';
import {setupBigPicture} from './big-picture.js';

const data = generatePhotos();
createPictures(data);
setupBigPicture(data[0]);
