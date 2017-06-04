# ra-project01: Aloha website

This is elegant website built using mobile-first responsive layout optimized for mobile, tablet and desktop). This website incorporates image slider for the featured product area.

URL: https://usotnyk.github.io/ra-project01/

Used tech and libraries:

- HTML semantic tags
- CSS3 (flexbox, background images, transitions on hover)
- Flickity carousel (jQuery plugin)
- Smooth scrolling in the menu to navigate to specific sections on the page
- RegEx for email verification rules + Alert box upon subscription
- Font Awesome
- Google Fonts
- Gulp build system to minify CSS for optimization

Workflow

Apr-17-2017

- Added bottom jumbotron with email subscription;
- Added footer (still need to align all elements for different screen sizes);
- Styled fonts, colors, added font-awesome icons.

Apr-18-2017

- completed mobile version of the website (except aligning images in <nav>).

Apr-18-2017
To Do:
  - fix nav bar;
  - change yellow selection:focus (pseudoselector) in Subscribe;
  - look into Flickity slider!

Done: 
  - completed top nav bar (aligning/sizing images in flex);
  - refactored jumbotrons: combined two images in background;
  - completed footer alignments;
  - added regexp for email validation into html document (if adding through javascript/jquery - built in email-validation is overritten).

Apr-19-2017

To Do:
  - Add navbar menue + smooth scroll;
  - Flickity slider (add 4 more products)!
  - Add alert for subscribing.

Done:

  - added <li> to navbar to build menu;
  - added smooth scrol to nav bar links;
  - fixed main description paragraph alignment;
  - added alert message when email is submitted;

Apr-20-2017

To do:
  - implement Flickity;
  - add product grid for all 3 screens!
  - fix nav bar menu alignment according to the mockups;
  - add CSS reset; 

Done:
  - Added 4 additional feature products;
  - Impremented Flickity carousel + updated styling according to mockups;
  - Rearranged nav bar to reflect mockups of part2;
  - added CSS reset and updated styles accordigly;
  - created products categories grid;

Apr-21-2017

Done:
  - Fixed bottomjumbotron paddings for h2 and p.
  - Fixed alignments of the grid boxes with appropriate margins;
  - validates HTML and CSS code in online validators, fixed bugs;
  - changed fonts to google fonts as saved fonts were not loading on github.io;
  - added transitions on :hover for categories grid; 

Apr-22-2017

Done:
  - fixed categories grid:hover transitions;
  - moved CSS reset to styles.css and js to main HTML to optimize performance.
  - compressed images to minimize page size and loading time;

Bugs: built in email verification (input field) does not work in Safari.


