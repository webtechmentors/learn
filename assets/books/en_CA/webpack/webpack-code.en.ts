export const webpack_2_1_1 =
`mkdir my-webpack-project
cd my-webpack-project`;

export const webpack_2_1_2 =
`npm init -y`;

export const webpack_2_1_3 =
`npm install --save-dev webpack webpack-cli`;

export const webpack_2_1_4 =
`const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle
  },
  mode: 'development' // Can be 'development', 'production', or 'none'
};`;

export const webpack_2_1_5 =
`"scripts": {
  "build": "webpack"
}`;

export const webpack_2_1_6 =
`// src/index.js
console.log('Hello, Webpack!');`;

export const webpack_2_1_7 =
`npm run build`;

export const webpack_2_1_8 =
`<!-- dist/index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Webpack Example</title>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>`;

export const webpack_2_2_1 =
`module.exports = {
  entry: './src/index.js' // Single entry point
  // or for multiple entry points
  entry: {
    app: './src/app.js',
    admin: './src/admin.js'
  }
};`;

export const webpack_2_2_2 =
`const path = require('path');

module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output filename
  }
};`;

export const webpack_2_2_3 =
`output: {
  filename: '[name].bundle.js' // Will create app.bundle.js and admin.bundle.js
}`;

export const webpack_2_2_4 =
`module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/, // A regex that tests what kind of files to run through this loader
        use: [
          'style-loader', // Adds CSS to the DOM by injecting a \`<style>\` tag
          'css-loader' // Interprets \`@import\` and \`url()\` like \`import/require()\` and will resolve them
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ to backwards compatible JavaScript
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      // Add more loaders as needed
    ]
  }
};`;

export const webpack_2_2_5 =
`const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Generates an HTML file for your bundle
    })
    // Add more plugins as needed
  ]
};`;

export const webpack_2_2_6 =
`module.exports = {
  // ...
  mode: 'development' // or 'production'
};`;

export const webpack_2_2_7 =
`module.exports = {
  // ...
  devServer: {
    contentBase: './dist',
    open: true // Open the browser after server has been started
  }
};`;

export const webpack_2_2_8 =
`module.exports = {
  // ...
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve certain extensions
    alias: {
      // Create aliases
      Components: path.resolve(__dirname, 'src/components/')
    }
  }
};`;

export const webpack_3_1_1 =
`module.exports = {
  entry: './path/to/my/entry/file.js'
};`;

export const webpack_3_1_2 =
`module.exports = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};`;

export const webpack_3_1_3 =
`module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};`;

export const webpack_3_1_4 =
`module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['lodash', 'jquery']
  }
};`;

export const webpack_3_1_5 =
`function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  });
}

getComponent().then(component => {
  document.body.appendChild(component);
});`;

export const webpack_3_2_1 =
`const path = require('path');

module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist'), // Absolute path to the directory where output should be placed
    filename: 'bundle.js' // Name of the single output file
  }
};`;

export const webpack_3_2_2 =
`output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].bundle.js' // '[name]' is replaced by the name of the entry point
}`;

export const webpack_3_2_3 =
`entry: {
  app: './src/app.js',
  admin: './src/admin.js'
}`;

export const webpack_3_2_4 =
`output: {
  publicPath: '/assets/', // It will be used to generate URLs to e.g. images
}`;

export const webpack_3_2_5 =
`output: {
  chunkFilename: '[name].chunk.js'
}`;

export const webpack_3_2_6 =
`output: {
  library: 'MyLibrary',
  libraryTarget: 'umd' // Supports CommonJS, AMD and as a variable in the root
}`;

export const webpack_3_2_7 =
`output: {
  pathinfo: true
}`;

export const webpack_3_2_8 =
`output: {
  filename: process.env.NODE_ENV === 'development' ? '[name].js' : '[name].[contenthash].js'
}`;

export const webpack_3_3_1 =
`module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};`;

