Saved.create(req.body, (err, savedTrail) => {
  let savedTrail = { ...Trail[req.params.id] };
  // if ((req.session.loggedIn = true));
  req.session.username = username;
  savedTrail.username = username;
  savedTrail.note = "";
  Trail[req.params.id] = savedTrail;
  res.redirect("/user/dashboard/");
});


// dashboard page //
                <% saved.forEach(save => { %>
                <a id="trailBoxes" href="/user/<%=save._id; %>"> 
                    <div id="trailImg"><img src="<%=save.image; %>"></div>
                    <div id="trailName"><h4><%= save.name %></h4></div>
                    <div id="trailNotes"><h4><%= save.note %></h4></div>
                    <button id="addNote">Add note</button>
                </a>
                 <% }) %>


  const savedTrail = {
    username: req.session.username,
    name: req.body.name,
    location: req.body.location,
    trailhead: req.body.trailhead,
    description: req.body.description,
    length: req.body.length,
    time: req.body.time,
    image: req.body.image,
    imageDescription: req.body.imageDescription,
    map: req.body.map,
    note: null,
  };
  Saved.create(savedTrail);
  res.redirect("user/dashboard");


