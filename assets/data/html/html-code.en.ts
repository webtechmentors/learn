export const html_1_3_1 =
`<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>`

export const html_1_3_2 =
`<body>
  <h1>Welcome to my Website</h1>
  <p>This is my first web page!</p>
  <img src="assets/images/web_book.png" alt="My image">
</body>`;

export const html_1_3_3 =
`<img src="assets/images/web_book.png" alt="My image">`;

export const html_1_3_4 =
`<!-- This is a comment -->`;

export const html_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  
  <h4>About Me</h4>
  <p>
    Hi, I'm John Doe, a web developer from Sunny City. I love creating awesome websites and learning new technologies.
  </p>
  
  <h4>My Skills</h4>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
  
  <h4>Contact Me</h4>
  <p>
    You can reach me by email at <a href="mailto:myname@example.com">john@example.com</a>.
  </p>
  
  <h4>My Favorite Books</h4>
  <ol>
    <li>The Great Gatsby</li>
    <li>To Kill a Mockingbird</li>
    <li>1984</li>
  </ol>
  
  <div>
    <h4>Important Announcement</h4>
    <span>Stay tuned for exciting updates!</span>
  </div>
</body>
</html>`;

export const html_2_2_1 =
`<!DOCTYPE html>`;

export const html_2_2_2 =
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`;

export const html_2_2_3 =
`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`;

export const html_2_3_1 =
`<head>
  <title>My Webpage</title>

  <!-- Meta Tags -->
  <meta charset="UTF-8">
  <meta name="description" content="This is a sample webpage.">

  <!-- External Stylesheet -->
  <link rel="stylesheet" href="https://www.acompany.com/styles.css">

  <!-- Internal Styles -->
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
    
    h1 {
      color: #333;
    }
  </style>

  <!-- External JavaScript -->
  <script src="https://www.acompany.com/script.js"></script>

  <!-- Internal JavaScript -->
  <script>
    function greet() {
      alert('Hello, world!');
    }
  </script>
</head>`;

export const html_2_3_2 =
`<body>
  <section>
    <h2>My Services</h2>
    <ul>
      <li>Web Design</li>
      <li>Front-end Development</li>
      <li>Responsive Design</li>
    </ul>
  </section>
</body>`;

export const html_2_5_1 =
`<div class="container"></div>`;

export const html_2_5_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
  <style>
    .container {
      width: 100px;
      height: 50px;
      border: solid 2px blue;
    }
  </style>
</head>
<body>
  <div class="container"></div>
</body>
</html>`;

export const html_2_5_2 =
`<h1 id="heading"></h1>`;

export const html_2_5_2_1 =
`const elem = document.getElementById('heading');`;

export const html_2_5_3 =
`<p style="color: red;">This is a paragraph.</p>`;

export const html_2_5_4 =
`<img src="assets/images/cute_cat.jpg">`;

export const html_2_5_5 =
`<a href="assets/webpages/hello.html">Click to load hello.html page</a>`;

export const html_2_5_6 =
`<img src="image.jpg" alt="Description of the image">`;

export const html_2_5_7 =
`<img src="assets/images/cute_cat.jpg" width="300" height="200">`;

export const html_2_5_8 =
`<input type="text" disabled>`;

export const html_2_5_9 =
`<input type="text" required>`;

export const html_2_5_9_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <form action="">
    <label for="companyName">Company Name:</label>
    <input type="text" id="companyName" name="companyName" required>
    <input type="submit">
  </form>
</body>
</html>`;

export const html_2_5_10 =
`<input type="text" placeholder="Enter your name">`;

export const html_3_1_1 =
`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;

export const html_3_2_1 =
`<p>This is a paragraph of text.</p>`;

export const html_3_2_2 =
`<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>`;

export const html_3_3_1 =
`<p>This is a <b>bold</b> text.</p>
<p>This is a <strong>strong</strong> text.</p>
<p>This is an <i>italic</i> text.</p>
<p>This is an <em>emphasized</em> text.</p>
<p>This is a <del>deleted</del> text.</p>
<p>This is a <sup>superscript</sup> and this is a <sub>subscript</sub> text.</p>
<p>This is a <mark>highlighted</mark> text.</p>
<p>This is a <small>smaller</small> text.</p>
<p>This is a <code>code</code> text.</p>
<blockquote>
  This is a block quote.
</blockquote>
<pre>
  This is a preformatted text.
  It preserves whitespace and line breaks.
  <code>
    function greet() {
      console.log('Hello, world!');
    }
  </code>
</pre>`;

export const html_3_4_1 =
`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;

export const html_3_4_2 =
`<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Nested Item 1</li>
      <li>Nested Item 2</li>
    </ul>
  </li>
  <li>Item 3</li>
</ul>`;

export const html_3_4_3 =
`<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>`;

