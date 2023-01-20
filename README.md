# VEDA Dashboard UI Automation

VEDA Dashboard UI Automation is an application made with the framework Playwright along with the programming language JavaScript. Its main function is doing textual and visual testing of the webpage VEDA Dashboard UI.




## Requirements

To use the application, you should have installed Node.js on your system

[Node.js Main Page](https://nodejs.org/en/)




## Installation

The installation is pretty simple. First, clone the repository of the application:

```bash
  git clone PATH-TO-YOUR-REPOSITORY
```

Finally, located on the application's main folder, run the following command:

```bash
  npm install
```
## Structure

#### Default folders

The structure of the root folder of the application follows the basic default Playwright configuration along with some extra folders to handle the application with less difficulty, being the following ones that are the most important:

- config - Data (data text to compare) and parameters (like the site's URL) files for parameterizing the scripts.
- data - More data text to compare from the views of the webpage.
- helpers - This is where all the scripts are stored, more information below this section.
- node_modules - Playwright's necessary modules for the application to work.
- playwright-report - Generated Playwright's visual report after running the chosen tests.
- selectors - All webpage element's selectors stored for mantaining the application more easily.
- tests - This is  where all the tests are, invoking functions from the scripts on *helpers* folder.

#### Scripts

The scripts path follows some rules to have a mantainable application:

- If the desired function is going to be used in more than one test and/or other contexts, then said function is going to be written on *helpers* folder, along with the name of the view where the function is going to be used, for example: *helpers/Analysis-page.js*

- Otherwise, if said function is going to be used in only one test and/or one context, then said function is going to be written on a folder which name will be the view where the function will be used, having the same logic as the name of the script, for example: *helpers/thematics/covid-19/analysis/analysis1.js*


## Execution

There are two main ways to execute the application, through the command line of your operating system or through a programming tool which can handle extensions, for example *Visual Studio Code*.

#### Command line method

Located on the root folder of the application, run the following command:


```bash
  npx playwright test
```

If you want to run a specific test, you can run it by calling the test filename or the test description:

```bash
  npx playwright test -g 'Test on Analysis view of COVID-19 thematic'
```

```bash
  npx playwright test analysisTest.spec.js
```

#### Programming tool method

On this example, we will use Visual Studio Code since it was the program we used to make the application.

    1. Open Visual Studio Code
    2. Open the application through File > Open Folder
    3. Click "Extensions" button on the left sidebar
    4. Search for "Playwright Test for VSCode" extension
    5. Click "Install", maybe you will be asked to restart the application after this step
    6. Click "Testing" button on the left sidebar
    7. Click "Run Test" button on the desired test to run it


## FAQ

#### There are tests that shows a browser and others not, why?

There are some tests that has visual testing on them (the application take screenshots of the page's sections), thus it is required to run that test in headless mode, which means that the test will run on a browser window, but it will be hidden. Otherwise, the test will fail.

