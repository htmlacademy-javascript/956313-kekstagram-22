'use strict'

import {createPictures} from './pictures-preview.js';
import {generatePhotos} from './random-data.js';

const data = generatePhotos();
createPictures(data);