export const webpack_3_4_1 =
`const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ... other configuration ...
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/template.html'
    })
  ]
};`;

export const webpack_4_1_1 =
`npm install --save-dev css-loader style-loader`;

export const webpack_4_1_2 =
`npm install --save-dev babel-loader @babel/core @babel/preset-env`;

export const webpack_4_1_3 =
`npm install --save-dev sass-loader sass`;

export const webpack_4_1_4 =
`npm install --save-dev file-loader`;

export const webpack_4_1_5 =
`npm install --save-dev url-loader`;

export const webpack_4_1_6 =
`module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // Matches all .css files
        use: [
          'style-loader', // 2. Inject styles into DOM
          'css-loader' // 1. Turns css into commonjs
        ]
      },
      {
        test: /\.js$/, // Matches all .js files
        exclude: /node_modules/, // Excludes the node_modules directory
        use: {
          loader: 'babel-loader', // Transpile ES6+ to ES5
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Matches image files
        use: [
          {
            loader: 'file-loader', // Outputs image files to output directory
            options: {
              name: '[name].[ext]', // Keeps the original file name and extension
              outputPath: 'images/' // Puts the image files in an "images" directory
            }
          }
        ]
      },
      // ...more rules for other file types like .scss, .ts, etc.
    ]
  },
  // ...other config settings
};`;

export const webpack_4_1_7 =
`npm run build`;

export const webpack_4_2_1 =
`npm install --save-dev css-loader style-loader sass-loader sass`;

export const webpack_4_2_2 =
`module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 2. After css-loader, takes the CSS and injects it into the DOM
          'css-loader'    // 1. First, turns CSS into commonjs modules
        ]
      },
      // ... (other rules)
    ]
  },
  // ...
};`;

export const webpack_4_2_3 =
`module.exports = {
  // ...
  module: {
    rules: [
      // ... (existing rules)
      {
        test: /\.scss$/,
        use: [
          'style-loader',   // 3. Injects styles into the DOM
          'css-loader',     // 2. Turns CSS into commonjs
          'sass-loader'     // 1. Turns SASS into CSS
        ]
      }
    ]
  },
  // ...
};`;

export const webpack_4_2_4 =
`import './styles.css';`;

export const webpack_4_2_5 =
`import './styles.scss';`;

export const webpack_4_2_6 =
`npm install --save-dev mini-css-extract-plugin`;

export const webpack_4_2_7 =
`const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 2. Extract CSS into files
          'css-loader'                 // 1. Turns CSS into commonjs
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract CSS into files
          'css-loader',                // 2. Turns CSS into commonjs
          'sass-loader'                // 1. Turns SASS into CSS
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  // ...
};`;

export const webpack_4_3_1 =
`npm install --save-dev babel-loader @babel/core @babel/preset-env`;

export const webpack_4_3_2 =
`npm install --save core-js regenerator-runtime`;

export const webpack_4_3_3 =
`{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage", // or "entry"
        "corejs": 3 // specify the version of core-js
      }
    ]
  ]
}`;

export const webpack_4_3_4 =
`module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/, // A regex that tells Webpack to use this loader for all .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Specify the loader
          options: {
            presets: ['@babel/preset-env'] // Use the env preset
          }
        }
      },
      // ... other rules for other types of files
    ]
  },
  // ...
};`;

export const webpack_4_3_5 =
`npm run build`;

export const webpack_4_3_6 =
`import "core-js/stable";
import "regenerator-runtime/runtime";`;

export const webpack_4_4_1 =
`npm install --save-dev file-loader url-loader`;

export const webpack_4_4_2 =
`module.exports = {
  // ...
  module: {
    rules: [
      // ... (other rules)
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
    ]
  },
  // ...
};`;

export const webpack_4_4_3 =
`{
  test: /\.(png|svg|jpe?g|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192, // Images smaller than 8KB will be inlined as Data URLs
        name: 'images/[name].[ext]'
      }
    }
  ]
}`;

