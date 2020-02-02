# Dev-Profile-Generator

This profile generator asks you three questions when run in node.

What is your github name? What is your favorite color? and what color theme would you like.

It then reaches out to a color api to find a set of colors that match your request.

then it populates and premade html template and saves it as both an html file, and as a pdf.

I have set it to save the PDFs under whatever name you are searching, so different accounts will not overwrite the PDF, however, using the same account will.  I wanted to keep it this way because we think we know that a triad theme build on red is going to look ok, and then it definitely doesn't, so you run it again.  And now your PDF has been updated, instead of having to sift through them for the one you actually liked.

I would encourage anyone playing with this to test out several different colors and themes, I found a few really fun ones.


To be able to run this, it will need to be using node, so you will need to copy the repository, and run npm install.  That will instal the insane number of node_modules that are needed for this, since they all have thier respective dependencies.

Enjoy!

![My dumb little gif](https://github.com/Sforzemon/Dev-Profile-Generator/blob/master/Profile%20Generator%20gif.gif)
