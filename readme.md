
# PNW Hiking Trails

**************************************************

A full-stack web application to search for and get details about local hiking trails. Users will be able to save their favorite trails and make personal notes about each trail in their user dashboard.

**************************************************

## Technologies Used

**************************************************

- HTML5
- CSS3
- JavaScript
- jQuery
- Google Fonts
- AJAX
- Express
- Ejs
- Method-Override
- MongoDB
- Mongoose
- bcrypt

**************************************************

## Intended Routes

**************************************************

- get "/" => renders index view
- get "/" => renders index view but with trail list
- get "/signup" => renders signup view
- post "/signup" => sends user data to server and redirects to login
- get "/login" => renders login view
- post "/login" => sends user data to server, checks for a match, if "true", redirect to dashboard
- get "/dashboard" => renders user dashboard view
- get "/logout" => ends session and redirects to index view
- get "/dashboard/new" => renders new view with a form to add a note
- post "/dashboard/:id" => sends saved note to server and renders updated dashboard
- get "/dashboard/edit" => renders edit view with a form to edit existing note
- put "/dashboard/:id" => sends updated note to server and renders updated dashboard
- delete "/dashboard/:id" = deletes saved trail from user dashboard & renders updated dashboard

**************************************************

## Project Timeline

**************************************************

Wednesday (Day 1):
- [ ] Create a Trello board
- [ ] Set up file structure and install dependencies
- [ ] Create a detailed readme file

Thursday (Day 2):
- [ ] Cry into my pillow and then shake it off and get to work (kidding, kidding)
- [ ] Assemble data and photos to fill my database
- [ ] Fill in database
- [ ] Work on finishing up week 8 homework assignment

Friday (Day 3):
- [ ] Get index routes and basic index.ejs code done
- [ ] Figure out how to filter results
- [ ] Get "show" route and details page done
- [ ] Create login & create user page done but maybe not routes

Saturday (Day 4):
- [ ] Create dashboard page
- [ ] Create routes for dashboard page
- [ ] Work on weird kinks in the code and troubleshoot

Sunday (Day 5):
- [ ] Go crazy with CSS (if not already partially done by now)
- [ ] Work on anything not yet completed
- [ ] Maybe add trail maps via API call if there's enough time

Monday (Day 6):
- [ ] Work on anything not yet completed
- [ ] More troubleshooting since I guarantee there will be something wonky that needs updating

Tuesday (Day 7):
- [ ] Frantically finish up anything not yet completed

**************************************************

## Initial Models/Schemas

**************************************************

Hiking Trails:
```
const trailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: false },
  length: { type: Number, required: true },
  difficulty: { type: Number, required: true },
  img: { type: String, required: true },
});
```

User:
```
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
```

User Saved Data:
```
const trailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: false },
  length: { type: Number, required: true },
  difficulty: { type: Number, required: true },
  img: { type: String, required: true },
  note: { type: String, required: false}
  completed: Boolean,
});
```

**************************************************

## Screenshots

**************************************************

![PNW Hiking Trails Main App](/public/images/screenshots/main.png)
![PNW Hiking Trails Search Results](/public/images/screenshots/searchResults.png)
![PNW Hiking Trails Detail](/public/images/screenshots/details.png)

**************************************************

## Getting Started

**************************************************

Site url TBD

**************************************************

## Future Enhancements

**************************************************

TBD