export const webpack_4_4_4 =
`{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
}`;

export const webpack_4_4_5 =
`import myImage from './image.png';
import myFont from './font.woff2';

// You can then use these imports in your code, for example as a src for an image or in a CSS rule.`;

export const webpack_4_4_6 =
`.my-element {
  background-image: url('./image.png');
}

@font-face {
  font-family: 'MyFont';
  src: url('./font.woff2') format('woff2');
}`;

export const webpack_4_4_7 =
`npm run build`;

export const webpack_5_1_1 =
`npm install --save-dev html-webpack-plugin`;

export const webpack_5_1_2 =
`const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/template.html' // Loads a custom template
    })
  ]
};`;

export const webpack_5_1_3 =
`npm install --save-dev clean-webpack-plugin`;

export const webpack_5_1_4 =
`const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new CleanWebpackPlugin(),
    // ... other plugins
  ]
};`;

export const webpack_5_1_5 =
`npm install --save-dev mini-css-extract-plugin`;

export const webpack_5_1_6 =
`const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      // ... other rules
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};`;

export const webpack_5_1_7 =
`const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};`;

export const webpack_5_1_8 =
`npm install --save-dev copy-webpack-plugin`;

export const webpack_5_1_9 =
`const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'source', to: 'dest' },
        { from: 'other', to: 'public' },
      ],
    }),
    // ... other plugins
  ]
};`;

export const webpack_5_1_10 =
`const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};`;

export const webpack_5_1_11 =
`const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG'])
  ]
};`;

export const webpack_5_2_1 =
`npm install terser-webpack-plugin --save-dev`;

export const webpack_5_2_2 =
`const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // ...
};`;

export const webpack_5_2_3 =
`npm install css-minimizer-webpack-plugin --save-dev`;

export const webpack_5_2_4 =
`const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      // Add other minimizers here
    ],
  },
  // ...
};`;

export const webpack_5_2_5 =
`const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  // ...
};`;

export const webpack_5_2_6 =
`const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      // ...
    }),
  ],
  // ...
};`;

export const webpack_5_2_7 =
`const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  // ...
};`;

export const webpack_5_2_8 =
`npm install compression-webpack-plugin --save-dev`;

export const webpack_5_2_9 =
`const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
  // ...
};`;

export const webpack_5_2_10 =
`npm install --save-dev webpack-bundle-analyzer`;

export const webpack_5_2_11 =
`const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  // ...
};`;

export const webpack_5_3_1 =
`npm install --save-dev html-webpack-plugin`;

export const webpack_5_3_2 =
`const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App', // The title to use for the generated HTML document
      filename: 'index.html', // The name of the output file
      template: 'src/template.html', // Path to HTML template
      inject: true // All assets will be injected into the template
    })
  ],
  // ...
};`;

export const webpack_5_3_3 =
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <!-- The bundled assets will be injected here -->
  </body>
</html>`;

export const webpack_5_3_4 =
`npm run build`;

export const webpack_5_4_1 =
`npm install --save-dev webpack-bundle-analyzer`;

export const webpack_5_4_2 =
`const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // ...
  plugins: [
    new BundleAnalyzerPlugin()
  ],
};`;

export const webpack_5_4_3 =
`npm install --save-dev webpack-visualizer-plugin`;

export const webpack_5_4_4 =
`const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  // ... other config settings ...
  plugins: [
    new Visualizer({
      // Options (optional)
      filename: './statistics.html'
    })
  ]
};`;

export const webpack_6_1_1 =
`// Exporting from a module
export function myFunction() { /*...*/ }

