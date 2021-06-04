const db= require ("../models");
const express = require("express");
const app = express();


    app.get ("/api/workouts", (req, res)=>{
        db.Workout.find ()
        .then (dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    // app.get ("/api/workouts", (req, res)=>{
    //     db.Workout.aggregate(
    //         [
    //             {
    //                 $addFields: {
    //                     totalDuration:{
    //                         $sum:"$exercises.duration"
    //                     }
    //                 }
    //             }
    //         ]
    //     )
    //     .then (dbWorkout => {
    //         console.log(dbWorkout);
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        
        .catch(err => {
            res.json(err);
        });
    });
    
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
    });

    
module.exports=app;