export const sass_1_2_1 =
`/* Example SASS Syntax code */
.navigation
  ul
    margin: 0
    padding: 0
    list-style: none
  li
    display: inline-block`;

export const sass_1_2_2 =
`/* Example SCSS Syntax code */
.navigation {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
}`;

export const sass_1_3_1 =
`node -v
npm -v`;

export const sass_1_3_2 =
`npm install -g sass`;

export const sass_1_3_3 =
`sass --version`;

export const sass_1_3_4 =
`my-project/
├── src/
│   ├── scss/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   └── main.scss
│   ├── index.html
│   └── ...
└── dist/
    ├── css/
    └── ...`;

export const sass_1_3_5 =
`sass src/scss/main.scss dist/css/main.css`;

export const sass_1_3_6 =
`sass --watch src/scss/main.scss dist/css/main.css`;

export const sass_2_1_1 =
`$font-size: 16px;
$line-height: 1.5;
$percentage: 100%;`;

export const sass_2_1_2 =
`$font-family-1: 'Helvetica, Arial, sans-serif';
$font-family-2: Helvetica, Arial, sans-serif;`;

export const sass_2_1_3 =
`$primary-color: blue;
$secondary-color: #FF5733;
$tertiary-color: rgba(0, 0, 0, 0.5);`;

export const sass_2_1_4 =
`$is-active: true;
$is-hidden: false;`;

export const sass_2_1_5 =
`$unset-value: null;`;

export const sass_2_1_6 =
`$single-list: 1px 2px 3px 4px;
$comma-separated-list: Helvetica, Arial, sans-serif;
$multidimensional-list: (1px 2px, 3px 4px);`;

export const sass_2_1_7 =
`$color-map: (primary: blue, secondary: red);`;

export const sass_2_1_8 =
`$variable: 10;
$variable: 20 !default; // $variable will still be 10`;

export const sass_2_2_1 =
`$font-size: 16px;
$font-family: Arial, sans-serif;

body {
  font-size: $font-size;
  font-family: $font-family;
}`;

export const sass_2_2_1_1 =
`body {
  font-size: 16px;
  font-family: Arial, sans-serif;
}`;

export const sass_2_2_2 =
`$global-variable: 10px;

.element {
  width: $global-variable * 2;
}`;

export const sass_2_2_2_1 =
`.element {
  width: 20px;
}`;

export const sass_2_2_3 =
`.element {
  $local-variable: 20px;
  width: $local-variable;
}`;

export const sass_2_2_3_1 =
`.element {
  width: 20px;
}`;

export const sass_2_2_4 =
`$variable: 10px;

.element {
  $variable: 20px;

  width: $variable; // Output will be 'width: 20px;'
}`;

export const sass_2_2_4_1 =
`.element {
  width: 20px;
}`;

export const sass_2_2_5 =
`$variable: 10px;

.element {
  $variable: 20px !global;
  width: $variable; // Output will be 'width: 20px;'
}

.another-element {
  width: $variable; // Output will be 'width: 20px;'
}`;

export const sass_2_2_5_1 =
`.element {
  width: 20px;
}

.another-element {
  width: 20px;
}`;

export const sass_2_3_1 =
`$color: green;

.my-#{color}-box {
  background-color: $color;
}`;

export const sass_2_3_1_1 =
`.my-green-box {
  background-color: green;
}`;

export const sass_2_3_2 =
`$border-direction: 'bottom';
$size: 1px;

.border-#{str-slice($border-direction, 0, 3)}-#{$size} {
  border-#{$border-direction}: $size solid black;
}`;

export const sass_2_3_2_1 =
`.border-bot-1px {
  border-bottom: 1px solid black;
}`;

export const sass_2_3_3 =
`$theme: light;

.button {
  background-color: #{if($theme == light, white, black)};
}`;

export const sass_2_3_3_1 =
`.button {
  background-color: white;
}`;

export const sass_2_3_4 =
`$property: 'transition';
$prefix: 'webkit';

.-#{$prefix}-#{$property} {
  -#{$prefix}-#{$property}: all 0.3s ease;
}`;

