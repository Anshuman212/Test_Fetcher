## Darth Test Parser
This is a test parser which can automatically parse the tests in from websites like codeforces, codechef, atcoder etc.
## Motivation:-
1. The only motivation was the existence of competitive companion that could help with getting the tests of a Problem rather than Copy Pasting.
## Necessary Installations for running this parser.
- You should have node.js installed on your local system. 
- If not,just download NodeJS from <a href="https://nodejs.org/en/">here</a>.
- Competitive companion extension in Browser : download from <a href="https://chrome.google.com/webstore/detail/competitive-companion/cjnmckjndlpiamhfimnnjmnckgghkjbl">here</a>.
## Initial Steps:-
1. Either Fork & Clone this Project or download the codes in your system.( Don't know either refer these <a href='https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository'>Cloning Repo</a> || <a href='https://helpdeskgeek.com/how-to/how-to-download-files-and-view-code-from-github/#:~:text=To%20do%20so%2C%20follow%20these%20steps%3A%201%20Search,contains%20the%20most%20recent%20code%2C%20but%20not%20always.'>Downloading Repo</a>
2. Go into the file "index.js".
3. Press CTRL+F and find and change the "path"(can check Line 9 in code) to the path of your "input.txt" file or any name of your input file. 
4. Make sure to keep the same name in line no. 28 as well i.e. if your file name is "i" , in line 28, make the first parameter of the function as path + "/i".
5. Go into the project directory using the terminal.(use cd commands)
6. Type : " npm install " and Press Enter to install all the modules and dependencies of the project.
7. Then Run the command : " node index.js " to run the project.
8. IMPORTANT : Do not close the terminal. Let it run in background. Otherwise Process Ends.

## Let's fire the parser:-
- Let's say you have a structure of main something like this.
![image](https://user-images.githubusercontent.com/75901017/199092318-3d2c085b-dcb8-44ba-88ef-58fb0f5ef204.png)
- You have a main fuction from where you call a function that does the rest of work.
- Now you need to app an extra while loop to run it over all the Test Cases.
- <strong>Refer the image above</strong>
```int samples = 1;
 cin >> samples;
  while (samples--) {
  int t;
  cin >> t;
  while (t--) {.function call or any code excecution..)
}
```
It's done you can now continue to think the Logic of the Problem.
<strong>On Submitting your code to Online-Judge comment out the </strong>
  ```
  cin>>samples;
  
```
<strong>  and you are good to go.</strong>
## DARTH SIGN OFF..
