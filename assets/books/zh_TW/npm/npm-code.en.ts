export const npm_1_1_1 =
`choco install nodejs`;

export const npm_1_1_2 =
`brew install node`;

export const npm_1_1_3 =
`sudo apt update`;

export const npm_1_1_4 =
`sudo apt install nodejs`;

export const npm_1_1_5 =
`sudo apt install npm`;

export const npm_1_1_6 =
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash`;

export const npm_1_1_7 =
`source ~/.bashrc`;

export const npm_1_1_8 =
`nvm install node`;

export const npm_1_1_9 =
`node -v`;

export const npm_1_1_10 =
`npm -v`;

export const npm_2_1_1 =
`mkdir my-new-project`;

export const npm_2_1_2 =
`cd my-new-project`;

export const npm_2_1_3 =
`npm init`;

export const npm_2_1_4 =
`npm init -y`;

export const npm_2_1_5 =
`{
  "name": "my-new-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}`;

export const npm_2_1_6 =
`touch index.js`;

export const npm_2_2_1 =
`"name": "my-project"`;

export const npm_2_2_2 =
`"version": "1.0.0"`;

export const npm_2_2_3 =
`"description": "A simple Node.js project"`;

export const npm_2_2_4 =
`"main": "index.js"`;

export const npm_2_2_5 =
`"author": "John Doe"`;

export const npm_2_2_6 =
`"author": {
  "name": "John Doe",
  "email": "john@example.com",
  "url": "http://example.com"
}`;

export const npm_2_2_7 =
`"license": "MIT"`;

export const npm_2_2_8 =
`"repository": {
  "type": "git",
  "url": "https://github.com/user/my-project.git"
}`;

export const npm_2_2_9 =
`"dependencies": {
  "express": "^4.17.1"
}`;

export const npm_2_2_10 =
`"devDependencies": {
  "mocha": "^9.1.0"
}`;

export const npm_2_2_11 =
`"peerDependencies": {
  "react": "^17.0.0"
}`;

export const npm_2_2_12 =
`"optionalDependencies": {
  "some-optional-package": "^1.0.0"
}`;

export const npm_2_2_13 =
`"scripts": {
  "start": "node index.js",
  "test": "mocha"
}`;

export const npm_2_2_14 =
`"engines": {
  "node": ">=14.0.0"
}`;

export const npm_2_2_15 =
`"private": true`;

export const npm_2_2_16 =
`"keywords": ["web", "express", "node"]`;

export const npm_2_2_17 =
`"homepage": "https://github.com/user/my-project#readme"`;

export const npm_2_2_18 =
`"bugs": {
  "url": "https://github.com/user/my-project/issues"
}`;

export const npm_2_2_19 =
`"bundledDependencies": ["some-package"]`;

export const npm_2_3_1 =
`npm install express`;

export const npm_2_3_2 =
`npm i express`;

export const npm_2_3_3 =
`"dependencies": {
  "express": "^4.17.1"
}`;

export const npm_2_3_4 =
`npm list express`;

export const npm_2_3_5 =
"const express = require('express'); \n\
const app = express(); \n\
const port = 3000; \n\
\n\
app.get('/', (req, res) => { \n\
  res.send('Hello, World!'); \n\
}); \n\
\n\
app.listen(port, () => { \n\
  console.log(`Server running at http://localhost:${port}/`); \n\
});";

export const npm_2_3_6 =
`node app.js`;

export const npm_3_1_1 =
`npm init [-y]`;

export const npm_3_1_2 =
`npm install`;

export const npm_3_1_3 =
`npm install express`;

export const npm_3_1_4 =
`npm install mocha --save-dev`;

export const npm_3_1_5 =
`npm uninstall express`;

export const npm_3_1_6 =
`npm update`;

export const npm_3_1_7 =
`npm outdated`;

export const npm_3_1_8 =
`npm ls`;

export const npm_3_1_9 =
`npm run start`;

export const npm_3_1_10 =
`npm test`;

export const npm_3_1_11 =
`npm install -g nodemon`;

export const npm_3_1_12 =
`npm list -g --depth=0`;

export const npm_3_1_13 =
`npm search express`;

export const npm_3_1_14 =
`npm cache clean --force`;

export const npm_3_1_15 =
`npm init react-app my-new-react-app`;

export const npm_3_1_16 =
`npm view lodash versions`;

export const npm_3_2_1 =
`npm install --help`;

export const npm_3_2_2 =
`npm -v`;

export const npm_3_2_3 =
`npm ls --json`;

export const npm_3_2_4 =
`npm install -g nodemon`;

export const npm_3_2_5 =
`npm install lodash`;

export const npm_3_2_6 =
`npm install mocha --save-dev`;

export const npm_3_2_7 =
`npm install lodash --no-save`;

export const npm_3_2_8 =
`npm install lodash --save-exact`;

export const npm_3_2_9 =
`npm uninstall -g nodemon`;

export const npm_3_2_10 =
`npm ls --depth=0`;

export const npm_3_2_11 =
`npm ls --prod`;

export const npm_3_2_12 =
`npm ls --dev`;

export const npm_3_2_13 =
`npm update -g`;

export const npm_3_2_14 =
`npm update --depth 2`;

export const npm_3_2_15 =
`npm run test --silent`;

export const npm_3_2_16 =
`npm cache clean --force`;

export const npm_4_1_1 =
`"dependencies": {
  "express": "^4.17.1",
  "mongoose": "^5.10.0"
}`;

export const npm_4_1_2 =
`"devDependencies": {
  "eslint": "^7.5.0",
  "mocha": "^8.1.1"
}`;

export const npm_4_1_3 =
`"peerDependencies": {
  "react": "^16.0.0"
}`;

export const npm_4_1_4 =
`"optionalDependencies": {
  "some-optional-package": "^1.0.0"
}`;

export const npm_4_1_5 =
`"bundledDependencies": [
  "some-package",
  "another-package"
]`;

export const npm_4_2_1 =
`my_project/
├── node_modules/
│   ├── express/
│   │   ├── package.json
│   │   └── ...
│   ├── lodash/
│   │   ├── package.json
│   │   └── ...
│   └── ...
├── package.json
└── ...`;

export const npm_5_1_1 =
`npm outdated`;

export const npm_5_1_2 =
`npm update`;

export const npm_5_1_3 =
`npm update package-name`;

export const npm_5_1_4 =
`npm install package-name@new-version`;

export const npm_5_1_5 =
`npm update -g package-name`;

export const npm_5_1_6 =
`npm install -g npm-check-updates`;

export const npm_5_1_7 =
`ncu`;

export const npm_5_1_8 =
`ncu -u`;

export const npm_5_1_9 =
`npm install`;

export const npm_5_2_1 =
`npm uninstall package-name`;

export const npm_5_2_2 =
`npm uninstall package-one package-two package-three`;

export const npm_5_2_3 =
`npm uninstall -g global-package-name`;

export const npm_5_2_4 =
`npm install -g depcheck`;

export const npm_5_2_5 =
`depcheck`;

export const npm_5_3_1 =
`npm WARN deprecated package-name@version: reason for deprecation`;

export const npm_5_3_2 =
`npm ls`;

export const npm_5_3_3 =
`npm uninstall deprecated-package-name`;

export const npm_5_3_4 =
`npm install new-package-name`;

export const npm_6_1_1 =
`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "test": "mocha tests/",
    "build": "webpack"
  }
}`;

export const npm_6_1_2 =
`npm run start`;

export const npm_6_1_3 =
`{
  "scripts": {
    "prebuild": "echo 'Cleaning build directory'",
    "build": "webpack",
    "postbuild": "echo 'Build completed'"
  }
}`;

export const npm_6_1_4 =
`npm run build -- --mode=production`;

export const npm_6_1_5 =
`MY_VAR=some_value npm run script-name`;

export const npm_6_1_6 =
`"scripts": {
  "start": "cross-env NODE_ENV=production node app.js"
}`;

export const npm_6_2_1 =
`{
  "scripts": {
    "prebuild": "echo 'Cleaning up old build files...'",
    "build": "webpack",
    "postbuild": "echo 'Build completed.'"
  }
}`;

export const npm_6_2_2 =
`{
  "scripts": {
    "pretest": "initialize-test-db",
    "test": "mocha",
    "posttest": "teardown-test-db"
  }
}`;

export const npm_6_2_3 =
`npm run build --loglevel verbose`;

export const npm_6_3_1 =
`{
  "scripts": {
    "init": "node setup.js"
  }
}`;

export const npm_6_3_2 =
`{
  "scripts": {
    "build": "webpack",
    "build:watch": "webpack --watch"
  }
}`;

export const npm_6_3_3 =
`{
  "scripts": {
    "start": "webpack-dev-server",
    "start:prod": "NODE_ENV=production node server.js"
  }
}`;

export const npm_6_3_4 =
`{
  "scripts": {
    "lint": "eslint src/",
    "format": "prettier --write 'src/**/*.js'"
  }
}`;

export const npm_6_3_5 =
`{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}`;

export const npm_6_3_6 =
`{
  "scripts": {
    "pretest": "npm run lint",
    "test": "mocha",
    "posttest": "npm run build"
  }
}`;

export const npm_6_3_7 =
`{
  "scripts": {
    "db:migrate": "knex migrate:latest",
    "db:seed": "knex seed:run"
  }
}`;

export const npm_6_3_8 =
`{
  "scripts": {
    "deploy": "node deploy.js",
    "deploy:staging": "STAGING=true node deploy.js"
  }
}`;

export const npm_6_3_9 =
`{
  "scripts": {
    "docs": "jsdoc src -d docs",
    "i18n:update": "node updateTranslations.js"
  }
}`;

export const npm_6_3_10 =
`{
  "scripts": {
    "lint": "eslint src/",
    "test": "jest",
    "validate": "npm run lint && npm run test"
  }
}`;

export const npm_7_1_1 =
`npm install -g prettier
npm install -g create-react-app
npm install -g gulp`;

export const npm_7_1_2 =
`npm install -g nodemon
npm install -g http-server`;

export const npm_7_1_3 =
`npm install -g git-open`;

export const npm_7_1_4 =
`npm install -g n`;

export const npm_7_2_1 =
`npm install /path/to/your-package`;

export const npm_7_2_2 =
`npm install ../path/to/your-package`;

export const npm_7_2_3 =
`"dependencies": {
  "your-package": "file:/path/to/your-package"
}`;