// Importing in another module
import { myFunction } from './myModule';`;

export const webpack_6_1_2 =
`resolve: {
  extensions: ['.js', '.jsx'], // Automatically resolve certain extensions
  alias: {
    Utilities: path.resolve(__dirname, 'src/utilities/'),
    Templates: path.resolve(__dirname, 'src/templates/')
  }
}`;

export const webpack_6_1_3 =
`module: {
  rules: [
    { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    // Other loaders for different file types
  ]
}`;

export const webpack_6_1_4 =
`import(/* webpackChunkName: "my-chunk-name" */ './my-module').then(({ myModule }) => {
  // Use myModule
});`;

export const webpack_6_2_1 =
`const path = require('path');

module.exports = {
  // ... other configuration settings ...
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Images: path.resolve(__dirname, 'src/images/')
      // Define other aliases as needed
    }
  }
};`;

export const webpack_6_3_1 =
`resolve: {
  extensions: ['.js', '.jsx', '.json']
}`;

export const webpack_6_3_2 =
`resolve: {
  alias: {
    Components: path.resolve(__dirname, 'src/components/'),
    // more aliases...
  }
}`;

export const webpack_6_3_3 =
`resolve: {
  modules: [path.resolve(__dirname, 'src'), 'node_modules']
}`;

export const webpack_7_1_1 =
`// webpack.config.common.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      // Loaders
    ]
  },
  plugins: [
    // Common plugins
  ]
  // Other common settings
};`;

export const webpack_7_1_2 =
`npm install --save-dev webpack-merge`;

export const webpack_7_1_3 =
`// webpack.config.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // Other development-specific settings
});

// webpack.config.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  // Plugins and settings for optimization, minification, etc.
});`;

export const webpack_7_1_4 =
`"scripts": {
  "start": "webpack serve --config webpack.config.dev.js",
  "build": "webpack --config webpack.config.prod.js"
}`;

export const webpack_7_1_5 =
`new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
});`;

export const webpack_7_1_6 =
`const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  // ...
  plugins: [
    // ...
    isProduction ? new MiniCssExtractPlugin() : new SomeDevelopmentOnlyPlugin(),
    // ...
  ].filter(Boolean),
  // ...
};`;

export const webpack_7_2_1 =
`// webpack.config.dev.js
module.exports = {
  // ...
  devtool: 'eval-source-map',
  // ...
};`;

export const webpack_7_2_2 =
`// webpack.config.prod.js
module.exports = {
  // ...
  devtool: 'source-map',
  // ...
};`;

export const webpack_7_2_3 =
`npm install --save-dev webpack-dev-server`;

export const webpack_7_2_4 =
`// webpack.config.dev.js
module.exports = {
  // ...
  devServer: {
    contentBase: './dist',
    hot: true, // Enable HMR
    open: true, // Open the browser after server has been started
    // Other options like port, proxy, etc.
  },
  // ...
};`;

export const webpack_7_2_5 =
`"scripts": {
  "start": "webpack serve --config webpack.config.dev.js",
  // ...
}`;

export const webpack_7_2_6 =
`const webpack = require('webpack');

module.exports = {
  // ... other configurations ...

  devServer: {
    hot: true,
    // ... other devServer configurations ...
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // ... other plugins ...
  ],
};`;

export const webpack_7_3_1 =
`// In webpack.config.prod.js
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // ...
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  // ...
};`;

export const webpack_7_3_2 =
`const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // ...
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // ...
    ],
  },
  // ...
};`;

export const webpack_7_3_3 =
`module.exports = {
  // ...
  mode: 'production',
  // ...
};`;

export const webpack_7_3_4 =
`module.exports = {
  // ...
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // ...
};`;

export const webpack_7_3_5 =
`const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new CompressionPlugin({
      // Compression options
    }),
  ],
  // ...
};`;

export const webpack_7_3_6 =
`module.exports = {
  // ...
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // ...
};`;

export const webpack_7_3_7 =
`module.exports = {
  // ...
  optimization: {
    runtimeChunk: 'single',
  },
  // ...
};`;

export const webpack_7_3_8 =
`const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  // ...
};`;

// export const webpack_2_1_3 =
// ``;