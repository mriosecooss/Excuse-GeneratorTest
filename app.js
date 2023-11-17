let who = ['El perro', 'Mi abuela', 'La Tortuga', 'Mi Ave', 'Mi mama'];
let action = ['comio', 'orino', 'trituro', 'rompio', 'extravio', 'escondio', 'robo'];
let what = ['mi tarea', 'las llaves', 'el auto', 'mis cremas', 'mi libro', 'mi notebook'];
let when = ['antes de la clase', 'justo a tiempo', 'antes de empezar el dia', 'durante el almuerzo', 'mientras almorzaba'];

function excuseGenerator(Who, Action, What, When) {
  numWho = Math.floor(Math.random() * who.length);
  numAction = Math.floor(Math.random() * action.length);
  numWhat = Math.floor(Math.random() * what.length);
  numWhen = Math.floor(Math.random() * when.length);

  return Who[numWho] + " " + Action[numAction] + " " + What[numWhat] + " " + When[numWhen] + " "
}

console.log(excuseGenerator(who, action, what, when));
