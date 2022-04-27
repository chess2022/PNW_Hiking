
# Hike Mount Rainier

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
- Express
- Ejs
- Method-Override
- MongoDB
- Mongoose
- bcrypt

**************************************************

## Routes

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

## Trello Workspace

**************************************************

<https://trello.com/b/wJbDYWoi/pnw-hiking-app-planning>


**************************************************

## Project Timeline

**************************************************

Wednesday (Day 1):
- [X] Create a Trello board
- [X] Set up file structure and install dependencies
- [X] Create a detailed readme file

Thursday (Day 2):
- [X] Cry into my pillow and then shake it off and get to work (kidding, kidding)
- [X] Assemble data and photos to fill my database
- [X] Fill in database
- [X] Work on finishing up week 8 homework assignment

Friday (Day 3):
- [X] Get index routes and basic index.ejs code done
- [X] Get "show" route and details page done
- [X] Create login & create user page done but maybe not routes

Saturday (Day 4):
- [X] Create dashboard page
- [X] Create routes for dashboard page
- [X] Work on weird kinks in the code and troubleshoot

Sunday (Day 5):
- [X] Go crazy with CSS (if not already partially done by now)
- [ ] Work on anything not yet completed
- [ ] Maybe add trail maps via API call if there's enough time

Monday (Day 6):
- [X] Work on anything not yet completed
- [X] More troubleshooting since I guarantee there will be something wonky that needs updating

Tuesday (Day 7):
- [X] Figure out how to filter results
- [X] Frantically finish up anything not yet completed
- [X] More frantic finish up and wondering why I had to make my project so difficult

Wednesday (Day 8):
- [ ] Last minute rush to finish up
- [ ] Present my project
- [ ] Have a drink to celebrate being DONE


**************************************************

## Initial Models/Schemas

**************************************************

Hiking Trails:
```
const trailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    trailhead: {type: String, require: true },
    description: { type: String, required: false },
    length: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: false },
    imageDescription: { type: String, required: false },
    map: {type: String, required: false}
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
const userSavedSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    trailhead: {type: String, require: true },
    description: { type: String, required: false },
    length: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: false },
    imageDescription: { type: String, required: false },
    map: {type: String, required: false},
    note: { type: String, required: false },
});
```

**************************************************

## Wireframes

**************************************************

![Hike Mount Rainier Main App](/public/images/screenshots/main.png)
![Hike Mount Rainier Search Results](/public/images/screenshots/searchResults.png)
![Hike Mount Rainier Detail](/public/images/screenshots/details.png)

**************************************************

## Final Product

**************************************************

![Hike Mount Rainier Main App](/public/images/screenshots/index.png)
![Hike Mount Rainier Search Results](/public/images/screenshots/results.png)
![Hike Mount Rainier Trail Detail](/public/images/screenshots/show_details.png)
![Hike Mount Rainier User Dashboard](/public/images/screenshots/user_dashboard.png)
![Hike Mount Rainier Login Page](/public/images/screenshots/user_login.png)

**************************************************

## Getting Started

**************************************************

<https://mt-rainier-day-hikes.herokuapp.com/>

**************************************************

## Future Enhancements

**************************************************

TBD