export const html_3_4_4 =
`<ol>
  <li>Item 1</li>
  <li>Item 2
    <ol>
      <li>Nested Item 1</li>
      <li>Nested Item 2</li>
    </ol>
  </li>
  <li>Item 3</li>
</ol>`;

export const html_4_1_1 =
`<a href="https://www.example.com">Click here to visit Example.com</a>`;

export const html_4_1_2 =
`<a href="about.html">About Us</a>`;

export const html_4_1_3 =
`<a href="pages/contact.html">Contact Us</a>`;

export const html_4_1_4 =
`<a href="#section-1">Go to Section 1</a>

<h2 id="section-1">Section 1</h2>
<p>This is the content of section 1.</p>`;

export const html_4_2_1 =
`<head>
  <link rel="stylesheet" href="https://www.example.com/styles.css">
</head>`;

export const html_4_2_2 =
`<head>
  <script src="https://www.example.com/script.js"></script>
</head>`;

export const html_4_2_3 =
`<body>
  <img src="https://example.com/image.jpg" alt="A beautiful image">
</body>`;

export const html_4_3_1 =
`<img src="assets/images/cute_cat.jpg" alt="A cute cat">`;

export const html_4_3_1_1 =
`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>Here's a picture:</p>
    <img src="assets/images/cute_cat.jpg" alt="A cute cat">
  </body>
</html>`;

export const html_4_3_2 =
`<img src="assets/images/cute_cat.jpg" alt="A cute cat" width="500px" height="200px" title="A large image">`;

export const html_4_3_2_1 =
`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>Here's a picture:</p>
    <img src="assets/images/cute_cat.jpg" alt="A cute cat" width="500px" height="200px" title="A large image">
  </body>
</html>`;

export const html_5_1_1 =
`<table border="1">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
</table>
`;

export const html_5_1_2 =
`<table border="1">
  <tr>
    <td rowspan="2">Row 1, Column 1<br>Spanning 2 rows</td>
    <td>Row 1, Column 2</td>
    <td>Row 1, Column 3</td>
  </tr>
  <tr>
    <td colspan="2">Row 2, Column 2 and 3<br>Spanning 2 columns</td>
  </tr>
  <tr>
    <td>Row 3, Column 1</td>
    <td>Row 3, Column 2</td>
    <td>Row 3, Column 3</td>
  </tr>
</table>
`;

export const html_5_2_1 =
`<table border="1">
  <thead>
    <tr>
      <th>Employee ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>John</td>
      <td>Doe</td>
      <td>HR</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Jane</td>
      <td>Smith</td>
      <td>IT</td>
    </tr>
  </tbody>
</table>`;

export const html_5_2_2 =
`<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>January</th>
      <td>$10,000</td>
      <td>$7,500</td>
    </tr>
    <tr>
      <th>February</th>
      <td>$12,500</td>
      <td>$8,200</td>
    </tr>
  </tbody>
</table>`;

export const html_5_2_3 =
`<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th id="sales-header">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="january-header">January</th>
      <td headers="sales-header january-header">$10,000</td>
    </tr>
    <tr>
      <th id="february-header">February</th>
      <td headers="sales-header february-header">$12,500</td>
    </tr>
  </tbody>
</table>`;

export const html_5_3_1 =
`<table border="1">
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>Product A</td>
    <td>$20.00</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Product B</td>
    <td>$15.00</td>
    <td>75</td>
  </tr>
</table>`;

export const html_5_4_1 =
`<table border="1">
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Month</th>
  </tr>
  <tr>
    <td rowspan="2">Product A</td>
    <td>$20.00</td>
    <td>50</td>
    <td>Last Month</td>
  </tr>
  <tr>
    <td>$15.00</td>
    <td>50</td>
    <td>This Month</td>
  </tr>
</table>
`;

export const html_5_4_2 =
`<table border="1">
  <tr>
    <th>Product</th>
    <th colspan="2">Sales Data</th>
  </tr>
  <tr>
    <td>Product A</td>
    <td>$20.00</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Product B</td>
    <td>$15.00</td>
    <td>75</td>
  </tr>
</table>
`;

export const html_5_4_3 =
`<table border="1">
  <tr>
    <th rowspan="2">Product</th>
    <th colspan="2">Sales Data</th>
  </tr>
  <tr>
    <td>Price</td>
    <td>Quantity</td>
  </tr>
  <tr>
    <td>Product A</td>
    <td>$20.00</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Product B</td>
    <td>$15.00</td>
    <td>75</td>
  </tr>
</table>
`;

export const html_6_1_1 =
`<p>This is an example for demo only.</p>

<form action="/submit-form" method="post" target="_blank">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  
  <input type="submit" value="Submit">
</form>`;

export const html_6_2_1 =
`<input type="text">
<textarea></textarea>`;

