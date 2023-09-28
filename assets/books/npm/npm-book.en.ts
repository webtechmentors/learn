export const npmBook =
  [
    {
      "category": "npm",
      "chid": 1,
      "title": "Introduction to npm?",
      "sections": [
        {
          "secid": 1,
          "subtitle": "What is npm?",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The Node Package Manager (npm) is a package manager for the JavaScript programming language, and it is the default package manager for the Node.js runtime environment. Initially released in 2010, npm allows developers to install, update, and manage software packages (referred to as \"modules\" or \"packages\") that can be used in their projects. These packages can include anything from libraries and frameworks to development tools and utilities. Here are some key features of npm:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Dependency Management</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Allows easy management of project dependencies, specifying which versions of a package your project is compatible with.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Version Control</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Utilizes semantic versioning to help manage changes and updates to packages.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Modularity</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Encourages a modular approach to application development, as you can easily include just the packages you need.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Community</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Possesses a large and active community that contributes to a wide variety of open-source packages available to everyone.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Scripting</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Provides a way to automate many tasks using npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Security</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Offers features like package auditing and two-factor authentication to enhance security.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>Private Packages and Organizations</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Allows you to create private packages and organizations, providing a way to restrict package access to authorized users.</ul>"
            },
            {
              "paraid": 1,
              "text": "By using npm, developers can tap into a vast repository of existing solutions, increasing development speed and reducing the need to \"reinvent the wheel\" for common tasks and functionalities."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "The npm Ecosystem",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The npm ecosystem is a comprehensive suite of tools, services, and libraries centered around the npm package manager, designed to streamline the development process for JavaScript and Node.js projects. Below are the key components that make up the npm ecosystem:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>npm CLI (Command-Line Interface)</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Core Functions</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Allows users to install, update, and manage packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Additional Features</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Supports tasks like running scripts, creating new packages, and interacting with the npm registry.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>npm Registry</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Public Registry</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>A vast, open-source database where packages are published and made available to the public.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Private Registry</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Provides the option to create private packages for specific projects or organizations.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Scoped Packages</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Allows authors to create packages under a namespace to avoid naming collisions.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>`<code>package.json</code>` File</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Dependency Management</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Lists project dependencies and their versions.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Metadata</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Contains project metadata such as name, version, and description.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Scripts</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Defines custom npm scripts to automate various tasks.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>`<code>node_modules</code>` Directory</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Local Storage</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Directory where npm installs the packages for a specific project.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Dependency Resolution</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Handles multiple versions of the same package for different projects.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Semantic Versioning (SemVer)</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Version Control</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>A versioning scheme followed by npm to manage package versions.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Ranges</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Allows developers to specify ranges of acceptable versions for dependencies.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>npm Organizations and Teams</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Organizations</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Allows multiple users to manage packages under a single namespace.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Teams</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Subsets of organization members focused on specific packages or projects.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Access Control</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Provides fine-grained control over package access and permissions.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>npm Enterprise</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Self-Hosted Registry:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>An enterprise-level solution that enables organizations to host their own npm registry.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Advanced Security</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Includes additional security features like single sign-on (SSO) and higher-level auditing.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"8\"><li><strong>npm Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Task Automation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Provides a way to automate repetitive tasks like testing, building, and deployment.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"9\"><li><strong>Security Features</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Package Auditing</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Checks for vulnerabilities in your project's dependencies.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Two-Factor Authentication (2FA)</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Adds an extra layer of security for package publishing and modifications.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"10\"><li><strong>Community</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Open Source</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>A large, vibrant community of open-source developers contributes to the npm ecosystem.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Third-Party Services</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Numerous services and tools have been built around npm, such as CI/CD tools, code quality checkers, and alternative package managers like Yarn.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "By understanding these components and how they interact, developers can make the most of the robust and flexible npm ecosystem for both individual projects and large-scale applications."
            }
          ]
        },
        {
          "secid": 3,
          "subtitle": "Installation Steps for Various Operating Systems",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Installing Node.js and npm (Node Package Manager) involves different procedures depending on the operating system you're using. Below are the installation guides for Windows, macOS, and Linux."
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Windows</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Installer</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Go to the <a href=\"https://nodejs.org/en\">Node.js website</a>.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Download the Windows Installer (`<code>.msi</code>` file) for the version you want.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Run the installer and follow the on-screen instructions to install Node.js and npm.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Chocolatey</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open Command Prompt as an administrator.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Install both Node.js and npm by running:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>macOS</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Installer</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Go to the <a href=\"https://nodejs.org/en\">Node.js website</a>.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Download the macOS Installer (`<code>.pkg</code>` file) for the version you want.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Run the installer and follow the on-screen instructions.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Homebrew</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open a terminal.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install both Node.js and npm, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Linux (Ubuntu)</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Package Manager</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open a terminal.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To update package list, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install Node.js, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install npm, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via NVM (Node Version Manager)</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open a terminal.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install NVM, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To add NVM to your shell session, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install Node.js and npm, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Verification</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>After installation, you should verify that both Node.js and npm are correctly installed:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Open a Windows Command Prompt, a macOS terminal, or a Linux terminal.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>To check the installed version of Node.js, run:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>To check the installed version of npm, run:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>If both commands return version numbers, the installation was successful.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Troubleshooting</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>If you encounter any issues, refer to the installation documentation on the <a href=\"https://nodejs.org/en\">Node.js website</a> or consult community forums for troubleshooting tips.</ul>"
            },
            {
              "paraid": 1,
              "text": "Remember, the methods above may vary slightly depending on your OS version and system configurations. Always refer to the most current documentation for the most up-to-date information."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 2,
      "title": "Your First npm Package",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Initializing a New Project",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Initializing a new project with Node.js and npm involves creating a new directory and setting up a package.json file to manage your project's dependencies and scripts. Here's a step-by-step guide on how to do this:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Create a Project Directory</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>First, you'll need to create a new directory to hold your project. Navigate to the location where you want to create this directory and run:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Then navigate into your newly created directory:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Initialize a `<code>package.json</code>` File</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>The `<code>package.json</code>` file serves as the manifest for your project, containing metadata, dependencies, and custom scripts. To create a `<code>package.json</code> file, run:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>You will be prompted to answer several questions to set up the initial `<code>package.json</code>` file:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>name</code>`</strong>: The name of your project (lowercase, no spaces).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>version</code>`</strong>: The initial project version (usually starts at 1.0.0).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>description</code>`</strong>: A short description of your project.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>main</code>`</strong>: The entry point of your project (usually index.js).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>scripts</code>`</strong>: Custom scripts to automate tasks.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>author</code>`</strong>: Your name or the name of the project author.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>license</code>`</strong>: The license for the project (common choices are MIT, GPL, Apache, etc.).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can skip any question by hitting `<code>Enter</code>`. You can also use the `<code>-y</code>` flag to automatically populate the `<code>package.json</code>` with default values:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li>`<code>Review the `<code>package.json</code>` File</code>`<strong></strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>After running `<code>npm init</code>`, you should see a new `<code>package.json</code>` file in your project directory. Open this file to review its contents, which should look similar to:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>You can manually edit this file to update metadata, dependencies, or scripts as your project evolves.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Create Your Entry Point File (Optional)</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>If your entry point is `<code>index.js</code>` (the default), create this file in your project directory:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Or simply create it using your text editor of choice.</ul>"
            },
            {
              "paraid": 1,
              "text": "You've now successfully initialized a new Node.js project with npm! You can start adding your code, installing other dependencies, and defining custom scripts as needed."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "\"package.json\" Explained",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The `<code>package.json</code>` file serves as the manifest for your Node.js project, containing essential metadata, dependencies, scripts, and configurations. Below is a breakdown of the various key-value pairs you may find in a `<code>package.json</code>` file, explaining what each section is used for:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Metadata Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>name</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The name of your project. It should be lowercase and URL-friendly. This is a required field.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>version</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The version number for your package, usually following semantic versioning (SemVer). This is also a required field.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>description</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>A short description of your project.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>main</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The entry point of your project. Node.js will look for this file when your package is imported.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>author</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The name of the author or an object containing `<code>name</code>`, `<code>email</code>`, and `<code>url</code>` fields.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>or</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>license</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The license type for the project.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>repository</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Information about the project repository, usually specifying the type and URL.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Dependency Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>dependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies the packages that your project depends on to run. These will be installed by running `<code>npm install package-name --save</code>` without any arguments.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>devDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies development-only dependencies by using the `<code>--save-dev</code>` or `<code>-D</code>` flag., which are not included when the package is consumed as a dependency by another project.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>peerDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies the packages that are expected to be installed by the end-user and tell the user that this package is compatible with a particular version of an npm package. It will be used when you publish your own packages.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_11",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>optionalDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies optional dependencies that the project can use but does not require.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_12",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Script Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>scripts</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies a set of command-line scripts that can be run with `<code>npm run script_name</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_13",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Configuration and Miscellaneous Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>engines</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies which versions of Node.js your project is compatible with.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_14",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>private</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If set to `<code>true</code>`, prevents the package from being accidentally published to npm.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_15",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>keywords</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>An array of strings that describe the project, aiding package discoverability.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_16",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>homepage</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The URL to the project homepage.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_17",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>bugs</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The URL to the project's issue tracker.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_18",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>bundledDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>An array of package names that should be bundled when publishing the package.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_19",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "These are some of the most commonly used fields in `<code>package.json</code>`. Depending on your project needs, you may use other fields for more advanced configurations."
            }
          ]
        },
        {
          "secid": 3,
          "subtitle": "Installing Your First Package",
          "paragraphs": [
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 3,
      "title": "npm CLI Basics",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Common Commands",
          "paragraphs": [
          ]
        },
        {
          "secid": 2,
          "subtitle": "CLI Flags and Options",
          "paragraphs": [
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 4,
      "title": "Dependency Management",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Types of Dependencies",
          "paragraphs": [
          ]
        },
        {
          "secid": 2,
          "subtitle": "The \"node_modules\" Directory",
          "paragraphs": [
          ]
        },
        {
          "secid": 3,
          "subtitle": "Semantic Versioning (SemVer)",
          "paragraphs": [
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 5,
      "title": "Introduction to npm?",
      "sections": [
        {
          "secid": 1,
          "subtitle": "What is npm?",
          "paragraphs": [
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 6,
      "title": "Introduction to npm?",
      "sections": [
        {
          "secid": 1,
          "subtitle": "What is npm?",
          "paragraphs": [
          ]
        }
      ]
    }
  ];
