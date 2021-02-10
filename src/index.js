
exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0){
    return 0;
  }
  return array.sort((a,b)=>a-b)[0];
};

exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0){
    return 0;
  }
  return array.sort((a,b)=>b-a)[0];
};

exports.avg = function avg (array) {
  if (arguments.length == 0 || array.length == 0){
    return 0;
  }
  return array.reduce((sum, current) => sum + current)/array.length;  
};
