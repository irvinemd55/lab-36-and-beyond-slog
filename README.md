# Lab-36-40 blogApp

## Server

### Model
  - model creates a unique id using uuid
  - other parameters include title, content, and show in nav (this is a boolean value for checkbox on frontend)
  - authorization done through third party firebase app
#### Model Functions
##### FetchAll
  - grabs every document found in pages directory
##### FindByIdAndDelete
  - searches for document based on unique id created by UUID and deletes it
##### Validate
  - checks if document has required properties of title and content
  - returns an error if one or both properties is not present
##### Save
  - saves to database if validation is successful
  - goes through firebase to make sure it has proper authorization

### Router
#### Authorization Router
  - sets login path to /api/login
  - utilizes firebase for proper authorization
##### Firebase
  - lib directory handles authorization for initial site handshake and token authorization for subsequent site management
  - utilizes firebase site for authorization handling
#### Page Router
  - sets page routes to /api/page and individual items to api/page/:id
  - adds put, get, and delete functionality for creating articles
  - put functionality doubles as post to get full CRUD (Create, Read, Update, Destroy) functionality.
## Angular

### entry.js
  - Contains routes utilizing uiRouter to jump from admin page to dashboard
  - Home route added for site front end and switching between individual sites
  - Layout section remain unconnected for SCSS testing
  - Loads services, components, containers, and filters

### Components
#### Admin Pages
  - Contains the components for login, page, editor and page select
##### Login
  - provides input sections for email and password
  - gets checked through firebase authorization
  - server side requires email and password parameters to gain access to site
##### Page editor
  - adds two input areas for adding content and title
  - checkbox for allowing admin to show new item in nav for site visitors
  - submit button available to create a new document
##### Page select
  - component that allows admin to select a document or view all documents that have been created
#### User Pages
  - Contains the components for navbar on site frontend and page searches
##### Navbar
  - allows user to filter though documents created on the site
##### Page Searchbar
  - allows a user to search through all documents created on the site

### Containers
  - there are three containers for the site: admin, dashboard, and Home
#### Admin
  - handles user login using auth-service and reroutes to dashboard if email and password combination is authorized
#### Dashboard
  - handles functionality for creating new pages, deleting them, copying URLS, and logging out.
  - bearer token required for everything
  - logout clears bearer token and reroutes to the admin page
#### Home
  - handles populating the user side of the website by adding every document created on the dashboard to the frontend
  - handles navbar movement to documents with specific IDs

### Services
  - Two services created to handle site functionality.
#### Admin-service
  - handles signup and login.
  - handles token handshakes
  - handles logouts
#### Page-service
  - Allows user to create, delete, and fetch all pages.

### Filters
  - filters used for user-side search functionality
#### Nav-Filter
  - filters documents based on item selected in nav component of home
#### Page-Search-Filter
  - filters documents based on letters typed in searchfield of home using fuzzy search addon

### SCSS and Layout
  - SCSS and Layout created to practice SCSS.