export const sass_2_3_4_1 =
`.-webkit-transition {
  -webkit-transition: all 0.3s ease;
}`;

export const sass_2_3_5 =
`$image-name: 'icon';
$url-path: '/images/';

.background {
  background-image: url('#{$url-path}#{$image-name}.png');
}`;

export const sass_2_3_5_1 =
`.background {
  background-image: url('/images/icon.png');
}`;

export const sass_2_4_1 =
`$base-size: 16px;

.element {
  font-size: $base-size + 2px; // 18px
  padding: $base-size - 4px; // 12px
  width: $base-size * 2; // 32px
  height: $base-size / 2; // 8px
  line-height: 10 % 3; // 1
}`;

export const sass_2_4_1_1 =
`.element {
  font-size: 18px;
  padding: 12px;
  width: 32px;
  height: 8px;
  line-height: 1;
}`;

export const sass_2_4_2 =
`$theme: 'light';
$class-name: 'button' + '-' + $theme; // 'button-light'`;

export const sass_2_4_3 =
`$is-large: $base-size >= 20px; // false`;

export const sass_2_4_4 =
`$is-same: $base-size == 16px; // true
$is-not-same: $base-size != 18px; // true`;

export const sass_2_4_5 =
`$is-valid: true;
$is-active: false;

$should-apply-styles: $is-valid and not $is-active; // true`;

export const sass_2_5_1 =
`@for $i from 1 through 3 {
  .font-size-#{$i} {
    font-size: $i * 2 + 10px;
  }
}`;

export const sass_2_5_1_1 =
`.font-size-1 {
  font-size: 12px;
}

.font-size-2 {
  font-size: 14px;
}

.font-size-3 {
  font-size: 16px;
}`;

export const sass_2_5_2 =
`$colors: (red: #f00, green: #0f0, blue: #00f);

@each $name, $color in $colors {
  .#{$name}-text {
    color: $color;
  }
}`;

export const sass_2_5_2_1 =
`.red-text {
  color: #f00;
}

.green-text {
  color: #0f0;
}

.blue-text {
  color: #00f;
}`;

export const sass_2_5_3 =
`$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}`;

export const sass_2_5_3_1 =
`.item-6 {
  width: 12em;
}

.item-4 {
  width: 8em;
}

.item-2 {
  width: 4em;
}`;

export const sass_2_5_4 =
`$theme: light;

.button {
  @if $theme == light {
    background-color: #fff;
    color: #000;
  } @else if $theme == dark {
    background-color: #000;
    color: #fff;
  } @else {
    background-color: #ccc;
    color: #333;
  }
}`;

export const sass_2_5_4_1 =
`.button {
  background-color: #fff;
  color: #000;
}`;

export const sass_3_1_1 =
`.navbar {
  background: #333;
  
  .nav-item {
    display: inline-block;
    margin: 10px;
    
    a {
      text-decoration: none;
      color: white;
    }
  }
}`;

export const sass_3_1_1_1 =
`.navbar {
  background: #333;
}
.navbar .nav-item {
  display: inline-block;
  margin: 10px;
}
.navbar .nav-item a {
  text-decoration: none;
  color: white;
}`;

export const sass_3_1_2 =
`.button {
  background: blue;
  
  &:hover {
    background: darkblue;
  }
}`;

export const sass_3_1_2_1 =
`.button {
  background: blue;
}
.button:hover {
  background: darkblue;
}`;

export const sass_3_1_3 =
`.box {
  font: {
    family: Arial, sans-serif;
    size: 16px;
    weight: bold;
  };
}`;

export const sass_3_1_3_1 =
`.box {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
}`;

export const sass_3_1_4 =
`.container {
  width: 100%;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
}`;

export const sass_3_1_4_1 =
`.container {
  width: 100%;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}`;

export const sass_3_2_1 =
`@mixin reset-list {
  list-style: none;
  margin: 0;
  padding: 0;
}`;

export const sass_3_2_2 =
`ul {
  @include reset-list;
}`;