export const html_6_2_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <label>Single-line text input:</label>
  <br/>
  <input type="text" name="single-line">
  <br/>
  <label>Multi-line text input:</label>
  <br/>
  <textarea name="multi-line"></textarea>
</body>
</html>`;

export const html_6_2_2 =
`<input type="radio">`;

export const html_6_2_2_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h2>Select your favorite programming language:</h2>
  <label>
    <input type="radio" name="programming-language" value="javascript">
    JavaScript
  </label>
  <label>
    <input type="radio" name="programming-language" value="python">
    Python
  </label>
  <label>
    <input type="radio" name="programming-language" value="java">
    Java
  </label>
  <label>
    <input type="radio" name="programming-language" value="csharp">
    C#
  </label>
</body>
</html>`;

export const html_6_2_3 =
`<input type="checkbox">`;

export const html_6_2_3_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h2>Select your favorite fruits:</h2>
  <label>
    <input type="checkbox" name="fruit" value="apple">
    Apple
  </label>
  <label>
    <input type="checkbox" name="fruit" value="banana">
    Banana
  </label>
  <label>
    <input type="checkbox" name="fruit" value="orange">
    Orange
  </label>
  <label>
    <input type="checkbox" name="fruit" value="strawberry">
    Strawberry
  </label>
</body>
</html>`;

export const html_6_2_4 =
`<select>
  <option>Item 1</option>
  <option>Item 2</option>
</select>`;

export const html_6_2_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h2>Select your favorite color:</h2>
  <select name="color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
  </select>
</body>
</html>`;

export const html_6_2_5 =
`<input type="file">`;

export const html_6_2_5_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h2>Select a file:</h2>
  <input type="file" name="file-input">
</body>
</html>`;

export const html_6_2_6 =
`<button>Click</button>`;

export const html_6_2_6_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h2>Click the button:</h2>
  <button id="my-button" onclick="javascript:alert('Clicked')">Click Me</button>
</body>
</html>`;

export const html_6_3_1 =
`<input type="submit" value="Submit">`

export const html_6_3_2 =
`<form action="/submit-form" method="post" target="_blank">
<label for="name">Name:</label>
<input type="text" id="name" name="name">
<br>

<label for="email">Email:</label>
<input type="email" id="email" name="email">
<br>

<input type="submit" value="Submit">
</form>`;

export const html_7_1_1 =
`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic Tag Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to Semantic Tag Example Webpage</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget consequat ipsum, in consequat felis.</p>
    </section>

    <section>
      <h2>Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 My Webpage. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

export const html_7_1_2 =
`<audio src="audio_file.mp3" controls></audio>`;

export const html_7_1_3 =
`<video src="video_file.mp4" controls></video>`;

export const html_7_2_1 =
`<canvas id="myCanvas" width="500" height="500"></canvas>`;

export const html_7_2_2 =
`var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);`;

export const html_7_2_3 =
`<!DOCTYPE html>
<html>
<head>
  <title>Canvas Example</title>
</head>
<body>
  <canvas id="myCanvas" width="500" height="500"></canvas>
  <script>
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);
  </script>
</body>
</html>`;

export const html_7_2_4 =
`<svg width="500" height="500">
  <rect x="50" y="50" width="100" height="100" fill="red" />
  <circle cx="250" cy="250" r="50" fill="blue" />
  <text x="200" y="400" fill="green">Hello, world!</text>
</svg>`;

export const html_7_2_5 =
`<!DOCTYPE html>
<html>
<head>
  <title>SVG Example</title>
</head>
<body>
  <svg width="500" height="500">
    <rect x="50" y="50" width="100" height="100" fill="red" />
    <circle cx="250" cy="250" r="50" fill="blue" />
    <text x="200" y="400" fill="green">Hello, world!</text>
  </svg>
</body>
</html>`;

export const html_7_4_1 =
`<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Responsive Example</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    header {
      background-color: purple;
      color: #fff;
      text-align: center;
      padding: 10px;
    }

    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px;
    }

    section {
      flex-basis: 30%;
      background-color: #f0f0f0;
      border: 1px solid #ddd;
      padding: 10px;
      margin-bottom: 20px;
    }

    footer {
      background-color: purple;
      color: #fff;
      text-align: center;
      padding: 10px;
    }

    @media screen and (max-width: 768px) {
      main {
        justify-content: center;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Flexbox Responsive Example</h1>
  </header>
  <main>
    <section>
      <h2>Section 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
    <section>
      <h2>Section 2</h2>
      <p>Integer id elit non tellus pharetra blandit.</p>
    </section>
    <section>
      <h2>Section 3</h2>
      <p>Suspendisse potenti. Nam congue erat ut tincidunt fringilla.</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 Flexbox Responsive Example</p>
  </footer>
</body>
</html>`;
