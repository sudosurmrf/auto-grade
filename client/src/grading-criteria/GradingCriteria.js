const GradingCriteria = [
  {
    module: '4 - Github Workflow',
    criteria: [
      {
        id: 1,
        title: 'readme file',
        description: 'README file has the following quotes visible:',
        points: { max: 2, min: 0.0 },
        subGradingScale: [
          {
            id: 1,
            description: '"To Improve is to change"',
          },
          {
            id: 2,
            description: '"There is nothing permanent, except change"',
          },
        ],
      },
      {
        id: 2,
        title: 'screenshot with branches',
        description: 'The screenshot shows that the README file is in the main branch. -Note to reviewer: the branch dropdown menu should say "main"',
        points: { max: 2, min: 0.0 },
      },
    ],
  },
    {
      module: '5 - The Zoo Problem',
      criteria: [
        {
          id: 1,
          title: 'main header',
          description: 'The student included a main header that describes the purpose of the page',
          points: { max: 1, min: 0.0 },
        },
        {
          id: 2,
          title: 'title of page',
          description: 'The student included a title for the browser tab',
          points: { max: 1, min: 0.0 },
        },
        {
          id: 3,
          title: 'headings',
          description: 'The student included a heading for the following animals: Bear, Giraffe, Lion, Monkey, Alligator',
          points: { max: 1, min: 0.0 },
        },
        {
          id: 4,
          title: 'using lists',
          description: 'The student added animal names in a list format',
          points: { max: 1, min: 0.0 },
        },
        {
          id: 5,
          title: 'external links',
          description: 'The student added an external link for each animal',
          points: { max: 1, min: 0.0 },
        },
        {
          id: 6,
          title: 'photos / imgs',
          description: 'The student added a photo for each animal',
          points: { max: 1, min: 0.0 },
        },
        {
          id: 7,
          title: 'Comment section',
          description: 'The student included comments to help others read and understand the code.',
          points: { max: 1, min: 0.0 },
        },
      ],
  },
  {
    module: '6 - Grocery List',
    criteria: [
      {
        id: 1,
        title: 'HTML Semantic Tags',
        description: 'The student included major HTML semantic tags',
        points: { max: 1, min: 0.0 },
      },
      {
        id: 2,
        title: 'HTML Sections',
        description: 'The student included an HTML "section" of each grocery category',
        points: { max: 1, min: 0.0 },
      },
      {
        id: 3,
        title: 'Section Color',
        description: 'The student included a background color for each section',
        points: { max: 1, min: 0.0 },
      },
      {
        id: 4,
        title: 'Header Color',
        description: 'The student included a background color for each header',
        points: { max: 1, min: 0.0 },
      },
      {
        id: 5,
        title: 'Main Header Text',
        description: 'The student included a main header text in a different color',
        points: { max: 1, min: 0.0 },
      },
      {
        id: 6,
        title: 'Headings',
        description: 'The student included three types of headings',
        points: { max: 1, min: 0.5 },
      },
      {
        id: 7,
        title: 'Lists',
        description: 'The student included two types of lists',
        points: { max: 1, min: 0.5 },
      },
      {
        id: 8,
        title: 'CSS Box Model',
        description: 'The student included the box model to add borders and spacing to each section',
        points: { max: 1, min: 0.0 },
      },
      {
        id: 9,
        title: 'Photo Padding',
        description: 'The student included two photos with padding',
        points: { max: 1, min: 0.5 },
      },
      {
        id: 10,
        title: 'CSS Styling',
        description: 'The student included externally, internally, and inline CSS styling',
        points: { max: 1, min: 0.5 },
      },
    ],
  },
  {
    module: '7 - Secure the Vault',
    criteria: [
      {
        id: 1,
        title: 'Student included pseudocode',
        description: 'Student provided relevant and thorough pseudocode.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'strings',
        description: 'Student created a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Variables Assigned',
        description: 'Student assigned three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.',
        points: { max: 3, min: 0 },
        subGradingScale: [
          {
            id: 1,
            description: 'Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.',
          },
          {
            id: 2,
            description: 'Two of the three variables contain the corresponding result of calculation using a unique arithmetic operator(+-*/). Not all equal one of the three codes in the combination.',
          },
          {
            id: 3,
            description: 'One of the three variables contain the corresponding result of calculation using a unique arithmetic operator(+-*/). Not all equal one of the three codes in the combination.',
          },
        ],
      },
      {
        id: 4,
        title: 'Dialog Box',
        description: 'Student created a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Comments',
        description: 'Student included valuable comments throughout the code',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: "7A - Steven's Book House",
    criteria: [
      {
        id: 1,
        title: 'Header',
        description: 'Main header text is a different color.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Text Color',
        description: 'Variables created for text color.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Size',
        description: 'Variables created for text size.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Border',
        description: 'Variables created for border.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Footer',
        description: 'Footer which contains hyperlinks to the feedback page and scroll-up to top of the page.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Image and Label',
        description: 'Add one image and label for each book.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Summary Hyperlink',
        description: 'Hyperlink for each book which redirects to the specific book summary.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Five Books',
        description: 'Five books included in the application.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'Feedback Form',
        description: 'Link to feedback form included.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '8 - Development Team Practice',
    criteria: [
      {
        id: 1,
        title: 'Project Name',
        description: 'Student\'s GitHub project has an appropriate name visible (the breadcrumbs in the top left should show the name).',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Todo Tasks',
        description: 'GitHub project shows a minimum of 15 items in the Todo list (indicated by the number next to the Todo List title).',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '9 - Career Sim',
    criteria: [
      {
        id: 1,
        title: 'More than one branch',
        description: 'GitHub project includes more than one branch (including main/master), with descriptive branch name(s).',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Descriptive commit messages',
        description: 'GitHub project includes more than one commit, each with descriptive commit messages.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Descriptive Readme file',
        description: 'GitHub project includes a Readme file with descriptive content.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Correct Syntax',
        description: 'The code for the website demonstrates correct syntax and functional website principles.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Three Pages',
        description: 'The website features at least three pages (Home, About, Work/Portfolio).',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Persistent Header with Links',
        description: 'Website includes a persistent header with links to navigate between pages.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Personalized Content',
        description: 'Website includes personalized content, including formatted text and images.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Basic CSS Styling',
        description: 'Website includes basic CSS styling applied via an external file.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'Hello World JavaScript Routine',
        description: 'Website includes a "Hello world" tier JavaScript routine loaded via an external file.',
        points: { max: 1, min: 0 },
      },
      {
        id: 10,
        title: 'Correct Files Submitted',
        description: 'HTML/CSS/JavaScript files are compressed and submitted via a GitHub repository.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '10 - Picasso Painting',
    criteria: [
      {
        id: 1,
        title: 'Grid/Flex',
        description: 'The student included grid or flex layout in the CSS.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'CSS Units',
        description: 'The student included three different types of CSS units (e.g., px, %, vw, vh, em, rem).',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Responsive Design',
        description: 'The student designed the page to be responsive, working well on mobile, tablet, and desktop sizes.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'External CSS',
        description: 'The student created an external CSS file and linked it to the HTML document.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Advanced Selectors',
        description: 'The student used z-index and hierarchical selectors in the CSS code.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Shorthand CSS',
        description: 'The student used common shorthand properties in the CSS code where applicable.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'HTML Form',
        description: 'The student included an HTML form to collect names and emails of visitors.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'HTML Form Functionality',
        description: 'The student included a submit button in the HTML form that navigates to another HTML page.',
        points: { max: 1, min: 0 },
      },
    ],
  },{
    module: '12 - Career Simulation 2',
    criteria: [
      {
        id: 1,
        title: 'Github Project',
        description: 'Generate a GitHub project and repository containing the project.',
        points: { max: 2, min: 0 },
      },
      {
        id: 2,
        title: 'CSS Grid/CSS Flex',
        description: 'Create a functioning layout using CSS Grid or CSS Flexbox.',
        points: { max: 2, min: 0 },
      },
      {
        id: 3,
        title: 'Various CSS Units',
        description: 'Use proportional CSS units (e.g., %, vw, vh, em, rem) in the project.',
        points: { max: 2, min: 0 },
      },
      {
        id: 4,
        title: 'Advanced CSS Selectors',
        description: 'Use at least one of the following CSS selectors: media queries, nth-child, !important, hierarchical selectors.',
        points: { max: 2, min: 0 },
      },
      {
        id: 5,
        title: 'Advanced CSS Rules',
        description: 'Use at least one of the following advanced CSS rules: box-sizing, backgrounds, DOM ordering, z-index, transitions, calc, common shorthands.',
        points: { max: 2, min: 0 },
      },
      {
        id: 6,
        title: 'Contact Form',
        description: 'Design and build an HTML form with a variety of input types. Include a submit button (non-functional required).',
        points: { max: 2, min: 0 },
      },
      {
        id: 7,
        title: 'Team Dynamics',
        description: 'Collaborate with a partner to build a project plan and execute the project.',
        points: { max: 2, min: 0 },
      },
    ],
  },
  {
    module: '13 - Temperature Converter',
    criteria: [
      {
        id: 1,
        title: 'Link Javascript File',
        description: 'The submission includes an HTML page with a script tag in the HEAD linking to a JavaScript file.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Function Definitions',
        description: 'The code contains 3 functions (rand, convert to celcius, create message) with correct syntax.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'createMessage Function',
        description: 'The createMessage function uses if and else if statements, and returns a message using template literals.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'rand Function',
        description: 'The rand function utilizes Math.round() and Math.random() methods.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Prompt and Functionality',
        description: 'When the program is run, the user is prompted to enter input in the browser, and messages are logged to the console.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '14 - Stats',
    criteria: [
      {
        id: 1,
        title: 'Arrays and Loops: Accessing Array Elements',
        description: 'Uses indexes to access array elements.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Arrays and Loops: Iterating through an Array',
        description: 'Uses a loop to iterate through an array.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Arrays and Loops: Updating a Variable',
        description: 'Updates a variable as they iterate through an array.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Arrays and Loops: Conditional Update',
        description: 'Updates a variable depending on the result of a conditional as they iterate through an array.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Code Style: Consistent and Meaningful Variable Names',
        description: 'Variable names are consistent and meaningful.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Code Style: Consistent Naming Conventions',
        description: 'Code follows consistent naming conventions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Functionality: Correct Output',
        description: 'Functions give the correct output for a given input.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '15 - Froyo Orders',
    criteria: [
      {
        id: 1,
        title: 'Project Management: Latest Changes Pushed to GitHub',
        description: 'The latest changes have been pushed to the submitted GitHub repo.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Project Management: HTML and JS Files Connected',
        description: 'The repo contains an HTML file and a connected JS file.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Functionality: Prompt for Froyo Flavors',
        description: 'The user is prompted for froyo flavors upon entering the website.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Functionality: String Split into Array',
        description: 'The user\'s input string is split into an array of strings.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Functionality: Loop to Iterate through Flavors',
        description: 'A loop is used to iterate through the array of flavors.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Functionality: Object to Count Flavor Orders',
        description: 'An object is used to keep count of how many orders there are of each flavor.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Functionality: Correct Flavor Counting',
        description: 'The program correctly counts the number of each flavor in the user\'s input.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Code Style: Logic Organized into Function',
        description: 'The logic for counting the frequencies of elements in an array is organized into a function that returns an object.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'Code Style: Consistent and Meaningful Names',
        description: 'Names are consistent and meaningful.',
        points: { max: 1, min: 0 },
      },
      {
        id: 10,
        title: 'Functionality: Dynamic Console Output',
        description: 'The console output changes depending on the user\'s input.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '16 - Grocery List',
    criteria: [
      {
        id: 1,
        title: 'Code Style: Consistent and Meaningful Variable Names',
        description: 'Variable names are consistent and meaningful.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Code Style: Consistent Naming Conventions',
        description: 'You follow consistent naming conventions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Functionality: Correct Function Output',
        description: 'Functions, given the correct input, return the correct output.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Array Methods: Use of forEach, find, filter, reduce, map, slice',
        description: 'You used each method (forEach, find, filter, reduce, map, slice) at least once.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Array Methods: Correct Use of Return with map, filter, reduce',
        description: 'You correctly use the return keyword with map, filter, and reduce.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Array Methods: Correct Callback Syntax',
        description: 'You pass each array method the correct callback syntax.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '17 - Numbers',
    criteria: [
      {
        id: 1,
        title: 'Count',
        description: 'Code returns the count of numbers in data.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Print Numbers',
        description: 'Prints the numbers in data.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Odds',
        description: 'Returns the odd numbers in data.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Evens',
        description: 'Returns the even numbers in data.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Sum',
        description: 'Returns the sum of the numbers.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Product',
        description: 'Returns the product of the numbers.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Greater Than',
        description: 'Returns the numbers greater than the target.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'How Many',
        description: 'Returns the count of a given number.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '18 - Writing Tests Specifications',
    criteria: [
      {
        id: 1,
        title: "'Multiplication' Function - Unit tests",
        description: "Unit tests written in the form of 'Expect [action] to be [some result]'.",
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: "'Multiplication' Function - Thorough unit tests",
        description: "Student wrote a thorough list of unit tests for the 'Multiplication' function (more than just 1-2).",
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: "'concatOdds' Function - Unit tests",
        description: "Unit tests written in the form of 'Expect [action] to be [some result]'.",
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: "'concatOdds' Function - Thorough unit tests",
        description: "Student wrote a thorough list of unit tests for the 'concatOdds' function (more than just 1-2).",
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: "Functional Tests - Written in natural language",
        description: "Functional tests written in a more natural language.",
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: "Functional Tests - Thought-out list of tests",
        description: "Student wrote a thought-out list of functional tests, more than just 1-2.",
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '19 - Freelancer Forum',
    criteria: [
      {
        id: 1,
        title: 'Project Setup - Latest changes pushed',
        description: 'The latest changes have been pushed to the submitted Github repo.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Project Setup - HTML and JS files in repo',
        description: 'The repo contains an HTML file and a connected JS file.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'DOM - No hard-coded data',
        description: 'The HTML does not contain any hard-coded data about freelancer names, occupations, or starting prices.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'DOM - Use of document.querySelector',
        description: '`document.querySelector` is correctly used to select existing DOM elements.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'State - Initialization of arrays',
        description: 'The program initializes an array of possible names and an array of possible occupations.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'State - Initialization of freelancers array',
        description: 'The program initializes an array of at least two freelancers with names, occupations, and starting prices.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Functionality - Render initial freelancers',
        description: 'The initial array of freelancers is rendered onto the page.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Functionality - Calculate average starting price',
        description: 'A function is written that correctly calculates the average starting price of the freelancers array.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'DOM - Update DOM with average starting price',
        description: 'The DOM is updated to reflect the average starting price.',
        points: { max: 1, min: 0 },
      },
      {
        id: 10,
        title: 'Functionality - Generate and add freelancer',
        description: 'A function is written that generates a freelancer with a random name, occupation, and starting price. This object is pushed into the freelancers array.',
        points: { max: 1, min: 0 },
      },
      {
        id: 11,
        title: 'Functionality - Interval for adding freelancers',
        description: 'An interval is set to add a freelancer and rerender every few seconds.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '20 - Odds and Events',
    criteria: [
      {
        id: 1,
        title: 'Functionality - Add Number',
        description: 'When the user clicks the "Add Number" button, the number they entered into the input field is added to the number bank.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Functionality - Non-numeric input',
        description: 'The number bank is not changed if the user enters a non-numeric value.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Functionality - Display Numbers',
        description: 'The number bank displays all the numbers the user has entered.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Functionality - Sort 1 button',
        description: 'When the "Sort 1" button is clicked, the first number in the number bank is removed and placed into either the odd or even category.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Functionality - Sort All button',
        description: 'When the "Sort All" button is clicked, all the numbers in the number bank are moved into either the odd or even category.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Functionality - Odd/Even categorization',
        description: 'The numbers are placed into the correct bucket based on whether they are odd or even.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Code Architecture - DOM element references',
        description: 'References to selected DOM elements are stored in variables.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Code Architecture - Event listeners',
        description: 'The event listeners are listening for appropriate events, such as `submit` and `click`.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'Code Architecture - State management',
        description: 'The numbers in the bank, odd category, and even category are stored in state.',
        points: { max: 1, min: 0 },
      },
      {
        id: 10,
        title: 'Code Architecture - DOM rendering',
        description: 'The DOM is accurately rendered to reflect the state.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '20A - The Prescription',
    criteria: [
      {
        id: 1,
        title: 'applyDiscount Tests',
        description: 'Test cases written for checking the amount after the discount.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'applyCoupon Tests',
        description: 'Test cases written for checking the amount after the coupon.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'DOM Tests',
        description: 'Test cases written for the DOM button correctly calculating cost.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Jest Integration',
        description: '`npm test` runs without error and shows all passing test cases.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '21 - Party Planner',
    criteria: [
      {
        id: 1,
        title: 'Fetch GET',
        description: 'Fetch is used correctly to GET party data from the API.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Fetch POST',
        description: 'Fetch is used correctly to POST a new party to the API.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Fetch DELETE',
        description: 'Fetch is used correctly to DELETE a party from the API.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Party List',
        description: 'The app contains a list of the names, dates, times, locations, and descriptions of all parties.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Delete Button',
        description: 'Each party in the list has a delete button which removes the party when clicked.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Party Form',
        description: 'The app contains a form that allows a user to enter information about a party and add it to the list.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Dynamic DOM Rendering',
        description: 'The DOM is dynamically rendered according to data stored in state.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'State and API Sync',
        description: 'The data stored in state is updated to stay in sync with the API.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '23A - Unit 2 Career Simulation: Puppy Bowl',
    criteria: [
      {
        id: 1,
        title: 'GitHub Project and Repository',
        description: 'Generate a GitHub project and repository containing the project with detailed planning tickets with task descriptions for each one.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Commit Progress',
        description: 'Student has at least one commit towards the final result.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'HTML Rendering',
        description: 'Puppy Bowl players are rendered on card elements with their information.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'CSS Form Styling',
        description: 'Form is styled and easy to use.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'CSS Card Styling',
        description: 'Player cards are styled.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'JavaScript DOM Manipulation',
        description: 'Use the DOM to generate and manipulate HTML and styles according to the requirements.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'JavaScript Code Reusability',
        description: 'Use functions to isolate and re-use code.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'JavaScript Testing with Jest',
        description: 'Use Jest to test functions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'CRUD Operations with fetch, async, await',
        description: 'Students use fetch, async, and await to leverage CRUD against a REST API to perform common functions of a website.',
        points: { max: 1, min: 0 },
      },
      {
        id: 10,
        title: 'Fetch and Render Players',
        description: 'Fetching and rendering all puppy players in the browser.',
        points: { max: 1, min: 0 },
      },
      {
        id: 11,
        title: 'View Player Details',
        description: 'Viewing a single puppy player and their details.',
        points: { max: 1, min: 0 },
      },
      {
        id: 12,
        title: 'Remove Player',
        description: 'Remove a puppy from the roster.',
        points: { max: 1, min: 0 },
      },
      {
        id: 13,
        title: 'Add Player',
        description: 'Add a puppy to the roster.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '24A - Autocorrect',
    criteria: [
      {
        id: 1,
        title: 'Reuse of Functions',
        description: 'Previously written functions are used when applicable. For example, `about` calls `isRelevant`.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Higher Order Functions - Return',
        description: 'Higher order functions correctly return functions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Higher Order Functions - Argument Handling',
        description: 'Higher order functions correctly take functions as arguments and call them when applicable.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Error-Free Execution',
        description: 'The file runs successfully without errors.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Function Completion and Testing',
        description: 'The functions are completed and pass the provided test cases.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '24 - Puppy Pals',
    criteria: [
      {
        id: 1,
        title: 'Shows a List of Puppies',
        description: 'The application displays the name of each puppy in the browser.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Featured Puppy Display',
        description: 'The application correctly displays a featured puppy\'s information when a user clicks the puppy name from the list of names.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Error-Free Execution',
        description: 'When you run the application, no error occurs that prevents the application from running.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Additional CSS Styling',
        description: 'Additional CSS styling is present in the application.',
        points: { max: 1, min: 0 },
      },
    ],
  },{
    module: '25 - Color Picker',
    criteria: [
      {
        id: 1,
        title: 'Deployment',
        description: 'The app is deployed using Netlify.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Circles and Colors',
        description: 'The app displays three circles, each a different color.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Color Clicking',
        description: 'When a circle is clicked, the navbar changes to reflect the color clicked.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '26 - Contact List',
    criteria: [
      {
        id: 1,
        title: 'ContactList Component',
        description: 'The Application is working and shows a list of contacts.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Click on a Row',
        description: 'When a user clicks on a specific contact row, it navigates to a separate view showing the selected contact and some more details about them.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Error Free',
        description: 'The application runs error free.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Fetches External Data',
        description: 'The application fetches external data and does not just render the dummy contacts.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '27 - React Forms',
    criteria: [
      {
        id: 1,
        title: 'Successfully Deployed',
        description: 'The project is successfully deployed and renders without errors to the browser.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Form',
        description: 'There is a form to submit a username and password.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Authenticate Button',
        description: 'There is a button present to authenticate the app.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Form Validity',
        description: 'You can successfully submit the form without errors.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Authenticate',
        description: 'You can successfully authenticate the token by clicking an "authenticate" button.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Error Handling',
        description: 'If you click on the "authenticate" button before signing up, you get a helpful error in the app.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'CSS Styling',
        description: 'Application is styled using CSS.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Form Validation',
        description: 'Form inputs are validated, and user message appears to guide user input when requirements are not met.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '27A - The Sales Dashboard',
    criteria: [
      {
        id: 1,
        title: 'Heading',
        description: 'Heading should be present in the left of the dashboard.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Sidebar',
        description: 'Sidebar to collapse and show features.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Charts',
        description: 'Charts to show revenue generated.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Transaction Bar',
        description: 'A box with scroll bar displaying recent transactions.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '27B - The Bank Account',
    criteria: [
      {
        id: 1,
        title: 'Initial State',
        description: 'The initial state of the transactions slice is set correctly.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Reducers',
        description: 'Deposit and transfer reducers are correctly defined in the transactions slice.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Store Usage',
        description: 'The store uses the transactions slice reducer.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Store Provider',
        description: 'The store is provided to the rest of the app via App.jsx.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Action Dispatch',
        description: 'The appropriate action is dispatched to the store when the user makes a transaction.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'State Selection',
        description: 'Components are able to select state from the store.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Rendering Transaction History',
        description: 'The transaction history is rendered according to the data in the store.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '27C - Puppy Bowl Event',
    criteria: [
      {
        id: 1,
        title: 'Fetching Data',
        description: 'The code correctly fetches the data from the API.',
        points: { max: 2, min: 0 },
      },
      {
        id: 2,
        title: 'Single-Page Application (SPA)',
        description: 'Single-page application displaying team player.',
        points: { max: 2, min: 0 },
      },
      {
        id: 3,
        title: 'Card Display',
        description: 'Each card displays the image, name, breed, and status.',
        points: { max: 2, min: 0 },
      },
    ],
  },{
    module: '27D - Testing Puppy Pals',
    criteria: [
      {
        id: 1,
        title: 'Pseudocode',
        description: 'Pseudocode written for each test case.',
        points: { max: 2, min: 0 },
      },
      {
        id: 2,
        title: 'Test Cases',
        description: 'Check if the test cases are written properly.',
        points: { max: 2, min: 0 },
      },
      {
        id: 3,
        title: 'Jest',
        description: '`npm test` runs without error and shows all passing test cases.',
        points: { max: 2, min: 0 },
      },
    ],
  },{
    module: '27E - Deploying Using Github Actions',
    criteria: [
      {
        id: 1,
        title: 'Create a folder',
        description: 'Create a new folder called .GitHub, make another folder called workflows, create a file with the name .yml.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'GitHub Actions',
        description: 'Enable GitHub Actions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'YAML file',
        description: 'Add workflow (YAML) file in the project.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Commit the files',
        description: 'Upload all the files to GitHub.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '28 - React Router',
    criteria: [
      {
        id: 1,
        title: 'Deployed',
        description: 'The application is deployed without errors.',
        points: { max: 2, min: 0 },
      },
      {
        id: 2,
        title: 'Nav Bar',
        description: 'The application has a nav bar with at least three links: Red, Blue, and Home.',
        points: { max: 2, min: 0 },
      },
      {
        id: 3,
        title: 'Routes Change',
        description: 'The application view changes upon clicking each link. The browser does NOT refresh, the URL changes, and a view with the correct color shows up in the browser.',
        points: { max: 2, min: 0 },
      },
    ],
  },
  {
    module: '29 - Puppy Bowl React',
    criteria: [
      {
        id: 1,
        title: 'Player List',
        description: 'User can see a list of each player competing in the bowl.',
        points: { max: 2, min: 0 },
      },
      {
        id: 2,
        title: 'Details',
        description: 'User can click a details button (or similar) on each puppy that leads to another page view with specific details on that puppy, such as owner and team name.',
        points: { max: 2, min: 0 },
      },
      {
        id: 3,
        title: 'Search Bar',
        description: 'Users can search for a specific player in a search bar and see a new list of players with names matching the text in the search bar.',
        points: { max: 2, min: 0 },
      },
      {
        id: 4,
        title: 'Create Player Form',
        description: 'There is a form to create a new player somewhere in the application. The player gets added to the all players list without refreshing the page.',
        points: { max: 2, min: 0 },
      },
    ],
  },
  {
    module: '30 - Career Simulation: BookBuddy UNI/ACC',
    criteria: [
      {
        id: 1,
        title: 'Project Management - Planning',
        description: 'The submitted GitHub Project demonstrates adequate planning of tickets with task descriptions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Project Management - Commit History',
        description: "The student's commit history shows evidence of substantial contribution.",
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Routes via React Router - /books',
        description: 'This component shows all books in the library’s catalog.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Routes via React Router - /books/:id',
        description: 'This component displays details of an individual book.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Routes via React Router - /login and /register',
        description: 'Components for user authentication and registration.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Routes via React Router - /account',
        description: 'Shows the username or email of the logged-in user and their checked out books.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Authentication - Unauthenticated Users',
        description: 'Capabilities and limitations for unauthenticated users.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Authentication - Authenticated Users',
        description: 'Capabilities and limitations for authenticated users.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'JavaScript Basics',
        description: 'Implementation of JavaScript basics including variables, loops, control structures, functions, and data types.',
        points: { max: 5, min: 0 },
      },
      {
        id: 10,
        title: 'AJAX Basics',
        description: 'Implementation of AJAX basics including HTTP methods, asynchronous coding, error handling, and DOM updates.',
        points: { max: 1, min: 0 },
      },
      {
        id: 11,
        title: 'Props Usage',
        description: 'Proper usage of props to share data and functions between components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 12,
        title: 'Event Listeners',
        description: 'Proper usage of event listeners on React components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 13,
        title: 'State and Effects',
        description: 'Proper usage of state and effects in React components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 14,
        title: 'SPA Implementation',
        description: 'Implementation of routes (React Router) and hooks to view different components in the SPA without refresh.',
        points: { max: 1, min: 0 },
      },
      {
        id: 15,
        title: 'CSS Basics',
        description: 'Implementation of CSS basics including layouts, specificity, and intuitive UX through a clean interface.',
        points: { max: 1, min: 0 },
      },
      {
        id: 16,
        title: 'Best Practices - Clean Code',
        description: 'Code is cleanly written without unused functions or variables.',
        points: { max: 1, min: 0 },
      },
      {
        id: 17,
        title: 'Best Practices - Naming and Organization',
        description: 'Code has expressive variable, function, and CSS class names, and is organized into a coherent flow.',
        points: { max: 1, min: 0 },
      },
      {
        id: 18,
        title: 'Best Practices - Debugging',
        description: 'Code does not contain console.log() statements used for debugging in the final version.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '30A - Career Simulation: BookBuddy CORE',
    criteria: [
      {
        id: 1,
        title: 'Project Management - Planning',
        description: 'The submitted GitHub Project demonstrates adequate planning of tickets with task descriptions.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'Project Management - Commit History',
        description: "The student's commit history shows evidence of substantial contribution.",
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'Routes via React Router - /books',
        description: 'This component shows all books in the library’s catalog.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'Routes via React Router - /books/:id',
        description: 'This component displays details of an individual book.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'Routes via React Router - /login and /register',
        description: 'Components for user authentication and registration.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Routes via React Router - /account',
        description: 'Shows the username or email of the logged-in user and their checked out books.',
        points: { max: 1, min: 0 },
      },
      {
        id: 7,
        title: 'Authentication - Unauthenticated Users',
        description: 'Capabilities and limitations for unauthenticated users.',
        points: { max: 1, min: 0 },
      },
      {
        id: 8,
        title: 'Authentication - Authenticated Users',
        description: 'Capabilities and limitations for authenticated users.',
        points: { max: 1, min: 0 },
      },
      {
        id: 9,
        title: 'JavaScript Basics',
        description: 'Implementation of JavaScript basics including variables, loops, control structures, functions, and data types.',
        points: { max: 1, min: 0 },
      },
      {
        id: 10,
        title: 'AJAX Basics',
        description: 'Implementation of AJAX basics including HTTP methods, asynchronous coding, error handling, and DOM updates.',
        points: { max: 1, min: 0 },
      },
      {
        id: 11,
        title: 'Props Usage',
        description: 'Proper usage of props to share data and functions between components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 12,
        title: 'Event Listeners',
        description: 'Proper usage of event listeners on React components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 13,
        title: 'State and Effects',
        description: 'Proper usage of state and effects in React components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 14,
        title: 'SPA Implementation',
        description: 'Implementation of routes (React Router) and hooks to view different components in the SPA without refresh.',
        points: { max: 1, min: 0 },
      },
      {
        id: 15,
        title: 'Redux - Connection',
        description: 'Proper connection to Redux through react-redux.',
        points: { max: 1, min: 0 },
      },
      {
        id: 16,
        title: 'Redux - Store Implementation',
        description: 'Proper implementation of Redux store.',
        points: { max: 1, min: 0 },
      },
      {
        id: 17,
        title: 'Redux Toolkit - Slices Implementation',
        description: 'Proper usage of Redux Toolkit slices to create reducers for CRUD methods.',
        points: { max: 1, min: 0 },
      },
      {
        id: 18,
        title: 'State Retrieval',
        description: 'Properly retrieving state in required React components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 19,
        title: 'React-Redux - Action Dispatch',
        description: 'Properly dispatching actions from React components to Redux.',
        points: { max: 1, min: 0 },
      },
      {
        id: 20,
        title: 'CSS Basics',
        description: 'Implementation of CSS basics including layouts, specificity, and intuitive UX through a clean interface.',
        points: { max: 1, min: 0 },
      },
      {
        id: 21,
        title: 'Testing',
        description: 'Properly written tests to check correct render of React components.',
        points: { max: 1, min: 0 },
      },
      {
        id: 22,
        title: 'RTK Query - API Connection',
        description: 'The React app is connected to the API using RTK Query.',
        points: { max: 1, min: 0 },
      },
      {
        id: 23,
        title: 'RTK Query - CRUD Endpoints',
        description: 'Query and mutation endpoints for all CRUD operations on books and users.',
        points: { max: 1, min: 0 },
      },
      {
        id: 24,
        title: 'Styling - Frontend Component Library',
        description: 'The application is styled using a frontend React component library.',
        points: { max: 1, min: 0 },
      },
      {
        id: 25,
        title: 'Best Practices - Clean Code',
        description: 'Code is cleanly written without unused functions or variables.',
        points: { max: 1, min: 0 },
      },
      {
        id: 26,
        title: 'Best Practices - Naming and Organization',
        description: 'Code has expressive variable, function, and CSS class names, and is organized into a coherent flow.',
        points: { max: 1, min: 0 },
      },
      {
        id: 27,
        title: 'Best Practices - Debugging',
        description: 'Code does not contain console.log() statements used for debugging in the final version.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '31 - Acme Employees',
    criteria: [
      {
        id: 1,
        title: 'Application Load',
        description: "The student's application successfully loads without errors.",
        points: { max: 2, min: 0 },
      },
      {
        id: 2,
        title: 'Display of Acme Employees',
        description: 'The application displays the list of Acme employees.',
        points: { max: 2, min: 0 },
      },
      {
        id: 3,
        title: 'Styling Implementation',
        description: 'CSS styles are correctly applied and rendered in the application.',
        points: { max: 2, min: 0 },
      },
    ],
  },
  {
    module: '32 - The Acme Ice Cream Shop',
    criteria: [
      {
        id: 1,
        title: 'GET /api/flavors',
        description: 'Returns an array of flavors.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'GET /api/flavors/:id',
        description: 'Returns a single flavor.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'POST /api/flavors',
        description: 'Creates a new flavor and returns the created flavor.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'DELETE /api/flavors/:id',
        description: 'Deletes a flavor and returns nothing.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'PUT /api/flavors/:id',
        description: 'Updates a flavor and returns the updated flavor.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '33 - The Acme HR Directory',
    criteria: [
      {
        id: 1,
        title: 'GET /api/employees',
        description: 'Returns an array of employees.',
        points: { max: 1, min: 0 },
      },
      {
        id: 2,
        title: 'GET /api/departments',
        description: 'Returns an array of departments.',
        points: { max: 1, min: 0 },
      },
      {
        id: 3,
        title: 'POST /api/employees',
        description: 'Creates a new employee using the payload and returns the created employee.',
        points: { max: 1, min: 0 },
      },
      {
        id: 4,
        title: 'DELETE /api/employees/:id',
        description: 'Deletes the employee specified by the id in the URL and returns nothing.',
        points: { max: 1, min: 0 },
      },
      {
        id: 5,
        title: 'PUT /api/employees/:id',
        description: 'Updates the employee specified by the id in the URL using the payload and returns the updated employee.',
        points: { max: 1, min: 0 },
      },
      {
        id: 6,
        title: 'Error handling /error',
        description: 'Includes an error handling route that returns an object with an error property.',
        points: { max: 1, min: 0 },
      },
    ],
  },
  {
    module: '34 - The Acme Reservation Planner',
    criteria: [
      {
        id: 1,
        title: 'client',
        description: 'Is a Node pg client.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 2,
        title: 'createTables',
        description: 'Drops and creates the tables for the application.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 3,
        title: 'createCustomer',
        description: 'Creates a customer in the database and returns the created record.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 4,
        title: 'createRestaurant',
        description: 'Creates a restaurant in the database and returns the created record.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 5,
        title: 'fetchCustomers',
        description: 'Returns an array of customers in the database.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 6,
        title: 'fetchRestaurants',
        description: 'Returns an array of restaurants in the database.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 7,
        title: 'createReservation',
        description: 'Creates a reservation in the database and returns the created record.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 8,
        title: 'destroyReservation',
        description: 'Deletes a reservation in the database.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 9,
        title: 'GET /api/customers',
        description: 'Returns an array of customers.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 10,
        title: 'GET /api/restaurants',
        description: 'Returns an array of restaurants.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 11,
        title: 'GET /api/reservations',
        description: 'Returns an array of reservations.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 12,
        title: 'POST /api/reservations',
        description: 'Creates a reservation with valid payload and returns the created reservation with status code 201.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 13,
        title: 'DELETE /api/reservations/:id',
        description: 'Deletes a reservation specified by id in the URL and returns nothing with status code 204.',
        points: { max: 0.5, min: 0 },
      },
    ],
  },
  {
    module: '35 - The Acme Store',
    criteria: [
      {
        id: 1,
        title: 'client',
        description: 'Is a Node pg client.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 2,
        title: 'createTables',
        description: 'Drops and creates the tables for the application.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 3,
        title: 'createProduct',
        description: 'Creates a product in the database and returns the created record.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 4,
        title: 'createUser',
        description: 'Creates a user in the database, returns the created record, and hashes the user\'s password using Bcrypt.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 5,
        title: 'fetchUsers',
        description: 'Returns an array of users in the database.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 6,
        title: 'fetchProducts',
        description: 'Returns an array of products in the database.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 7,
        title: 'createFavorite',
        description: 'Creates a favorite in the database and returns the created record.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 8,
        title: 'fetchFavorites',
        description: 'Returns an array of favorites for a user.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 9,
        title: 'destroyFavorite',
        description: 'Deletes a favorite from the database.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 10,
        title: 'GET /api/users',
        description: 'Returns an array of users.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 11,
        title: 'GET /api/products',
        description: 'Returns an array of products.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 12,
        title: 'GET /api/users/:id/favorites',
        description: 'Returns an array of favorites for a user.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 13,
        title: 'POST /api/users/:id/favorites',
        description: 'Creates a favorite using product_id as payload and returns the created favorite with status code 201.',
        points: { max: 0.5, min: 0 },
      },
      {
        id: 14,
        title: 'DELETE /api/users/:userId/favorites/:id',
        description: 'Deletes a favorite for a user and returns nothing with status code 204.',
        points: { max: 0.5, min: 0 },
      },
    ],
  },
  {
    module: "36 - The Acme Auth Store",
    criteria: [
      {
        id: 1,
        title: "bcrypt",
        description: "use bcrypt.compare to validate the user's credentials during login",
        points: { max: 0.5, min: 0 }
      },
      {
        id: 2,
        title: "jwt_auth_me",
        description: "use JWTs to secure the route GET /api/auth/me",
        points: { max: 0.5, min: 0 }
      },
      {
        id: 3,
        title: "jwt_get_favorites",
        description: "use JWTs to secure the route GET /api/users/:id/favorites",
        points: { max: 0.5, min: 0 }
      },
      {
        id: 4,
        title: "jwt_post_favorites",
        description: "use JWTs to secure the route POST /api/users/:id/favorites",
        points: { max: 0.5, min: 0 }
      },
      {
        id: 5,
        title: "jwt_delete_favorites",
        description: "use JWTs to secure the route DELETE /api/users/:user_id/favorites/:id",
        points: { max: 0.5, min: 0 }
      },
      {
        id: 6,
        title: "register",
        description: "includes the ability for a user to register on the site",
        points: { max: 0.5, min: 0 }
      },
      {
        id: 7,
        title: "error_messages",
        description: "displays error messages during registration and login",
        points: { max: 0.5, min: 0 }
      }
    ]
  },
  {
    module: "36A - Classroom Manager: Part 1",
    criteria: [
      {
        id: 1,
        title: "prisma_installed",
        description: "Prisma and Prisma Client are installed",
        points: { max: 2, min: 0 }
      },
      {
        id: 2,
        title: "prisma_schema",
        description: "A Prisma schema defines `instructor` and `student` models",
        points: { max: 2, min: 0 }
      },
      {
        id: 3,
        title: "prisma_seed_refactor",
        description: "`seed.js` is refactored to work with Prisma Migrate",
        points: { max: 2, min: 0 }
      },
      {
        id: 4,
        title: "prisma_client_refactor",
        description: "The existing auth and api endpoints are refactored to use Prisma Client instead of SQL",
        points: { max: 2, min: 0 }
      },
      {
        id: 5,
        title: "unchanged_functionality",
        description: "The app's functionality remains unchanged",
        points: { max: 2, min: 0 }
      }
    ]
  },
  {
    module: "36B - Classroom Manager: Part 2",
    criteria: [
      {
        id: 1,
        title: "bcrypt_usage",
        description: "bcrypt is used to encrypt a user's password before it is sent to the server",
        points: { max: 1, min: 0 }
      },
      {
        id: 2,
        title: "oauth_frontend_update",
        description: "Frontend components are updated to signify the 'Login via Github' option",
        points: { max: 1, min: 0 }
      },
      {
        id: 3,
        title: "oauth_redirect_route",
        description: "A redirect route has been added to the backend to receive the authorization code from Github",
        points: { max: 1, min: 0 }
      },
      {
        id: 4,
        title: "oauth_github_requests",
        description: "The backend is able to make requests to Github on behalf of a user by sending an access token",
        points: { max: 1, min: 0 }
      },
      {
        id: 5,
        title: "oauth_account_creation",
        description: "The account for a user logged in via Github is created and stored in the database",
        points: { max: 1, min: 0 }
      },
      {
        id: 6,
        title: "oauth_token_reception",
        description: "The client still receives a token from the server after a user is successfully authenticated, regardless of whether the user logged in via Github or username/password",
        points: { max: 1, min: 0 }
      }
    ]
  },
  {
    module: '36C - Classroom Manager: Part 3',
    criteria: [
      {
        id: 1,
        title: 'Unit Tests',
        description: 'SuperTest is used to test each Express endpoint.',
        points: { max: 4, min: 0},
      },
      {
        id: 2,
        title: 'Unit Tests',
        description: 'Authentication is tested. i.e. an instructor with id 4 cannot perform any CRUD operation on the students of the instructor with id 5.',
        points: { max: 4, min: 0},
      }
    ]
  },
  {
    module: '37A - Unit 4 Career Simulation CORE',
    criteria: [
      {
        id: 1,
        title: 'Github Project',
        description: 'A project plan that was created by using GitHub Projects',
        points: { max: 5, min: 0},
      },
      {
        id: 2,
        title: 'Schema',
        description: 'A clear database schema for the e-commerce application',
        points: { max: 5, min: 0},
      },
      {
        id: 3,
        title: 'Unit Tests',
        description: 'Unit tests written for each API endpoint',
        points: { max: 10, min: 0},
      },
      {
        id: 4,
        title: 'Routes',
        description: 'A functioning API and the working base routes with placeholder endpoints',
        points: { max: 10, min: 0},
      }
    ]
  },
]
export default GradingCriteria;
