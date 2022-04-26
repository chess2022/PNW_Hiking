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


  Saved.create(
    savedTrail.username = req.session.currentUser,   
    savedTrail.name = req.body.name,
    savedTrail.location = req.body.location,
    savedTrail.trailhead = req.body.trailhead,
    savedTrail.description = req.body.description,
    savedTrail.length = req.body.length,
    savedTrail.time = req.body.time,
    savedTrail.image = req.body.image,
    savedTrail.imageDescription = req.body.imageDescription,
    savedTrail.map = req.body.map,
    savedTrail.note = null, (err, savedTrail) => {

router.post("/dashboard", async (req, res) => {
	  Saved.create(req.body, (err, savedTrail) => {
    res.redirect("/user/dashboard")
  });
});



    Saved.create(savedTrail, (error, Saved) => {
      console.log(error)
      res.redirect("/user/dashboard");
    });

        db.collection("Saved").insertOne(savedTrail);
    res.redirect("/user/dashboard");


router.get("/dashboard/:id", async (req, res) => {
    Trail.findById(req.params.id,(err, trail) => {
      console.log(trail);
      // savedTrail = {
      //   username: req.session.username,
      //   name: trail.name,
      //   location: trail.location,
      //   trailhead: trail.trailhead,
      //   description: trail.description,
      //   length: trail.length,
      //   time: trail.time,
      //   image: trail.image,
      //   imageDescription: trail.imageDescription,
      //   map: trail.map,
      //   note: null,
      // };
      // Saved.create(savedTrail, (error, Saved) => {
      //   console.log(error);
      //   res.redirect("/user/dashboard");
      // });
})
})

            <!-- <a href="/user/hikes/:id" ><button class="saveMe">Save Trail</button></a> -->

            <!-- The Modal -->
            <div id="mapModal" class="modal1">
            <!-- The Close Button -->
            <span class="close">&times;</span>
            <!-- Modal Content (The Image) -->
            <img class="modal-content" id="mapLrg" src="<%= trail.map %>"></div>
                <!-- The Modal -->
            <div id="imgModal" class="modal2">
            <!-- The Close Button -->
            <span class="close">&times;</span>
            <!-- Modal Content (The Image) -->
            <img class="modal-content" id="trailImgLrg" src="<%= trail.image %>">
            <div id="caption"><%= trail.imageDescription %></div></div>



    // let value = $locations.val();
    // $button.on("click", () => {

    document.getElementById("trails").style.display = "grid";
