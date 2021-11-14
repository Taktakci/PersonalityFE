# Personality Test Front End Application
This is the Personality Test front end application. 
It is aimed to work together with the Personality Test Back End services.
<br /><br />
When it starts it queries categories and forms a Category drop down component. <br />
You can select a category. Then it will query the questions belonging to that category and add them under Question dropdown menu.<br />
When you select a question from that menu this time it will get the question details. The question text will be displayed on the page.  <br />
Options dropdown menu will be filled with the allowed answers to the selected question.
<br /><br />
Lower part of the form is for sending your answer to the selected question. 
Although it is strictly controlled by the backend, Front End is also helping you to avoid major mistakes by automatically filling Question Id and Answer fields.
However you have to manually enter User Id field. You may enter any alphanumeric value here.


### Tech Stack 
This is a **React** application running on **Node.js** environment. All dependencies are installed by npm package manager.
When the application starts It will automatically open a browser and connect to http://localhost:3000 
<br />
This is a simple test application for restful back end services.
You need to run the backend application on the same machine before starting the front end. 
All api calls are hard coded to use the localhost address.


### How to Install and Run
You need to install node in your local computer. Then you may run
<pre>npm install      to download dependencies and build project
npm start        to run the application</pre>

