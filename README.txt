dy19474 and ft19226 is the group

The website is a size comparison of many large animals extinct or alive. The website
consists of a graph with buttons to get a too scale png of the animal on the graph.
Mutiple animals can be on the graph as well. Also there if button is clicked some facts
will appears about that animals at the bottom.

HTML: grade A

I have used XHTML5 and I have added ID and scripts to make CSS and javascript to work with
the HTML. As a sign of advanced use, most site elements are placed within containers classes for easy adjustments
in Javascript and CSS.

CSS: A, maybe A+?

CSS was deployed on the site using a framework(Bootstrap). Said framework added support for responsive elements and layout.
Working from the framework as a baseline, the site's styling and layout were customized in our main.css.
Our use demonstrated good understanding of styling properties like margins, computed styles (min/max height), font and colors.
In particular, computed styles were used to make our site compatible with varying window aspect ratios and sizes (e.g. mobile and desktop).
However, one limitation is that the site does need to be refreshed each time the windows is altered to recalculate the styling.
Thought was put into a visually pleasing color palette (using hex color codes) for our site.

JavaScript: A

The client side code is written in plain javascript without a framework. The notable function getting to
data from the database via JSON. I have a good understanding of manipulating HTML using
getElementByID, getElementsByClassName etc. There is a high degree of dynamism in the site. Many elements have click or mouseover functionality,
and have their styling adjusted in use. A notable example is the graph box that adjusts the positioning of the ruler and reference mannequin
each time the images are added and removed (checkBoxElementsPosition()). Javascript was used to alter the dimensions of the
the placing and sizing of the PNGs since all the PNG to fit a dynamic window resolution. No classes were used.

PNG : A

All the images in the graph will be PNG and were manipulated in gimp. I used layers the make the background
transparent. Also changed the resolution and cropped so the length was just contained the animals.

SVG : A

Our site logo is a vector graphic created using Inkscape. In making it, we applied various advanced techniques.
The shape tool was used to form the basic layout. We then used grouping and path editing.
For instance, The rectangle text "Nature's Beast" foreground was merged with the circle background.
Then the overlapping "union" area behind the text was removed. Lastly, the shark image was converted to a vector graphic from a png.

Server: C

At the moment I have only created a server with express.js and it runs and connects to the database.


Database: C

The database is SQLite and I have only created a table and inserted some data for instance the length of animal
and URL of the PNG. I have some ideas for callbacks and using WHERE and maybe an INNER JOIN. Like grouping
all the reptiles and mammals together in a query.

Dynamic pages: A

As covered in previous sections, our site has a high degree of dynamism. Most of our site elements change in use.
The raw data from the database is parsed (animal name, class, length) to inform how elements are displayed on the site.
This includes the changing "details" textbox, and animal buttons.
