export const css_1_3_1 =
`p {
  color: blue;
  font-size: 16px;
}`;

export const css_1_3_2 =
`p {
  color: red;
  font-size: 12px;
  margin: 10px 20px;
}`;

export const css_1_3_3 =
`/* This is a CSS comment */`;

export const css_1_3_4 =
`h1 {
  color: green;
  font-size: 24px;
}`;

export const css_1_4_1 =
`<link rel="stylesheet" href="styles.css">`;

export const css_1_4_2 =
`<style>
  h1 {
    color: blue;
    font-size: 24px;
  }
</style>`;

export const css_1_4_3 =
`<h1 style="color: red; font-size: 20px;">Hello, world!</h1>`;

export const css_2_1_1 =
`p {
  /* CSS styles */
}`;

export const css_2_1_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Element Selector Example</title>
  <style>
    /* CSS element selector for <p> tag */
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
</body>
</html>`;

export const css_2_1_2 =
`/* Selects only <p> elements with the class "highlight" */
p.highlight {
  /* CSS styles */
}`;

export const css_2_1_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Element Selector with Class Selector Example</title>
  <style>
    /* CSS element selector combined with class selector for <p> tag */
    p.highlight {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>This is a regular paragraph.</p>
  <p class="highlight">This is a highlighted paragraph.</p>
</body>
</html>`;

export const css_2_2_1 =
`.my-class {
  /* CSS styles */
}`;

export const css_2_2_2 =
`<p class="my-class">This paragraph has the class "my-class".</p>
<div class="my-class">This div also has the class "my-class".</div>`;

