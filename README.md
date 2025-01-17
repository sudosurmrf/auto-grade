### Directions 

Make sure to create your own .env file first. The .env must have a PORT, FSA_EMAIL, FSA_PW, GOOGLE_OAUTH=false (change to true if your fsa email signs in with OAUTH from google)

open 2 terminals, cd into server and run: node server.js

second terminal cd into client and run: npm run dev

### How to download mass submissions: 

go to the module you are interested in grading, and under the speedgrader button is a download submissions button. It will download as a zip, unzip and multi-file upload using the programs "Choose Files" button. 

### Tools

## Multi-project rendering 

Render up to 50 projects on the same page, including multi-page react apps and regular SPA with css and js files with one simple click of a button.

Just click the "GRADE ALL/RENDER ALL" button at the top, this will take a little bit of time, but it will download each repo and attempt to host them, even if the link to their github is incorrect and their directory is not at root. 

## Grading

Immediately see all grading criterion for each project and all local state tracking of each student's grades for each module. 

(Future update): Allows auto grading of selected modules with just a single push of a button. 

## Code View 

You can click the "SHOW FILE STRUCTURE (INLINE)" or "EXPAND FULL VIEW (MODAL)" for each project, which will display the entire file structure for the students uploaded repo. You can view multiple files at once and has basic data structure color coding. 

(Future update): Will allow the teacher to highlight mistakes in the code, to point out mistakes to the student they have made. 

## Auto Grade Input

If the .env file is set properly, the program when "UPDATE GRADES" is clicked, will attempt to access Canvas under the instructors credentials and find the class, module and student and automatically input each student's grade. If the module, student or class cannot be found, the bot will close automaitcally and display an error (Please let me know what happened so I can fix it if this occurs).


## Future tools:

Auto attendance - based on Zoom meeting participants 

Auto Note Injection per module

Slack contectivity to allow direct messaging student's code snipets

Any suggestions 