const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var newKittens = kittens.push(name);
  return newKittens;
}

function prependKitten(name){
  newKittens = kittens.unshift(name);
  return newKittens;
}

function removeLastKitten(){
  newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten(){
  newKittens = kittens.slice(1);
  return newKittens;
}
