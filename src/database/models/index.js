import { Users } from "./user.model.js";
import { Routines } from "./routine.model.js";
import { RoutineExercises } from "./routineExercise.model.js";
import { Series } from "./series.model.js";
import { Sessions } from "./session.model.js";

Users.hasMany(Routines, { foreignKey: 'id_user' });
Routines.belongsTo(Users, { foreignKey: 'id_user'});

Routines.hasMany(RoutineExercises, {foreignKey: 'id_routine'})
RoutineExercises.belongsTo(Routines, {foreignKey: 'id_routine'});

Users.hasMany(Sessions, { foreignKey: 'id_user' });
Sessions.belongsTo(Users, { foreignKey: 'id_user'});

Sessions.hasMany(Series, {foreignKey: 'id_session'});
Series.belongsTo(Sessions, {foreignKey: 'id_session'})