dy19474 and ft19226 is the group

The website is a size comparison of many large animals extinct or alive. The website consists of a measurement graph with buttons to get
a too scaled png of the animal on the graph, mutiple animals can be on the graph as well. If you hover over the png of the animal
information of the animal will appear in the sidebar.

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
getElementByID, getElementsByClassName etc. There is a high degree of dynamism in the site. Many elements have click or mouseover 
functionality,
and have their styling adjusted in use. A notable example is the graph box that adjusts the positioning of the ruler and reference 
mannequin
each time the images are added and removed (checkBoxElementsPosition()). Javascript was used to alter the dimensions of the
the placing and sizing of the PNGs since all the PNG to fit a dynamic window resolution. No classes were used.

PNG : A

All the images in the graph are PNG's and were found on the internet and then manipulated in GIMP. Layers were used to make the 
background transparent and the image around the animal was cut out. Also the resolution was changed for some images and all the images
were cropped so the length just contained the animals.

SVG : A

Our site logo is a vector graphic created using Inkscape. In making it, we applied various advanced techniques.
The shape tool was used to form the basic layout. We then used grouping and path editing.
For instance, The rectangle text "Nature's Beast" foreground was merged with the circle background.
Then the overlapping "union" area behind the text was removed. Lastly, the shark image was converted to a vector graphic from a png.

Server: B

The server implemented using the express.js framework. When the app runs the server listens on port 8080. The server uses https with
certificates to secure connections from a web server to a browser. The databases is connected to the server and when the server recieve
a request middleware is used to query the sql database and then sends back json containing the animal data. URL validation has been
implemented using middleware, so when // is used in the URL and error will be thrown so you can't jump out the public folder. Also when
a user specifys a class, the class section of the URL has to contain only alphabet characters. 


Database: B

The database is made with SQLite, there is only one table containing all the data on each animal. The animal data includes information 
such as name, length and URL of the PNG. The SQL queries are SELECTs which sends the informtion to the server. In one of the SELECT
queries a user specifies a class and a WHERE is used to obtain animals of the specified class eg reptile. The callback functions use the
data to make the buttons, display the details of the animals and place images. There is a script to delete the database and another
script to create the database.  

Dynamic pages: A

As covered in previous sections, our site has a high degree of dynamism. Most of our site elements change in use.
The raw data from the database is parsed (animal name, class, length) to inform how elements are displayed on the site.
This includes the changing "details" textbox, and animal buttons.
