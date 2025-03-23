import { addFilter } from '@wordpress/hooks';
import './edit';
import modifyImageSave from './save';

// Modify Core Image block’s save function
addFilter(
    'blocks.getSaveElement',
    'image-lightbox-gallery/apply-lightbox-to-image',
    modifyImageSave
);
