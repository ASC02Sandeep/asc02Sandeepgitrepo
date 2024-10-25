 
 # :mortar_board: Week 2:
 ##  Learning: :computer:
 - Learned different typescript and java script methods.
 - Learned about typescript features like static typing, classes and inheritance, union and intersection Types, generics, organizing modules like importing and exporting.
 - Learned git commands to work with working repository, staging area like add, commit, push.

 ## Challenges: :lock:
 - Working with typescrpit and javascript syntax is little challenging.
 - Little hard to remember all the syntaxes in one go, also working with git commands, but using them frequently makes it easier to remember them.

 ## Support required: :key:
 - Need materials like git and typescript features which you have made and kept in git for some topics which are little hard to digest, which will help me to understand the concepts easily.

 ## My Contributions: :high_brightness:
 - Made static and dynamic registration forms to store user data.
 - Pushed my local repo files to remote repo using git commands.
 - Made APP for User Management System using typescript.

 ## Pending/Completed: :unlock:

 - Completed registration form using html, css, javascript.
 - Completed Bulb tasks based on the user reqirements.
 - completed static and dynamic registration forms to store user data.
 - Made APP for User Management System using typescript.


................................................................................................................

# :mortar_board: Week 3:

## Challenges:lock: and Solutions::unlock:

- Working with all angular components at the starting was little challenging and got errors at the intial stage. Breaking up the things makes it easier to understand the code syntax and in correcting the errors. 
- After creating all the components inside angular project file, the data which is there inside employees.json file does not reflect on my browser, but I got the html structure.
- After consulting my trainer, I got know that I should again run the serverdata file and my main angular project file in two different powershells. Then the employee details reflect inside the table on my web browser.

## code base: :computer:

- export class AppComponent implements OnInit {
  title = 'PracticeApp';
  **employees? : Employee[];**   
  constructor(private employeeService : EmployeeService){
  }}

  - I got error in this part in app.component.ts file.

- Then understood that I didn't declare Employee as array, and corrected that syntax.
  - export class EmployeeService{
    baseUrl: string = 'http://localhost:3000/employees'
    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get **<Employee[]>**(this.baseUrl);
    }
}

## Scope of Improvement: :high_brightness:

- Able to work with all angular components and files inside the angular project file.
- Learn to handle background images in both index.html(global) and app.component.html(here head,body part is not required).
- Learned different commands in angular to run the files.
- Able to handle git commands easily.

## Strengths: :key:

- Got familiar with all the angular commands, components and files inside it.
- Using style, scripts by installing bootstrap in angular, so that able to apply stylings in a better and easier way.
- Able to work with forms in angular and storing data inside local storage.

## Looking forward: :computer:

- Looking forward to learn some more code syntax and operations in angular.




