import { Users } from "./user.model.js";
import { Progress } from "./progress.model.js";
import { Routines } from "./routine.model.js";
import { RoutineExercises } from "./routineExercise.model.js";

Users.hasMany(Routines, { foreignKey: 'id_user' });
Routines.belongsTo(Users, { foreignKey: 'id_user'});

Routines.hasMany(RoutineExercises, {foreignKey: 'id_routine'})
RoutineExercises.belongsTo(Routines, {foreignKey: 'id_routine'});

Users.hasMany(Progress, { foreignKey: 'id_user' });
Progress.belongsTo(Users, { foreignKey: 'id_user'});