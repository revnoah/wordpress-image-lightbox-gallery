<?php
/**
 * Plugin Name: Image Lightbox Gallery
 * Description: Adds a lightbox setting to the core Image block using fancybox.
 * Version: 1.0.1
 * Author: Noah Stewart
 * Text Domain: image-lightbox-gallery
 */

defined('ABSPATH') || exit;

// Enqueue Editor Scripts
function ilb_register_editor_assets() {
    wp_enqueue_script(
        'ilb-block-script',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n', 'wp-hooks'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
}
add_action('enqueue_block_editor_assets', 'ilb_register_editor_assets');

function ilb_enqueue_lightbox() {
    wp_enqueue_script(
        'fancybox-core-image',
        plugins_url('build/view.js', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/view.js'),
        true
    );

    wp_enqueue_style(
        'fancybox-style',
        plugins_url('node_modules/@fancyapps/ui/dist/fancybox/fancybox.css', __FILE__),
        [],
        null
    );
}
add_action('wp_enqueue_scripts', 'ilb_enqueue_lightbox');
