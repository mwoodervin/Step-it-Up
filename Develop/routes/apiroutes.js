const apiRouter = require("express").Router();
const db = require("../models");


// get route for most recent workout
apiRouter.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({ date: -1})
    .then(dbWorkout => {
    res.json(dbWorkout);
    })
    .catch(err => {
    res.status(400).json(err);
    });
});

// put route to add an exercise to a workout by ID
// apiRouter.put("/api/workouts/:id", ({ body, params }, res) => {
//     db.Workout.findByIdAndUpdate(
//         {
//             _id: 
//         },
//     {
//     $push: {
//         exercise: exercise
//         }
//     },
// (error, edited) => {
//     if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
// })
// });

// post route to create workouts
apiRouter.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
});


// get route for workouts in range
// This gets all workouts - not sure about the "range" part
apiRouter.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
    res.json(dbWorkout);
    })
    .catch(err => {
    res.status(400).json(err);
    });
});

module.exports = apiRouter;