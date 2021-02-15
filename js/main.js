'use strict'

import {createPictures} from './pictures-preview.js';
import {generatePhotosArray} from './random-data.js';
import {showBigPicture} from './big-picture.js';

createPictures(generatePhotosArray());
showBigPicture();
