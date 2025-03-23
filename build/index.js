(()=>{"use strict";const e=window.wp.hooks,t=window.React,l=window.wp.compose,o=window.wp.blockEditor,a=window.wp.components,n=window.wp.i18n,i=(0,l.createHigherOrderComponent)((e=>l=>{const{name:i,attributes:r,setAttributes:g,isSelected:c}=l;return"core/image"!==i?(0,t.createElement)(e,{...l}):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,{key:"edit",...l}),c&&(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Lightbox Settings","image-lightbox-gallery")},(0,t.createElement)(a.ToggleControl,{label:(0,n.__)("Open in Lightbox","image-lightbox-gallery"),checked:r.openInLightbox,onChange:e=>g({openInLightbox:e})}),r.openInLightbox&&(0,t.createElement)(a.TextControl,{label:(0,n.__)("Gallery Slug","image-lightbox-gallery"),value:r.gallerySlug,onChange:e=>g({gallerySlug:e})}))))}),"withLightboxControls");(0,e.addFilter)("blocks.registerBlockType","image-lightbox-gallery/extend-image-block",(function(e,t){return"core/image"!==t||(e.attributes={...e.attributes,openInLightbox:{type:"boolean",default:!1},gallerySlug:{type:"string",default:""}}),e})),(0,e.addFilter)("editor.BlockEdit","image-lightbox-gallery/add-lightbox-toggle",i);const r=window.wp.element;(0,e.addFilter)("blocks.getSaveElement","image-lightbox-gallery/apply-lightbox-to-image",(function(e,t,l){return"core/image"===t.name&&l.openInLightbox&&l.url?(0,r.createElement)("figure",{className:"lightbox-enabled wp-block-image aligncenter size-large"},(0,r.createElement)("a",{href:l.url,"data-fancybox":l.gallerySlug||"gallery","data-caption":l.caption||""},(0,r.createElement)("img",{src:l.url,alt:l.alt,style:{objectFit:"cover"}}))):e||null}))})();