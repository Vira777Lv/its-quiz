	"use strict"
class Animal
{

  constructor(name)
  {
    this.name = name;
  }

  getName()
  {
   return this.name
  }
}

class Duck extends Animal
{
  quack()
  {
    super.getName()
    return "Duck " + this.name + " " + "is quacking";
  }
}


var duck = new Duck ("Donald");

duck.getName () === "Donald"; // true

duck.quack () === "Duck Donald is quacking"; // true

