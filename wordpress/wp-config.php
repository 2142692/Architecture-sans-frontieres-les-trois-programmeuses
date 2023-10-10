<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'les_trois_prog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Cp2muNMmDI9R)NLtU>*VvK?F?^U4e>5E@$fkpjn<6e1a[8GMZ^o*?[NIUV)qo%Nq' );
define( 'SECURE_AUTH_KEY',  '7a2_7`,T#AwC@H?uJ)u|yr-xA2/}5GRJI?qUbw7D}P[%QdCG:/Eyg|:HkD|yL:19' );
define( 'LOGGED_IN_KEY',    '8B_=@@)A/tbW;j<YL=2BZ(?97i|`0$(D.C#bVO:/YU#4}pz?,/Agchx&5b07qV_}' );
define( 'NONCE_KEY',        'BuZe0cJ*ISGeoaY5):QCpK/m<UP HR/8W~@Y8D.<[#;34C!HHoL$M7[83<60G;Oo' );
define( 'AUTH_SALT',        'UV2,0uU0n&o|KDWe)g>o.$D:(V/zhI%D1(BDZXj}=h3ga.k|H*z7]>L.B6-}ug<D' );
define( 'SECURE_AUTH_SALT', 'oxO[1D|5~I+y)SW@UCNP<&n/X=<s=>~oR3R&x[*L2.g3I& b0y2*/;qm+]Vc&;$O' );
define( 'LOGGED_IN_SALT',   '_HDBuAiC}_xGfXMlk%B_CC]2(HlK]PWd]<D2Zx<pd0]M u(I>opm2u=#L0s$p/z,' );
define( 'NONCE_SALT',       'bg.dpULeH*N$i)vHA~++u)C8-*w0-CE;*RbAYl>;5fR$T`upt=!QN5mQOgQ)Jc-u' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
