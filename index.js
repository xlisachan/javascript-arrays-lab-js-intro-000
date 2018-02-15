const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

funciton destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kitten.shift();
}

function appendKitten(name){
  var newKittens = kittens.push(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = kittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
