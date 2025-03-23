import { createElement } from '@wordpress/element';

export default function modifyImageSave(element, blockType, attributes) {
    if (blockType.name !== 'core/image' || !attributes.openInLightbox || !attributes.url) {
        return element || null;
    }

    return createElement(
        'figure',
        { className: 'lightbox-enabled wp-block-image aligncenter size-large' },
        createElement(
            'a',
            {
                href: attributes.url,
                'data-fancybox': attributes.gallerySlug || "gallery",
                'data-caption': attributes.caption || "",
            },
            createElement('img', { src: attributes.url, alt: attributes.alt, style: { objectFit: 'cover' } })
        )
    );
}
