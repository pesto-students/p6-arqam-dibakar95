# When a user enters an URL in the browser, how does the browser fetch the desired result ?

When a user enters an URL in the browser,

- The browser checks the cache for a DNS record to find the IP address of the URL.

  - DNS is a naming database which maps the domain names to the IP addresses.
  - User's Internet service provider (ISP) manages the DNS.
  - DNS records are cached at different levels between user's browser and at various places across the internet.

- To find the DNS record, user's browser checks four levels caches

  - First it checks the browser own cache, the operating system cache, a local network cache at user's router, and a DNS server cache on user's internet service provider (ISP).

- Browser initiates the TCP connection with the server

  - Once the browser gets the DNS record with the IP address, it will establish a connection with the server that matches the IP address to transfer information.
  - To transfer data packets between client browser and server it establishes a TCP connection. This connection is made using 3-way handshake in which the client and the server exchange SYN(synchronize) and ACK(acknowledge) messages.

- The browser sends an HTTP request to the webserver

  - Now that the browser has a connection to the server, it follows the rules of communication for the HTTP(s) protocol to transfer data.
  - The browser sends an HTTP GET request to the server to request the contents of the page. Request methods can be GET, POST, PUT, PATCH, DELETE etc.
  - This request will also contain additional information such as browser identification (User-Agent header), types of requests that it will accept (Accept header), and connection headers asking it to keep the TCP connection alive for additional requests.

- Server processes request and sends back a response

  - The server contains a webserver (i.e., Apache, IIS) that receives the request from the browser and passes it to a request handler to read and generate a response.
  - The request handler is a program (written in ASP.NET, PHP, Ruby, etc.) that reads the request, its’ headers, and cookies to check what is being requested and also update the information on the server if needed. Then it will assemble a response in a particular format (JSON, XML, HTML).

- Server sends out an HTTP response

  - The server response contains the web page you requested as well as the status code, compression type (Content-Encoding), how to cache the page (Cache-Control), any cookies to set, privacy information, etc.

- The browser displays the HTML content.
  - The browser displays the HTML content in phases. First, it will render the bare bone HTML skeleton.
  - Then it will check the HTML tags and send out GET requests for additional elements on the web page, such as images, CSS stylesheets, JavaScript files, etc.
  - These static files are cached by the browser, so it doesn’t have to fetch them again the next time you visit the page.

![Client-server architecture](https://madooei.github.io/cs421_sp20_homepage/assets/client-server-1.png "Client-server architecture")

## What is the main functionality of the browser?

- A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages.
- When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions.
- The browser then renders these objects in the browser window after processing them.

## What are High Level Components of a browser?

1. The user interface:

   - This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

2. The browser engine:

   - It’s a bridge between User Interface and Rendering Engine. It provides methods to initiate the loading of a URL and other actions like (reload, back and forward).

3. The rendering engine :

   - Responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

4. Networking:

   - For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

5. UI backend:

   - Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

6. JavaScript interpreter.

   - Used to parse and execute JavaScript code.

7. Data storage.

   - This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![Browser Components](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=500)

## What is rendering Engine and what is its use?

- A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS).

- Key operation of Rendering engine is HTML Parser. Each browser use various engines like Chrome and Opera uses Blink, Firefox uses Gecko, IE Edge uses EdgeHTML, Internet Explorer uses Trident, Apple Safari uses WebKit.

## Parsers (HTML, CSS, etc)

- Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.
- The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values.
- When the HTML parser finds resources, such as an image, the browser will request those resources and continue parsing.
- When the browser encounters CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting.
- The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is downloaded, parsed, and then executed.
- JavaScript parsing is done during compile time or whenever the parser is invoked, such as during a call to a method.

![HTML Parsing](https://media.geeksforgeeks.org/wp-content/uploads/20200516001841/Untitled-Diagram107.png)

## Tree construction

- For rendering, a DOM and CSSOM are merged to form something called a Render Tree. Render Tree has the information required to mark and paint elements on the screen.

- Also while forming a Render Tree, elements like <head>, <link>, <script>, and elements with 'display: none' in CSS are ignored since they are not rendered on the screen.
- DOM API gives access to DOM elements in the DOM tree constructed by the browser, CSSOM is kept hidden from the user.
- But since the browser combines DOM and CSSOM to form the Render Tree, the browser exposes the CSSOM node of a DOM element by providing high-level API on the DOM element itself. This enables the developer to access or change the CSS properties of a CSSOM node.

![Render Tree](https://res.cloudinary.com/practicaldev/image/fetch/s--T2Lw75n3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0av60eim9egeoihfdfo1.png)

## Order of script processing, Layout and Painting

- Script tags are executed in the order they appear.
- Elements on the page won’t render until all the script tags preceding them have loaded and executed.
- async, defer and module types could be used to handle the order of script processing.

![Order of Script Processing](https://www.tutorialexample.com/wp-content/uploads/2020/08/the-process-of-javascript-inline-in-html-page.png)

- Once the Render-Tree is constructed, then the browser starts the printing individual elements on the screen.

![Critical Rendering Part](https://miro.medium.com/max/1100/1*yQJkz12sPxS-kJoMDqzbEQ.png)

- Layout operation

  - The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc.) from The Render Tree and places the elements on the screen.

- Paint operation
  - After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.
  - Since elements (or a sub-tree) in the Render-Tree can overlap each other and they can have CSS properties that make them frequently change the look, position, or geometry (such as animations), the browser creates a layer for it.
  - Creating layers helps the browser efficiently perform painting operations throughout the lifecycle of a web page such as while scrolling or resizing the browser window.

### References

- [https://www.hubspire.com/web-browser-concept-and-functions/](https://www.hubspire.com/web-browser-concept-and-functions/)
- [https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/)
- [https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
- [https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/](https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/)
- [https://web.dev/howbrowserswork/](https://web.dev/howbrowserswork/)
- [https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969](https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969)
