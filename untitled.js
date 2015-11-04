var Character = function(name, hp, attack1, attack2, special) {
  this.name;
  this.hp;
  this.attack1;
  this.attack2;
  this.special;

  this.attack1 = function attack1 (opponent) {
    var hitChance = Math.random();
    if (hitChance > .3 && hitChance <.7) {
      opponent.hp -= 10;
      alert(this.name);
    } else if (hitChance >.71){
      opponent.hp -=25;
      alert(this.name);
    }else{
      alert(this.name + " missed!!!!");
    }
    }
  this.attack2 = function attack2 (opponent) {
    var hitChance = Math.random();
    if (hitChance > .4 && hitChance <.8) {
      opponent.hp -= 20;
      alert(this.name);
    } else if (hitChance >.81){
      opponent.hp -= 45;
      alert(this.name);
    }else{
      alert(this.name + " missed!!!!");
    }
    }
     this.special = function special (opponent) {
    var hitChance = Math.random();
    if (hitChance > .7) {
      opponent.hp -= 50;
      alert(this.name);
    }else{
      alert(this.name + " missed!!!!");
    }
    }

}
var Domingo = new Character("Domingo", 100, "Iron Fist", "Super Kick", "Skull Crush");
var Mike = new Character("Mike", 100, "Sabre Slash", "Force Push", "Force Awaken");



Domingo.attack1(Mike)
alert(Mike.name + " has" + Mike.hp + " hp left");