export const sass_3_2_2_1 =
`ul {
  list-style: none;
  margin: 0;
  padding: 0;
}`;

export const sass_3_2_3 =
`@mixin text-shadow($x: 1px, $y: 1px, $blur: 1px, $color: #000) {
  text-shadow: $x $y $blur $color;
}`;

export const sass_3_2_4 =
`h1 {
  @include text-shadow(2px, 2px, 2px, #333);
}`;

export const sass_3_2_4_1 =
`h1 {
  text-shadow: 2px 2px 2px #333;
}`;

export const sass_3_2_5 =
`h1 {
  @include text-shadow;
}`;

export const sass_3_2_5_1 =
`h1 {
  text-shadow: 1px 1px 1px #000;
}`;

export const sass_3_2_6 =
`@mixin box-shadow($shadows...) {
  box-shadow: $shadows;
}`;

export const sass_3_2_7 =
`.box {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}`;

export const sass_3_2_7_1 =
`.box {
  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}`;

export const sass_3_2_8 =
`@mixin media-query($device-width) {
  @media screen and (max-width: $device-width) {
    @content;
  }
}`;

export const sass_3_2_9 =
`@include media-query(768px) {
  body {
    background-color: blue;
  }
}`;

export const sass_3_2_9_1 =
`@media screen and (max-width: 768px) {
  body {
    background-color: blue;
  }
}`;

export const sass_3_3_1 =
`// Base Class
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: black;
}

// Inheriting Base Class
.success {
  @extend .message;
  border-color: green;
}

// Inheriting Base Class
.error {
  @extend .message;
  border-color: red;
}`;

export const sass_3_3_1_1 =
`.message, .error, .success {
  border: 1px solid #ccc;
  padding: 10px;
  color: black;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}`;

export const sass_3_3_2 =
`// Placeholder
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: black;
}

// Extending Placeholder
.success {
  @extend %message-shared;
  border-color: green;
}

// Extending Placeholder
.error {
  @extend %message-shared;
  border-color: red;
}`;

export const sass_3_3_2_1 =
`.error, .success {
  border: 1px solid #ccc;
  padding: 10px;
  color: black;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}`;

export const sass_3_4_1 =
`@function square($num) {
  @return $num * $num;
}

:root {
  --square: #{square(3)}; // Call square function
}`;

export const sass_3_4_1_1 =
`.root {
  --square: 9;
}`;

export const sass_3_4_2 =
`@function area($length, $width: $length) {
  @return $length * $width;
}

:root {
  --area1: #{area(2)}; // Call area function with default value
  --area2: #{area(2, 5)}; // Call area function with 2 values
}`;

export const sass_3_4_2_1 =
`:root {
  --area1: 4;
  --area2: 10;
}`;

export const sass_3_4_3 =
`@function average($numbers...) {
  $sum: 0;
  $count: length($numbers);
  @each $num in $numbers {
    $sum: $sum + $num;
  }
  @return $sum / $count;
}

:root {
  --average: #{average(1, 2, 3, 4, 5)}; // Call average function
}`;

export const sass_3_4_3_1 =
`:root {
  --average: 3;
}`;

export const sass_3_4_4 =
`@function custom-darken($color, $amount) {
  $red: red($color);
  $green: green($color);
  $blue: blue($color);
  $red: max(0, min(255, $red - ($red * $amount / 100)));
  $green: max(0, min(255, $green - ($green * $amount / 100)));
  $blue: max(0, min(255, $blue - ($blue * $amount / 100)));
  @return rgb($red, $green, $blue);
}

.button {
  background-color: custom-darken(blue, 20%);
}`;

export const sass_3_4_4_1 =
`.button {
  background-color: blue;
}`;

export const sass_3_5_1 =
`.box {
  background-color: lighten(red, 10%); // Lightens red by 10%
}`;

export const sass_3_5_1_1 =
`.box {
  background-color: #ff3333;
}`;

export const sass_3_5_2 =
`.content {
  content: str-insert('Hello', ' world', 6); // Output: 'Hello world'
}`;

