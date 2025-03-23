<?php
/**
 * Plugin Name: Image Lightbox Gallery
 * Description: Adds a lightbox setting to the core Image block using Fancybox.
 * Version: 1.0.2
 * Author: Noah Stewart
 * Text Domain: image-lightbox-gallery
 */

defined('ABSPATH') || exit;

function ilb_register_editor_assets() {
    wp_enqueue_script(
        'ilb-block-script',
        plugins_url('build/index.js', __FILE__),
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n', 'wp-hooks'],
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
        true
    );
}
add_action('enqueue_block_editor_assets', 'ilb_register_editor_assets');

function ilb_enqueue_lightbox_assets() {
    $plugin_url = plugins_url('', __FILE__);
    $plugin_path = plugin_dir_path(__FILE__);

    // Fancybox JS
    wp_enqueue_script(
        'fancybox',
        $plugin_url . '/vendor/js/fancybox.umd.js',
        [],
        filemtime($plugin_path . 'vendor/js/fancybox.umd.js'),
        true
    );

    // Frontend script that initializes Fancybox
    wp_enqueue_script(
        'ilb-lightbox-view',
        $plugin_url . '/build/view.js',
        ['fancybox'],
        filemtime($plugin_path . 'build/view.js'),
        true
    );

    // Fancybox CSS
    wp_enqueue_style(
        'fancybox-style',
        $plugin_url . '/vendor/css/fancybox.css',
        [],
        filemtime($plugin_path . 'vendor/css/fancybox.css')
    );
}
add_action('wp_enqueue_scripts', 'ilb_enqueue_lightbox_assets');
