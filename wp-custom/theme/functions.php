<?php

function register_headless_cpts() {
    // 1. Register 'Member' (Team)
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