export const sass_3_5_2_1 =
`.content {
  content: 'Hello world';
}`;

export const sass_3_5_3 =
`.box {
  width: round(15.25px); // Output: width: 15px;
}`;

export const sass_3_5_3_1 =
`.box {
  width: 15px;
}`;

export const sass_3_5_4 =
`.box {
  $my-list: 10px 20px 30px;
  width: nth($my-list, 2); // Output: width: 20px;
}`;

export const sass_3_5_4_1 =
`.box {
  width: 20px;
}`;

export const sass_3_5_5 =
`.box {
  $my-map: ( 'width': 100px, 'height': 200px );
  height: map-get($my-map, 'height'); // Output: height: 200px;
}`;

export const sass_3_5_5_1 =
`.box {
  height: 200px;
}`;

export const sass_3_5_6 =
`.box {
  width: if(true, 100px, 200px); // Output: width: 100px;
}`;

export const sass_3_5_6_1 =
`.box {
  width: 100px;
}`;

export const sass_3_6_1 =
`// _variables.scss
$primary-color: #333;
$secondary-color: #ccc;`;

export const sass_3_6_2 =
`// main.scss
@import 'variables';`;

export const sass_3_6_3 =
`styles/
|-- base/
|   |-- _reset.scss
|   |-- _typography.scss
|-- components/
|   |-- _buttons.scss
|   |-- _cards.scss
|-- utilities/
|   |-- _variables.scss
|   |-- _mixins.scss
|-- main.scss`;

export const sass_3_6_4 =
`// main.scss
@import 'base/reset';
@import 'base/typography';
@import 'components/buttons';
@import 'components/cards';
@import 'utilities/variables';
@import 'utilities/mixins';`;

export const sass_3_7_1 =
`@use 'sass:math';

div {
  width: math.div(100%, 3);  // division
}`;

export const sass_3_7_1_1 =
`div {
  width: 33.3333333333%;
}`;

export const sass_3_7_2 =
`@use 'sass:string';

.button {
  content: string.to-upper-case('click me'); // CLICK ME
}`;

export const sass_3_7_2_1 =
`.button {
  content: 'CLICK ME';
}`;

export const sass_3_7_3 =
`@use 'sass:color';

.button {
  background-color: color.scale(red, $lightness: 20%);
}`;

export const sass_3_7_3_1 =
`.button {
  background-color: #ff3333;
}`;

export const sass_3_7_4 =
`@use 'sass:list';

$my-list: list.append((red, green), blue);

.button {
  background-color: list.nth($my-list, 3);
}`;

export const sass_3_7_4_1 =
`.button {
  background-color: blue;
}`;

export const sass_3_7_5 =
`@use 'sass:map';

$my-map: map.merge(('color': red), ('width': 100px));

.button {
  background-color: map.get($my-map, 'color');
  width: map.get($my-map, 'width');
}`;

export const sass_3_7_5_1 =
`.button {
  background-color: red;
  width: 100px;
}`;

export const sass_3_7_6 =
`@use 'sass:selector';

$new-selector: selector.parse('.new-selector');

.container {
  @at-root #{ $new-selector } {
    color: blue;
  }
}`;

export const sass_3_7_6_1 =
`.new-selector {
  color: blue;
}`;

export const sass_3_7_7 =
`@use 'sass:meta';

$type: meta.type-of(42);  // Output: 'number'`;

export const sass_3_7_7_1 =
``;

export const sass_4_1_1 =
`// Example
@import 'variables';
@import 'mixins';
@import 'reset';`;

export const sass_4_1_2 =
`$primary-color: #333;`;

export const sass_4_1_3 =
`// -------------------------------------
// Section: Button Styles
// -------------------------------------`;

export const sass_4_2_1 =
`$my-variable: 42;
@debug $my-variable; // Output: 42`;

export const sass_4_2_2 =
`$my-variable: 42;

@if unitless($my-variable) {
  @warn 'Expected $my-variable to have a unit.'; // Output: 'Expected $my-variable to have a unit.'
}`;
