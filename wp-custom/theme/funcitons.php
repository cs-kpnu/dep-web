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
        'rewrite'             => ['slug' => 'events'],
    ]);
}
add_action('init', 'register_headless_cpts');
