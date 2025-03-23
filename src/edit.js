import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Extend attributes for core/image block.
 */
function modifyImageBlock(settings, name) {
    if (name !== 'core/image') {
        return settings;
    }

    settings.attributes = {
        ...settings.attributes,
        openInLightbox: {
            type: 'boolean',
            default: false,
        },
        gallerySlug: {
            type: 'string',
            default: '',
        },
    };

    return settings;
}

/**
 * Higher-Order Component to add Lightbox settings to the Inspector Controls.
 */
const withLightboxControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { name, attributes, setAttributes, isSelected } = props;

        if (name !== 'core/image') {
            return <BlockEdit {...props} />;
        }

        return (
            <>
                <BlockEdit key="edit" {...props} />
                {isSelected && (
                    <InspectorControls>
                        <PanelBody title={__('Lightbox Settings', 'image-lightbox-gallery')}>
                            <ToggleControl
                                label={__('Open in Lightbox', 'image-lightbox-gallery')}
                                checked={attributes.openInLightbox}
                                onChange={(value) => setAttributes({ openInLightbox: value })}
                            />
                            {attributes.openInLightbox && (
                                <TextControl
                                    label={__('Gallery Slug', 'image-lightbox-gallery')}
                                    value={attributes.gallerySlug}
                                    onChange={(value) => setAttributes({ gallerySlug: value })}
                                />
                            )}
                        </PanelBody>
                    </InspectorControls>
                )}
            </>
        );
    };
}, 'withLightboxControls');

// ✅ Register filters with WordPress hooks
addFilter(
    'blocks.registerBlockType',
    'image-lightbox-gallery/extend-image-block',
    modifyImageBlock
);

addFilter(
    'editor.BlockEdit',
    'image-lightbox-gallery/add-lightbox-toggle',
    withLightboxControls
);
