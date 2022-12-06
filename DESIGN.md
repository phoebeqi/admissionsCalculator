In total, I have 3 HTML files, one JavaScript file, and one CSS file.

For the HTML files:

- index.html

This is the index webpage. "<title>Index</title>" displays "Index" as the webpage title. The second part is a horizontal navigation bar, where "ul" and "li" correspond to design elements in style.css. I created a hover effect so the user can know on which webpage the mouse is pointing at (for example, when the mouse is on "Index", the background color will turn black). h1 is the displayed title for this page, "College Admissions Calculator: Index". Finally, the paragraph introducing the program has the class "indexcontainer" which corresponds to the design in style.css, and a picture of a baby meme is inserted, formatted to be in the center of the page to make it look more coherent with the text.

- calc.html

This is the calculator webpage. "<title>Calculator</title>" displays "Calculator" as the webpage title. The second part is a horizontal navigation bar, where "ul" and "li" correspond to design elements in style.css, and the hover effect is the same as described in index.html. h1 is the displayed title for this page, "~The Calculator~". h2 represents the big categories, which are the instructions to use this page, the categories to sort the questions by (Demographics, Test Scores, Extracurriculars, and Lifestyle), the calculating step, and the displaying of results. Within each category is h3, which represents the specific questions asked. The choices provided for each question are all linked to a specific button, as implemented in main.js, and can change color and display the points the user can get with their chosen answer. In the next part, a calculator is implemented for the user to input the points they received in each category and total them up to a final score. Finally, the results are displayed to help the reader orient themselves in what tier they are placed into. I created this flow for the users to work on the questions first, then scroll to the bottom to calculate and find their answers, logical of a questionnaire or trivia. I also inserted a picture of a cat meme at the end (not formatted to be center of the screen so that it would look more arbitrary and funny)

- contact.html

This is the contact webpage. "<title>Contact</title>" displays "Contact" as the webpage title. The second part is a horizontal navigation bar, where "ul" and "li" correspond to design elements in style.css, and the hover effect is the same as described in index.html. h1 is the displayed title for this page, "Contact". h1 is the displayed title for this page, "Contact". Finally, the paragraphs with the email and Instagram have the class "indexcontainer" which corresponds to the design in style.css, and a picture of a CS meme is inserted, formatted to be in the center of the page to make it look more coherent with the text.

For the Javascript file:

- main.js

This Javascript file is written to make the program more interactive with the user. The implementation is similar throughout the file, and is meant to help query for and display the points a user is able to get by selecting a specific answer to the questions in the calculator. I start by having the document add an event listner. Then, I try to get answers worth no points by using document.querySelectorAll. Next, I add event listeners, set the background color of the selected choice to green, and display to the user how many points their answer is worth.

For the CSS file:

- style.css

This CSS file is written to format the visuals of the HTML websites. ul, li, li a, and li a:hover all contribute to creating the horizontal navigation bar (such as formatting the background color changes as needed when the user hovers over a link to another website). body, h1, h2, h3, .container, .header, .section, .section:hover, .indexcontainer, and .redcontainer all contribute to the format of the main body text, the different headings used in the webpages, and most of the text in the webpage (consistent font and size). input[type="text"], input[type="text"]:hover, and button, input[type="submit"], all contribute to the formatting related to helping the user interact with the webpage (background color change, transition looks, etc.).

Overall, these files work in synchrony to provide an informative an interactive experience for the user of my program