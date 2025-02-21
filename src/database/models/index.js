import { Users } from "./user.model.js";
import { Rutines } from "./rutine.model.js";
import { RutineExercises } from "./rutineExercise.mode.js";
import { Progress } from "./progress.model.js";

Users.hasMany(Rutines, { foreignKey: 'id_user' });
Rutines.belongsTo(Users, { foreignKey: 'id_user'});

Rutines.hasMany(RutineExercises, {foreignKey: 'id_rutine'})
RutineExercises.belongsTo(Rutines, {foreignKey: 'id_rutines'});

Users.hasMany(Progress, { foreignKey: 'id_user' });
Progress.belongsTo(Users, { foreignKey: 'id_user'});