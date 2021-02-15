'use strict'

import {createPictures} from './create-content.js';
import {generatePhotosArray} from './generate-data.js';
import {showBigPicture} from './show-big-picture.js';

createPictures(generatePhotosArray());
showBigPicture();
