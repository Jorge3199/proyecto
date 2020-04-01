const { format, register } = require('timeago.js');
// const timeagoInstance = timeago();
const localeFunc = (number, index, total_sec) => {
   // number: the timeago / timein number;
   // index: the index of array below;
   // total_sec: total seconds between date to be formatted and today's date;
   return [
     ['justo ahora', 'right now'],
     ['Hace %s segundos', 'in %s seconds'],
     ['Hace 1 minuto', 'in 1 minute'],
     ['Hace %s minutos', 'in %s minutes'],
     ['Hace 1 hora', 'in 1 hour'],
     ['Hace %s horas', 'in %s hours'],
     ['Hace 1 dia', 'in 1 day'],
     ['Hace %s días', 'in %s days'],
     ['Hace 1 semana', 'in 1 week'],
     ['Hace %s semanas', 'in %s weeks'],
     ['Hace 1 mes', 'in 1 month'],
     ['Hace %s meses', 'in %s months'],
     ['Hace 1 años', 'in 1 year'],
     ['Hace %s años', 'in %s years']
   ][index];
 };
 // register your locale with timeago
 register('es_ES', localeFunc);
 
//  // use it
//  format('2016-06-12', 'es_ES');
const helpers = {};

helpers.timeago = (timestamp) => {
  
   return format(timestamp, 'es_ES');
   
};

module.exports = helpers;