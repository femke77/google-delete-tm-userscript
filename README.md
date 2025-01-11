# Google Delete Userscript 
  

   ![Tampermonkey](https://img.shields.io/badge/tampermonkey-%2300485B.svg?style=for-the-badge&logo=tampermonkey&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  
  ## Description  ✏️
  
  This is a tampermonkey userscript designed to help you delete google gmail messages faster. 
  
  Recently I received notice that my gmail account, which I've had since the inception of gmail waaaaay back when, was too full and I was going to lose the ability to receive email. I investigated ways to delete. There is a delete all for the inbox, but I didn't want that. I wanted to delete from oldest to newest until 2019. In other words, I wanted all the email received after 2019 to be trashed but I couldn't find a way to do that. I switched the view to "oldest" and just started deleting 100 at a time. Well, that got old really fast. I have thousands and thousands of emails in that account and 100 is the biggest view. 

  As a quick solution I created a Tampermonkey userscript to do the deleting for me. Once you have tampermonkey's chrome extension installed you can enable this script. The goal is to switch to the google api, add OAuth and make this more feature rich for filtering out what you want to save, checking the dates instead of asking for a email count, etc.. But for now, it solves a problem I really needed solved in a really quick way. What else is coding for?
  
  ## Table of Contents 📖
  
  [Installation](#installation)
 

  [Usage](#usage)
 
  [Issues](#known-issues)

  [Contributing](#how-to-contribute)


  [Credits](#credits)

  [Questions](#questions)
  
  ## Installation 
  

 Enable tampermonkey https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en&pli=1. Then add this script to the location you are storing your scripts or copy paste the code to a new script. In the code, change the email count to what suits you. In the code now it is 60000. 
  
  ## Usage 
  

  Enable the script. Login to your gmail account using the chrome browser and navigate to your inbox. Provide an email count at which to stop (you will have to look for the right number yourself). Change the view to "oldest." The script won't work if you don't switch to that view. It will then start deleting up unti the email count of your choosing. Leave the chrome broswer window open. Disable the script when you are done.

  ### Deployed Link
  N/A

### Screenshots
No screenshots yet.

______________________________________________________________________________________



## Known Issues 
- Script doesn't currently switch to oldest view for you. 
- Should have a prompt asking user the stop num.
 - You have 10 seconds from the time you go to google.mail.com to switch to "oldest" view or the script won't run and you will have to reload the page and try again. 
 - The settings are running the code a bit slow, but you can adjust those to work with your internet speed.

## How To Contribute 
  
Fork the repository and make a pull request with your new code.
  

## Credits 
Google mail<br/>
Tampermonkey<br/>

 ## Questions 
  
 If you have any questions about the repo or notice any bugs you want to report, open an issue or contact me directly at megan.meyers.388@gmail.com. 
  
  