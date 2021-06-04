const mongoose= require("mongoose");
const Schema= mongoose.Schema;
const Workout= new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true,
                required: "This is a required field!"
            },
            distance: Number,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});
Workout.virtual("totalDuration").get (function(){
    let totalDuration=0;
    this.exercises.forEach(exercise=>{
        totalDuration+=exercise.duration;
    
    });
    return totalDuration;
});
Workout.set ('toJSON', { virtuals:true});
const Workouts= mongoose.model("Workouts", Workout);
module.exports=Workouts;