export const css_2_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Class Selector Example</title>
  <style>
    /* CSS class selector */
    .my-class {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>This is a regular paragraph.</p>
  <p class="my-class">This paragraph has the class "my-class".</p>
  <div class="my-class">This div also has the class "my-class".</div>
</body>
</html>`;

export const css_2_2_3 =
`/* Selects only <p> elements with the class "my-class" inside a <div> with the class "container" */
.container p.my-class {
  /* CSS styles */
}`;

export const css_2_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Combined CSS Selectors Example</title>
  <style>
    /* Combined CSS selectors */
    .container p.my-class {
      color: blue;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <p class="my-class">This paragraph is inside a container and has the "my-class" class applied to it.</p>
    <p>This paragraph is inside a container but does not have the "my-class" class.</p>
    <div>
      <p class="my-class">This paragraph is nested inside another element but still has the "my-class" class.</p>
    </div>
  </div>
</body>
</html>`;

export const css_2_2_4 =
`<div class="class1 class2">This div has both "class1" and "class2" classes.</div>`;

export const css_2_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Applying CSS Classes to a Div Example</title>
  <style>
    /* CSS rules for class1 */
    .class1 {
      background-color: yellow;
      border: 1px solid black;
    }

    /* CSS rules for class2 */
    .class2 {
      color: blue;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="class1 class2">
    This div element has both "class1" and "class2" applied to it.
  </div>
</body>
</html>`;

export const css_2_3_1 =
`#my-id {
  /* CSS styles */
}`;

export const css_2_3_2 =
`<h1 id="my-id">This heading has the ID "my-id".</h1>
<div id="another-id">This div has the ID "another-id".</div>`;

export const css_2_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Example for HTML Elements</title>
  <style>
    /* CSS styling for the element with ID "my-id" */
    #my-id {
      color: blue;
      font-size: 24px;
      text-decoration: underline;
    }

    /* CSS styling for the element with ID "another-id" */
    #another-id {
      background-color: yellow;
      padding: 10px;
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <h1 id="my-id">This heading has the ID "my-id".</h1>
  <div id="another-id">This div has the ID "another-id".</div>
</body>
</html>`;

export const css_2_3_3 =
`/* Selects only the <p> element with the ID "my-paragraph" inside a <div> with the class "container" */
.container #my-paragraph {
  /* CSS styles */
}`;

export const css_2_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Combined Selectors Example</title>
  <style>
    /* Combined CSS selectors */
    .container #my-paragraph {
      color: blue;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <p id="my-paragraph">This paragraph is inside a div with the class "container" and has the ID "my-paragraph".</p>
    <p>This paragraph is inside a div with the class "container" but does not have the ID "my-paragraph".</p>
  </div>
</body>
</html>`;

export const css_2_4_1 =
`[data-custom] {
  /* CSS styles */
}`;

export const css_2_4_2 =
`input[type="text"] {
  /* CSS styles */
}`;

export const css_2_4_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Selector Example</title>
  <style>
    /* CSS selector for input[type="text"] */
    input[type="text"] {
      width: 200px;
      padding: 10px;
      border: 1px solid gray;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name">
    <br/>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" placeholder="Enter your email address">
    <br/>
    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone" placeholder="Enter your phone number">
  </form>
</body>
</html>`;

export const css_2_4_3 =
`a[href*="example.com"] {
  /* CSS styles */
}`;

export const css_2_4_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Selector Example</title>
  <style>
    /* CSS selector for a[href*="example.com"] */
    a[href*="example.com"] {
      color: blue;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h2>Links:</h2>
  <ul>
    <li><a href="https://example.com">Example Domain</a></li>
    <li><a href="https://www.example.com">Example.com</a></li>
    <li><a href="https://subdomain.example.com">Subdomain Example</a></li>
    <li><a href="https://otherwebsite.com">Other Website</a></li>
  </ul>
</body>
</html>`;

export const css_2_4_4 =
`img[src^="images/"] {
  /* CSS styles */
}`;

export const css_2_4_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Selector Example</title>
  <style>
    /* CSS selector for img[src^="images/"] */
    img[src^="images/"] {
      border: 2px solid red;
      width: 200px;
      height: 200px;
    }
  </style>
</head>
<body>
  <h2>Images:</h2>
  <img src="images/image1.jpg" alt="Image 1">
  <img src="images/image2.jpg" alt="Image 2">
  <img src="photos/photo1.jpg" alt="Photo 1">
  <img src="images/image3.jpg" alt="Image 3">
</body>
</html>`;

export const css_2_4_5 =
`a[href$=".pdf"] {
  /* CSS styles */
}`;

export const css_2_4_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Selector Example</title>
  <style>
    /* CSS selector for a[href$=".pdf"] */
    a[href$=".pdf"] {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>Links:</h2>
  <ul>
    <li><a href="https://example.com/document.pdf">PDF Document</a></li>
    <li><a href="https://example.com/image.jpg">Image</a></li>
    <li><a href="https://example.com/presentation.pptx">Presentation</a></li>
    <li><a href="https://example.com/document.docx">Document</a></li>
  </ul>
</body>
</html>`;

export const css_2_5_1 =
`a:hover {
  /* CSS styles for links when hovered */
}

li:first-child {
  /* CSS styles for the first child of <li> elements */
}`;

export const css_2_5_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Selector Example</title>
  <style>
    /* CSS selector for a:hover */
    a:hover {
      color: red;
      text-decoration: underline;
    }

    /* CSS selector for li:first-child */
    li:first-child {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>Links:</h2>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
</body>
</html>`;

export const css_2_5_2 =
`p::before {
  /* CSS styles for content inserted before <p> elements */
  content: "Prefix: ";
}

h1::first-letter {
  /* CSS styles for the first letter of <h1> elements */
  font-size: 2em;
}`;

export const css_2_5_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Selector Example</title>
  <style>
    /* CSS selector for p::before */
    p::before {
      content: "Prefix: ";
      font-weight: bold;
    }

    /* CSS selector for h1::first-letter */
    h1::first-letter {
      font-size: 2em;
      color: red;
    }
  </style>
</head>
<body>
  <h1>Heading 1</h1>
  <p>This is a paragraph with some content.</p>
</body>
</html>`;

export const css_3_2_1 =
`margin: 10px; /* Sets a margin of 10 pixels for all sides */
margin-top: 20px; /* Sets a margin of 20 pixels for the top side */
margin: 10px 20px; /* Sets a margin of 10 pixels for top and bottom, 20 pixels for left and right */`;

export const css_3_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .class1 {
      margin: 10px;
      background-color: lightblue;
      padding: 20px;
    }
    
    .class2 {
      margin-top: 20px;
      background-color: lightgreen;
      padding: 20px;
    }
    
    .class3 {
      margin: 10px 20px;
      background-color: lightyellow;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="class1">
    <h2>Class 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class2">
    <h2>Class 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class3">
    <h2>Class 3</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</body>
</html>`;

export const css_3_2_2 =
`padding: 10px; /* Sets a padding of 10 pixels for all sides */
padding-top: 20px; /* Sets a padding of 20 pixels for the top side */
padding: 10px 20px; /* Sets a padding of 10 pixels for top and bottom, 20 pixels for left and right */
`;

export const css_3_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .class1 {
      padding: 10px;
      background-color: lightblue;
      margin: 20px;
    }
    
    .class2 {
      padding-top: 20px;
      background-color: lightgreen;
      margin: 20px;
    }
    
    .class3 {
      padding: 10px 20px;
      background-color: lightyellow;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div class="class1">
    <h2>Class 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class2">
    <h2>Class 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class3">
    <h2>Class 3</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</body>
</html>`;

export const css_3_2_3 =
`border: 1px solid black; /* Sets a border with a 1-pixel width, solid style, and black color */
border-width: 2px; /* Sets the border width to 2 pixels */
border-style: dashed; /* Sets the border style to dashed */
border-color: red; /* Sets the border color to red */
`;

export const css_3_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .class1 {
      border: 1px solid black;
      padding: 20px;
    }
    
    .class2 {
      border-width: 2px;
      padding: 20px;
    }
    
    .class3 {
      border-style: dashed;
      padding: 20px;
    }
    
    .class4 {
      border-color: red;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="class1">
    <h2>Class 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class2">
    <h2>Class 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class3">
    <h2>Class 3</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="class4">
    <h2>Class 4</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</body>
</html>`;

export const css_3_3_1 =
`.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid black;
}`;

export const css_3_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      box-sizing: border-box;
      width: 200px;
      padding: 20px;
      border: 2px solid black;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Box Example</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</body>
</html>`;

export const css_3_3_2 =
`.box {
  width: 200px;
  height: 200px;
  overflow: scroll;
}`;

export const css_3_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      overflow: scroll;
      background-color: lightblue;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Scrollable Box Example</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices dolor eget velit vulputate auctor. Nam dignissim lacus ac dui rhoncus posuere.</p>
    <p>Nulla facilisi. Duis varius tortor vel nunc pulvinar, a pharetra mauris finibus. Vivamus et ante vitae ipsum interdum mattis sed id erat.</p>
    <p>Sed condimentum magna nec tortor efficitur, ac dignissim nulla iaculis. Suspendisse tristique luctus luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In mattis consectetur dapibus.</p>
    <p>Sed quis purus vel nisl lacinia iaculis et non nisi. Proin rutrum commodo massa, nec laoreet sapien semper vel.</p>
    <p>Donec vitae bibendum neque. Integer accumsan tincidunt tellus nec consectetur. Integer eget arcu lobortis, congue orci non, cursus urna. Donec ut mauris ac orci gravida efficitur.</p>
  </div>
</body>
</html>`;

export const css_3_4_1 =
`.box {
  width: 200px;
  height: 150px;
  padding: 10px;
  border: 2px solid black;
  box-sizing: border-box;
}`;

export const css_3_4_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 150px;
      padding: 10px;
      border: 2px solid black;
      box-sizing: border-box;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Box Example</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</body>
</html>`;

export const css_3_4_2 =
`.box {
  margin: 10px;
  padding: 20px;
}`;

export const css_3_4_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      margin: 10px;
      padding: 20px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Box Example</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</body>
</html>`;

export const css_3_4_3 =
`.column {
  width: 33.33%;
  padding: 10px;
  box-sizing: border-box;
}`;

export const css_3_4_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .column {
      width: 33.33%;
      padding: 10px;
      box-sizing: border-box;
      background-color: lightblue;
      float: left;
      box-sizing: border-box;
    }
    
    /* Clearfix for the container */
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>
  <div class="clearfix">
    <div class="column">
      <h2>Column 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="column">
      <h2>Column 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="column">
      <h2>Column 3</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</body>
</html>`;

export const css_3_4_4 =
`.container {
  width: 200px;
  height: 200px;
  overflow: scroll;
}`;

export const css_3_4_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 200px;
      height: 200px;
      overflow: scroll;
      background-color: lightblue;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Scrollable Container Example</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices dolor eget velit vulputate auctor. Nam dignissim lacus ac dui rhoncus posuere.</p>
    <p>Nulla facilisi. Duis varius tortor vel nunc pulvinar, a pharetra mauris finibus. Vivamus et ante vitae ipsum interdum mattis sed id erat.</p>
    <p>Sed condimentum magna nec tortor efficitur, ac dignissim nulla iaculis. Suspendisse tristique luctus luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In mattis consectetur dapibus.</p>
    <p>Sed quis purus vel nisl lacinia iaculis et non nisi. Proin rutrum commodo massa, nec laoreet sapien semper vel.</p>
    <p>Donec vitae bibendum neque. Integer accumsan tincidunt tellus nec consectetur. Integer eget arcu lobortis, congue orci non, cursus urna. Donec ut mauris ac orci gravida efficitur.</p>
  </div>
</body>
</html>`;

export const css_3_4_5 =
`.block-element {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}`;

export const css_3_4_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .block-element {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
      background-color: lightblue;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="block-element">
    <h2>Block Element</h2>
    <p>This is a block-level element with a fixed width of 300px. It is horizontally centered using the margin-left and margin-right set to auto.</p>
  </div>
</body>
</html>`;

export const css_4_1_1 =
`.box {
  position: relative;
  top: 20px;
  left: 10px;
}`;

export const css_4_1_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      position: relative;
      top: 20px;
      left: 10px;
      width: 200px;
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Relative Position Box</h2>
    <p>This box is positioned using the CSS properties of position: relative, top: 20px, and left: 10px. It will be positioned 20 pixels from the top and 10 pixels from the left of its original position within the document flow.</p>
  </div>
</body>
</html>`;

export const css_4_1_2 =
`.box {
  position: absolute;
  top: 50px;
  left: 100px;
}`;

export const css_4_1_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      position: absolute;
      top: 50px;
      left: 100px;
      width: 200px;
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Absolute Position Box</h2>
    <p>This box is positioned using the CSS properties of position: absolute, top: 50px, and left: 100px. It will be positioned 50 pixels from the top and 100 pixels from the left of its closest positioned ancestor or the document if there is no ancestor with a positioned property.</p>
  </div>
</body>
</html>`;

export const css_4_1_3 =
`.box {
  position: fixed;
  top: 20px;
  right: 30px;
}`;

export const css_4_1_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      position: fixed;
      top: 20px;
      right: 30px;
      width: 200px;
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Fixed Position Box</h2>
    <p>This box is positioned using the CSS properties of position: fixed, top: 20px, and right: 30px. It will be fixed at a distance of 20 pixels from the top and 30 pixels from the right of the viewport.</p>
  </div>
</body>
</html>`;

export const css_4_1_4 =
`.box {
  position: sticky;
  top: 10px;
}`;

export const css_4_1_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      position: sticky;
      top: 10px;
      width: 200px;
      background-color: lightblue;
      padding: 10px;
    }

    .content {
      height: 800px;
      background-color: lightgray;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>Sticky Box</h2>
    <p>This box is positioned using the CSS properties of position: sticky and top: 10px. It will be sticky at a distance of 10 pixels from the top of its nearest ancestor scrollable container.</p>
  </div>
  <div class="content">
    <h2>Scrollable Content</h2>
    <p>This is a scrollable content container.</p>
  </div>
</body>
</html>`;

export const css_4_3_1 =
`img {
  float: right;
  width: 200px;
  height: 200px;
}`;

export const css_4_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      float: right;
      width: 200px;
      height: 200px;
      margin: 10px;
    }
  </style>
</head>
<body>
  <img src="assets/images/cute_cat.jpg" alt="Example Image">
  <p>This is an example of an image element. It has the CSS properties of float: right, width: 200px, height: 200px, and margin: 10px. As a result, the image is floated to the right side of the surrounding content with a width and height of 200 pixels each.</p>
</body>
</html>`;

export const css_4_3_2 =
`.content {
  clear: both;
}`;

export const css_4_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <style>
    .content {
      clear: both;
      padding: 20px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div style="float: left; width: 200px; height: 100px; background-color: lightgreen; margin: 10px;"></div>
  <div style="float: right; width: 200px; height: 100px; background-color: lightpink; margin: 10px;"></div>
  <div class="content">
    <h2>Content with Clear Property</h2>
    <p>This is an example of content inside a <code>&lt;div&gt;</code> element with the class "content". It has the CSS property <code>clear: both;</code> applied to it.</p>
    <p>The clear property ensures that the content <em>clears</em> any floated elements that come before it.</p>
  </div>
  </body>
</html>`;

export const css_4_4_1 =
`.container {
  display: grid;
}`;

export const css_4_4_2 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px; /* Two rows with heights of 100px and 200px */
  grid-template-columns: 1fr 2fr; /* Two columns with widths in a 1:2 ratio. The fr unit represents a fraction of the available space in the grid container */
}`;

export const css_4_4_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Grid Track Example</title>
  <style>
    .container {
      display: grid;
      grid-template-rows: 100px 200px;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_4_4_3 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
}

.item {
  grid-row: 1 / 2; /* Position the item in the first row */
  grid-column: 1 / 3; /* Position the item in the first and second columns */
}`;

export const css_4_4_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Grid Item Example</title>
  <style>
    .container {
      display: grid;
      grid-template-rows: 100px 200px;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      text-align: center;
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_4_4_4 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: [col1-start] 1fr [col2-start] 2fr [col2-end];
}

.item {
  grid-row: 1 / 3; /* Position the item from the first row to the third row */
  grid-column: col1-start / col2-end; /* Position the item from the start of the first column to the end of the second column */
}`;

export const css_4_4_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Grid Line Example</title>
  <style>
    .container {
      display: grid;
      grid-template-rows: 100px 200px;
      grid-template-columns: [col1-start] 1fr [col2-start] 2fr [col2-end];
      grid-gap: 10px;
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      text-align: center;
      grid-row: 1 / 3;
      grid-column: col1-start / col2-end;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
  </div>
</body>
</html>`;

export const css_4_4_5 =
`.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px; /* Sets the gap size to 10px */
}`;

export const css_4_4_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Grid Gap Example</title>
  <style>
    .container {
      display: grid;
      grid-template-rows: 100px 200px;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_4_5_1 =
`.container {
  display: flex;
}`;

export const css_4_5_2 =
`.container {
  display: flex;
}

.item {
  flex-grow: 1; /* Allow the item to grow to fill the available space */
  flex-shrink: 0; /* Prevent the item from shrinking */
  flex-basis: 25%; /* Set the initial size of the item */
}`;

export const css_4_5_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Flex Item Example</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap; /* Enable wrapping of flex items to new lines if necessary */
      justify-content: space-between; /* Distribute items evenly with space between them */
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 25%;
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>`;

export const css_4_5_3 =
`.container {
  display: flex;
  flex-direction: column; /* Arrange items vertically */
}`;

export const css_4_5_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Flex Direction Example</title>
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center; /* Center items horizontally within the container */
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_4_5_4 =
`.container {
  display: flex;
  justify-content: center; /* Center align items along the main axis */
}`;

export const css_4_5_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Justify Content Example</title>
  <style>
    .container {
      display: flex;
      justify-content: center;
      height: 200px; /* Added height for visualization */
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_4_5_5 =
`.container {
  display: flex;
  align-items: center; /* Vertically center align items */
}`;

export const css_4_5_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Align Items Example</title>
  <style>
    .container {
      display: flex;
      align-items: center;
      height: 200px; /* Added height for visualization */
      background-color: lightblue;
    }
    
    .item {
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_4_5_6 =
`.container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
}`;

export const css_4_5_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Flex Wrap Example</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      background-color: lightblue;
    }
    
    .item {
      flex: 0 0 200px; /* Set a fixed width for the flex items */
      height: 150px; /* Set a fixed height for the flex items */
      background-color: lightgreen;
      padding: 10px;
      margin: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>`;

export const css_5_1_1 =
`body {
  font-family: Arial, sans-serif;
}`;

export const css_5_1_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Font Family Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph using the Arial font.</p>
</body>
</html>`;

export const css_5_1_2 =
`h1 {
  font-size: 32px;
}`;

export const css_5_1_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Font Size Example</title>
  <style>
    h1 {
      font-size: 32px;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example h1 tag with font size 32px.</p>
</body>
</html>`;

export const css_5_1_3 =
`p {
  font-weight: bold;
}`;

export const css_5_1_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Font Weight Example</title>
  <style>
    p {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with bold font weight.</p>
  <p>Another paragraph with bold font weight.</p>
</body>
</html>`;

export const css_5_1_4 =
`p {
  font-style: italic;
}
`;

export const css_5_1_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Font Style Example</title>
  <style>
    p {
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with italic font style.</p>
  <p>Another paragraph with italic font style.</p>
</body>
</html>`;

export const css_5_1_5 =
`p {
  text-decoration: underline;
}`;

export const css_5_1_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Text Decoration Example</title>
  <style>
    p {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with underlined text.</p>
  <p>Another paragraph with underlined text.</p>
</body>
</html>`;

export const css_5_1_6 =
`h2 {
  text-transform: uppercase;
}`;

export const css_5_1_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Text Transform Example</title>
  <style>
    h2 {
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <h2>This is an example heading with uppercase text.</h2>
  <h2>Another heading with uppercase text.</h2>
</body>
</html>`;

export const css_5_1_7 =
`.container {
  text-align: center;
}`;

export const css_5_1_7_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Text Align Example</title>  
  <style>
    .container {
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to my Website</h1>
    <p>This is an example paragraph with centered text.</p>
    <p>Another paragraph with centered text.</p>
  </div>
</body>
</html>`;

export const css_5_2_1 =
`@font-face {
  font-family: 'MyCustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}`;

export const css_5_2_2 =
`body {
  font-family: 'MyCustomFont', sans-serif;
}`;

export const css_5_2_3 =
`@font-face {
  font-family: 'MyCustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}`;

export const css_5_3_1 =
`h1 {
  font-size: 3em; /* Relative to the parent element */
}

p {
  font-size: 1.2rem; /* Relative to the root font size */
}`;

export const css_5_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Relative Unit Example</title>
  <style>
    h1 {
      font-size: 3em;
    }
    
    p {
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with a font size relative to its parent element.</p>
  <p>Another paragraph with a font size relative to the root font size.</p>
</body>
</html>`;

export const css_5_3_2 =
`h1 {
  font-size: 3em;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5em;
  }
}`;

export const css_5_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Media Query Example</title>
  <style>
    h1 {
      font-size: 3em;
    }
    
    @media (max-width: 768px) {
      h1 {
        font-size: 2em;
      }
    }
    
    @media (max-width: 480px) {
      h1 {
        font-size: 1.5em;
      }
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
</body>
</html>`;

export const css_5_3_3 =
`h1 {
  font-size: calc(2rem + 2vw);
}`;

export const css_5_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Fluid Typography Example</title>
  <style>
    h1 {
      font-size: calc(2rem + 2vw);
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph.</p>
</body>
</html>`;

export const css_5_3_4 =
`p {
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: 0.02em;
}`;

export const css_5_3_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Line Height and Letter Spacing Example</title>
  <style>
    p {
      font-size: 1.2rem;
      line-height: 1.5;
      letter-spacing: 0.02em;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with custom font size, line height, and letter spacing.</p>
  <p>Another paragraph with the same custom styles applied.</p>
</body>
</html>`;

export const css_5_3_5 =
`body {
  font-family: 'Roboto', Arial, sans-serif;
}

@media (max-width: 768px) {
  body {
    font-family: 'Open Sans', Arial, sans-serif;
  }
}`;

export const css_5_3_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Responsive Font Family Example</title>
  <style>
    body {
      font-family: 'Roboto', Arial, sans-serif;
    }
    
    @media (max-width: 768px) {
      body {
        font-family: 'Open Sans', Arial, sans-serif;
      }
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with a custom font family.</p>
  <p>Another paragraph with a custom font family.</p>
</body>
</html>`;

export const css_6_1_1 =
`color: red;
background-color: skyblue;`;

export const css_6_1_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Named Color Example</title>
  <style>
    body {
      color: red;
      background-color: skyblue;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with custom text and background color.</p>
</body>
</html>`;

export const css_6_1_2 =
`color: #FF0000;
background-color: #00FF00;`;

export const css_6_1_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Hexadecimal Color Example</title>
  <style>
    body {
      color: #FF0000;
      background-color: #00FF00;
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with custom text and background color.</p>
</body>
</html>`;

export const css_6_1_3 =
`color: rgb(255, 0, 0);`;

export const css_6_1_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>RGB Color Example</title>
  <style>
    body {
      color: rgb(255, 0, 0);
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with custom text color.</p>
</body>
</html>`;

export const css_6_1_4 =
`color: rgba(255, 0, 0, 0.5);`;

export const css_6_1_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>RGBA Color Example</title>
  <style>
    body {
      color: rgba(255, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with custom text color.</p>
</body>
</html>`;

export const css_6_1_5 =
`color: hsl(0, 100%, 50%);
background-color: hsla(120, 100%, 50%, 0.7);`;

export const css_6_1_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>HSL and HSLA Color Example</title>
  <style>
    body {
      color: hsl(0, 100%, 50%);
      background-color: hsla(120, 100%, 50%, 0.7);
    }
  </style>
</head>
<body>
  <h1>Welcome to my Website</h1>
  <p>This is an example paragraph with custom text and background color.</p>
</body>
</html>`;

export const css_6_1_6 =
`color: rgb(255, 0, 0);`;

export const css_6_1_7 =
`background-color: #00FF00;`;

export const css_6_1_8 =
`border-color: red;`;

export const css_6_1_8_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Border Color Example</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`;

export const css_6_1_9 =
`outline-color: hsl(240, 100%, 50%);`;

export const css_6_1_9_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Outline Color Example</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      border: 2px solid black;
      outline: 2px solid hsl(240, 100%, 50%);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`;

export const css_6_1_10 =
`box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`;

export const css_6_1_10_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Box Shadow Example</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`;

export const css_6_2_1 =
`div {
  background-image: url("path/to/image.jpg");
}`;

export const css_6_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Background Image example</title>
  <style>
    div {
      background-image: url("assets/images/background.jpg");
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_2_2 =
`div {
  background-repeat: no-repeat;
}`;

export const css_6_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Background Image example</title>
  <style>
    div {
      background-image: url("assets/images/background.jpg");
      background-repeat: no-repeat;
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_2_3 =
`div {
  background-size: cover;
}`;

export const css_6_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Background Image example</title>
  <style>
    div {
      background-image: url("assets/images/background.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_2_4 =
`div {
  background-position: center;
}`;

export const css_6_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Background Image example</title>
  <style>
    div {
      background-image: url("assets/images/background.jpg");
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center;
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_2_5 =
`div {
  background-image: linear-gradient(to right, red, blue);
}`;

export const css_6_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Linear Gradient example</title>
  <style>
    div {
      background-image: linear-gradient(to right, red, blue);
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`

export const css_6_2_6 =
`div {
  background-image: radial-gradient(circle, red, blue);
}`;

export const css_6_2_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Radial Gradient example</title>
  <style>
    div {
      background-image: radial-gradient(circle, red, blue);
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_2_7 =
`div {
  background-image: repeating-linear-gradient(to right, red, blue 50%);
}`;

export const css_6_2_7_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Repeating Linear Gradient example</title>
  <style>
    div {
      background-image: repeating-linear-gradient(to right, red, blue 50%);
      width: 300px;
      height: 200px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_3_1 =
`div {
  background-color: rgba(255, 0, 0, 0.5); /* Red color with 50% transparency */
}`;

export const css_6_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>RGBA Color Transparency Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: rgba(255, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_3_2 =
`div {
  background-color: hsla(0, 100%, 50%, 0.5); /* Red color with 50% transparency */
}`;

export const css_6_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>HSLA Color Transparency Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: hsla(0, 100%, 50%, 0.5);
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_3_3 =
`div {
  opacity: 0.5; /* 50% transparency */
}`;

export const css_6_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Opacity Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_6_3_4 =
`div {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

div:hover {
  opacity: 1;
}`;

export const css_6_3_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Transition Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    
    div:hover {
      opacity: 1;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_7_1_1 =
`div {
  transition-property: background-color, opacity;
}`;

export const css_7_1_2 =
`div {
  transition-duration: 0.5s;
}`;

export const css_7_1_3 =
`div {
  transition-timing-function: ease-in-out;
}`;

export const css_7_1_4 =
`div {
  transition-delay: 0.2s;
}`;

export const css_7_1_5 =
`div {
  transition-property: background-color, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.2s;
}`;

export const css_7_1_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Transition Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      opacity: 1;
      transition-property: background-color, opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
      transition-delay: 0.2s;
    }
    
    div:hover {
      background-color: coral;
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_7_2_1 =
`@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}`;

export const css_7_2_2 =
`@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}`;

export const css_7_2_3 =
`div {
  animation-name: slide-in;
}`;

export const css_7_2_4 =
`div {
  animation-duration: 1s;
}`;

export const css_7_2_5 =
`div {
  animation-timing-function: ease-in-out;
}`;

export const css_7_2_6 =
`div {
  animation-delay: 0.5s;
}`;

export const css_7_2_7 =
`div {
  animation-iteration-count: 3;
}`;

export const css_7_2_8 =
`div {
  animation-fill-mode: forwards;
}`;

export const css_7_2_9 =
`div {
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 3;
  animation-fill-mode: forwards;
}`;

export const css_7_2_9_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Animation Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      animation-name: slide-in;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-delay: 0.5s;
      animation-iteration-count: 3;
      animation-fill-mode: forwards;
    }
    
    @keyframes slide-in {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_7_3_1 =
`div {
  transition: transform 0.3s ease-in-out;
}

div:hover {
  transform: scale(1.2);
}`;

export const css_7_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Animation Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      transition: transform 0.3s ease-in-out;
    }
    
    div:hover {
      transform: scale(1.2);
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`

export const css_7_3_2 =
`@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

div {
  animation: bounce 1s infinite;
}`;

export const css_7_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Animation Example</title>
  <style>
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0);
      }
    }

    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      animation: bounce 1s infinite;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_7_3_3 =
`div {
  transition: transform 0.3s ease-in-out;
}

div:hover {
  transform: rotate(45deg) scale(1.2);
}`;

export const css_7_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Animation Example</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: skyblue;
      transition: transform 0.3s ease-in-out;
    }
    
    div:hover {
      transform: rotate(45deg) scale(1.2);
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`;

export const css_7_3_4 =
`button {
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #ff0000;
  color: #ffffff;
}`;

export const css_7_3_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>CSS Animation Example</title>
  <style>
    button {
      padding: 10px 20px;
      background-color: #00ff00;
      color: #000000;
      border: none;
      transition: background-color 0.3s ease-in-out;
    }
    
    button:hover {
      background-color: #ff0000;
      color: #ffffff;
    }
  </style>
</head>
<body>
  <button>Hover Me</button>
</body>
</html>`;

export const css_7_3_5 =
`const element = document.querySelector('.my-element');
element.addEventListener('click', () => {
  element.classList.toggle('animate');
});`;

export const css_7_3_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Animation Example</title>
  <style>
    .my-element {
      width: 200px;
      height: 200px;
      background-color: skyblue;
    }
    
    .animate {
      animation: my-animation 1s infinite;
    }
    
    @keyframes my-animation {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(50px);
      }
      100% {
        transform: translateX(0);
      }
    }
  </style>
</head>
<body>
  <div class="my-element"></div>

  <script>
    const element = document.querySelector('.my-element');
    element.addEventListener('click', () => {
      element.classList.toggle('animate');
    });
  </script>
</body>
</html>`;

export const css_8_2_1 =
`@media mediaType and (mediaFeature: value) {
  /* CSS rules to apply for the specified media type and feature */
}`;

export const css_8_2_2 =
`@media screen and (max-width: 768px) {
  /* Styles applied for screens with a maximum width of 768px */
}`;

export const css_8_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Media Query Example</title>
  <style>
    /* Styles for screens larger than 768px */
    .container {
      width: 800px;
      height: 200px;
      background-color: skyblue;
    }

    /* Media query for screens with a maximum width of 768px */
    @media screen and (max-width: 768px) {
      .container {
        width: 100%;
        height: 150px;
        background-color: coral;
      }
    }
  </style>
</head>
<body>
  <div class="container"></div>
</body>
</html>`;

export const css_8_2_3 =
`@media screen and (orientation: landscape) {
  /* Styles applied for screens in landscape orientation */
}`;

export const css_8_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Media Query Example</title>
  <style>
    /* Styles for screens in portrait orientation */
    .container {
      width: 300px;
      height: 400px;
      background-color: skyblue;
    }

    /* Media query for screens in landscape orientation */
    @media screen and (orientation: landscape) {
      .container {
        width: 500px;
        height: 300px;
        background-color: coral;
      }
    }
  </style>
</head>
<body>
  <div class="container"></div>
</body>
</html>`;

export const css_8_2_4 =
`@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles applied for screens with a width between 768px and 1024px */
}`;

export const css_8_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Media Query Example</title>
  <style>
    /* Styles for screens larger than 1024px */
    .container {
      width: 800px;
      height: 200px;
      background-color: skyblue;
    }

    /* Media query for screens with a width between 768px and 1024px */
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      .container {
        width: 600px;
        height: 150px;
        background-color: coral;
      }
    }
  </style>
</head>
<body>
  <div class="container"></div>
</body>
</html>`;

export const css_8_2_5 =
`@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Styles applied for high-resolution displays */
}`;

export const css_8_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Media Query Example</title>
  <style>
    /* Styles for regular displays */
    .container {
      width: 300px;
      height: 200px;
      background-color: skyblue;
    }

    /* Media query for high-resolution displays */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      .container {
        width: 600px;
        height: 400px;
        background-color: coral;
      }
    }
  </style>
</head>
<body>
  <div class="container"></div>
</body>
</html>`;

export const css_8_3_1 =
`.container {
  width: 100%;
}

.column {
  width: 50%;
  float: left;
}`;

export const css_8_3_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Fluid Layout Example</title>
  <style>
  .container {
    width: 100%;
    overflow: hidden;
  }
  
  .column {
    width: 50%;
    float: left;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid black;
  }
  </style>
</head>
<body>
  <div class="container">
    <div class="column">Column 1</div>
    <div class="column">Column 2</div>
  </div>
</body>
</html>`;

export const css_8_3_2 =
`.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 80%;
  }
}`;

export const css_8_3_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Mobile-First Approach Example</title>
  <style>
    .container {
      width: 100%;
      background-color: skyblue;
      padding: 20px;
      box-sizing: border-box;
    }
    
    @media (min-width: 768px) {
      .container {
        width: 80%;
        background-color: coral;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello, World!</h1>
    <p>This is an example container.</p>
  </div>
</body>
</html>`;

export const css_8_3_3 =
`.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1 0 300px;
}`;

export const css_8_3_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Example</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
    }
    
    .column {
      flex: 1 0 300px;
      padding: 20px;
      border: 1px solid black;
      background-color: skyblue;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="column">Column 1</div>
    <div class="column">Column 2</div>
    <div class="column">Column 3</div>
    <div class="column">Column 4</div>
  </div>
</body>
</html>`;

export const css_8_3_4 =
`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}`;

export const css_8_3_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Grid Layout Example</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 10px;
    }
    
    .item {
      background-color: skyblue;
      padding: 20px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>
</body>
</html>`;

export const css_8_3_5 =
`<picture>
  <source srcset="image-large.jpg" media="(min-width: 768px)">
  <source srcset="image-medium.jpg" media="(min-width: 480px)">
  <img src="image-small.jpg" alt="Responsive Image">
</picture>`;

export const css_8_3_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Responsive Image Example</title>
  <style>
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <picture>
    <source srcset="assets/images/big_car.png" media="(min-width: 768px)">
    <source srcset="assets/images/medium_car.png" media="(min-width: 480px)">
    <img src="assets/images/small_car.png" alt="Responsive Image">
  </picture>
</body>
</html>`;

export const css_8_3_6 =
`p {
  font-size: 16px;
}

@media (min-width: 768px) {
  p {
    font-size: 18px;
  }
}`;

export const css_8_3_6_1 =
`<html>
<head>
  <title>Responsive Typography Example</title>
  <style>
    p {
      font-size: 16px;
    }
    
    @media (min-width: 768px) {
      p {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <p>This is a sample paragraph.</p>
</body>
</html>`;
