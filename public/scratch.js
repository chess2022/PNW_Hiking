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


        <!-- <h1> <span class="output"></span></h1>
    <div class="results">
            <div class="list" id="trails">
                <% trails.forEach(trail => { %>
                <a id="trailBoxes" href="/trails/<%=trail._id; %>"> 
                    <div id="trailImg"><img src="<%=trail.image; %>"></div>
                    <div id="trailName"><h4><%= trail.name %></h4></div>
                </a>
                 <% }) %>
            </div>  
    </div> -->

    <button onclick="getOption()"></button>

// router.get("/dashboard/:id", async (req, res) => {
//     Trail.findById(req.params.id,(err, trail) => {
//       console.log(trail);
//         savedTrail = {
//           username: req.session.username,
//           name: trail.name,
//           location: trail.location,
//           trailhead: trail.trailhead,
//           description: trail.description,
//           length: trail.length,
//           time: trail.time,
//           image: trail.image,
//           imageDescription: trail.imageDescription,
//           map: trail.map,
//           note: null,
//         };
//       if (req.session.loggedIn) {
//         Saved.create(savedTrail, (error, Saved) => {
//           console.log(error);
//           res.redirect("/user/dashboard");
//         });
//       }
// })
// })

// Routes for a simplified version of this app

// // Delete
// router.delete("/hikes/:id", (req, res) => {
//     if (req.session.loggedIn) {
//     Trail.findByIdAndDelete(req.params.id, (err, trail) => {
//       res.redirect("/hikes", { trail });
//       });
//     }
// });

// // Update to data file
// router.put("/hikes/:id", (req, res) => {
//     Trail.findByIdAndUpdate(req.params.id, req.body, (err, updatedTrail) => {
//       if (err) return res.send(err);
//       res.redirect(`/hikes/${req.params.id}`);
//     });
//   });

// // Edit show page
// router.get("/hikes/:id/edit", (req, res) => {
//   Trail.findById(req.params.id, (err, trail) => {
//     res.render("edit.ejs", { trail, index: req.params.id });
//   });
// });


/****************************************/
/* Image Enlargement Modal */
/****************************************/

/* #map:hover, #trailImg:hover {
    opacity: 0.7;
} */


/* The Modal (background) */
/* .modal1, .modal2 {
  display: none; /* Hidden by default 
  position: fixed; /* Stay in place 
  z-index: 1; /* Sit on top 
  padding-top: 100px; /* Location of the box 
  left: 0;
  top: 0;
  width: 100%; /* Full width 
  height: 100%; /* Full height 
  overflow: auto; /* Enable scroll if needed 
  background-color: rgb(0,0,0); /* Fallback color 
  background-color: rgba(0,0,0,0.9); Black w/ opacity
} */

/* Modal Content (Image) */
/* .modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
} */

/* Caption of Modal Image (Image Text) - Same Width as the Image */
/* #caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
} */

/* Add Animation - Zoom in the Modal */
/* .modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
} */

/* @keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
} */

/* The Close Button */
/* .close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
} */

/* .close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
} */

/* 100% Image Width on Smaller Screens */
/* @media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
} */
/****************************/
/* END MODAL */
/****************************/
