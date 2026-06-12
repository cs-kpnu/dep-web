<?php

// Tell ACF where to save and load Local JSON field groups
add_filter('acf/settings/save_json', function() {
    return get_stylesheet_directory() . '/acf-json';
});
add_filter('acf/settings/load_json', function($paths) {
    $paths[] = get_stylesheet_directory() . '/acf-json';
    return $paths;
});

// Resolve ACF image fields to URLs in the REST API (return_format is ignored outside PHP templates)
add_filter('acf/rest/format_value_for_rest', function($value, $post_id, $field) {
    if ($field['type'] === 'image' && is_numeric($value) && $value > 0) {
        return wp_get_attachment_url($value);
    }
    return $value;
}, 10, 3);

function register_headless_cpts() {
    // 1. Register 'Project'
    register_post_type('project', [
        'labels' => [
            'name'          => 'Projects',
            'singular_name' => 'Project',
            'add_new_item'  => 'Add New Project',
            'edit_item'     => 'Edit Project',
            'view_item'     => 'View Project',
            'search_items'  => 'Search Projects',
        ],
        'public'       => true,
        'has_archive'  => true,
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
         'rest_base'          => 'projects',
        'menu_icon'    => 'dashicons-portfolio',
        'menu_position'=> 5,
        'rewrite'      => ['slug' => 'projects'],
    ]);

    // 2. Register 'Member' (Team)
    register_post_type('member', [
        'labels' => [
            'name'          => 'Team Members',
            'singular_name' => 'Team Member',
            'add_new_item'  => 'Add New Member',
            'edit_item'     => 'Edit Member',
            'view_item'     => 'View Member',
            'search_items'  => 'Search Members',
        ],
        'public'              => true,
        'has_archive'         => true,
        'supports'            => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest'        => true,
           'rest_base'          => 'members',
        'show_in_graphql'     => true,
        'graphql_single_name' => 'member',
        'graphql_plural_name' => 'members',
        'menu_icon'           => 'dashicons-groups',
        'menu_position'       => 6,
        'rewrite'             => ['slug' => 'team'],
    ]);

    // 2. Register 'Event'
    register_post_type('event', [
        'labels' => [
            'name'          => 'Events',
            'singular_name' => 'Event',
            'add_new_item'  => 'Add New Event',
            'edit_item'     => 'Edit Event',
            'view_item'     => 'View Event',
            'search_items'  => 'Search Events',
        ],
        'public'              => true,
        'has_archive'         => true,
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest'        => true,
           'rest_base'          => 'events',
        'show_in_graphql'     => true,
        'graphql_single_name' => 'event',
        'graphql_plural_name' => 'events',
        'menu_icon'           => 'dashicons-calendar-alt',
        'menu_position'       => 7,
        'rewrite'             => ['slug' => 'events'],
    ]);
}
add_action('init', 'register_headless_cpts');

// Only for ACF Pro users! This registers a custom block type that Next.js will render on the frontend. 
// we could add more block here and after add them to admin gutenberg editor and use them in our pages.
add_action('acf/init', 'my_headless_acf_blocks');
function my_headless_acf_blocks() {
    if( function_exists('acf_register_block_type') ) {

        acf_register_block_type(array(
            'name'              => 'custom-hero',
            'title'             => __('Hero Section'),
            'description'       => __('A custom hero block for Next.js.'),
            'render_template'   => '', // Leave blank! Next.js renders this, not WP.
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'keywords'          => array('hero', 'header'),
            'mode'              => 'preview', // Shows the ACF form in the editor
        ));
    }
}


function add_cors_http_header() {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    $allowed_origins = [
        'https://dep-web-gamma.vercel.app',
        'http://localhost:3000', #FIXME: ONLY TEMPORARY FOR TESTING PURPOSES, REMOVE THIS IN PRODUCTION
        'http://127.0.0.1:3000' #FIXME: ONLY TEMPORARY FOR TESTING PURPOSES, REMOVE THIS IN PRODUCTION
    ];

    if (in_repeatable_array($origin, $allowed_origins) || in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: " . $origin);
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce");
    }
}
add_action('init', 'add_cors_http_header');