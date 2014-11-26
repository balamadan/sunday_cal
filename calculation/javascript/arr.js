// JavaScript Document
/*var student = new Array();

student[0] = "Bala";
student[1] = "jothi";
student[2] = "saravana";


var student = ["bala","jothi","saravana"];

for(s in student)
{
	document.writeln(student[s] + "<br>");
}*/

var d= new Date();

var dt = d.getFullYear();
document.writeln(dt);
var da = d.getDay();

switch(da)
{
	case 0:
	document.writeln("sunday");
	break;
	
	case 1:
	document.writeln("monday");
	break;
	
	default:
	document.writeln("Holiday");
}



*/

/*var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF000";
	cxt.beginPath();
	cxt.arc(70,50,40,0,Math.PI*2,true);
	cxt.arc(120,50,10,0,Math.PI*2,true);
	cxt.arc(170,50,40,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();


var pri = [
{"Name":"Bala","BloodGroup":"0 +ve"},
{"Name":"Jothi","BloodGroup":"B +ve"},
{"Name":"Saravana","BloodGroup":"B +ve"}
];

function result(a)
{
	document.writeln("Detail are:");
	for(i=0;i<a.length;i++)
	{
		document.writeln(a[i].Name + ","+a[i].BloodGroup);
		
	}
}
result(pri);


var s=1;
function isUndefined(value)
	{
	return typeof value == 'undefined';
	}
var f=isUndefined(s);	
console.log(f);


var a;
function isDefined(value)
{
	return typeof value != 'undefined';
}
var a = isDefined(a);
console.log(a);




var ar = ['a','b','c'];
function isObject(value)
{
	
	return value != null && typeof value == 'object';
}
var s = isObject(ar);
console.log(s);




var s= 10;
function isString(value)
{
	return typeof value == 'string';
}
var ot = isString(s);
console.log(ot);



var n = 10;
function isNumber(value)
{
	return typeof value == 'number';
}
var ot = isNumber(n);
console.log(ot);






function isDate(value)
{
  return toString.apply(value) == '[object Date]';
}
var d = new Date();
var s = isDate(d);
console.log(s);




function isArray(value) {
  return toString.apply(value) == '[object Array]';
}


function isFunction(value){
	return typeof value == 'function';
	}
	
var a = isFunction(isBoolean);
console.log(a);


var a=10;
function isBoolean(value) {
  return typeof value == 'boolean';
}
var a = isBoolean(a);
console.log(a);



function Kbject(name,bala){
this.name=name;
this.bala=bala;
var fu=function{
alert(this.name+"====>>>"+name);
alert(this.bala+"====>>>"+bala);
}
}
var kk="kk";
var ks="ks";
Kbject(kk,ks);
kb.fu();

function User (theName, theEmail) {
	this.name = theName;
	this.email = theEmail;
	this.quizScores = [];
	this.currentScore = 0;
	}
	​
	User.prototype = {
	constructor: User,
	saveScore:function (theScoreToAdd) {
	this.quizScores.push(theScoreToAdd)
	},
	showNameAndScores:function () {
	var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
	return this.name + " Scores: " + scores;
	},
	changeEmail:function (newEmail) {
	this.email = newEmail;
	return "New Email Saved: " + this.email;
	}
	}
	
	firstUser = new User("Richard", "Richard@examnple.com");
	firstUser.changeEmail("RichardB@examnple.com");
	firstUser.saveScore(15);
	firstUser.saveScore(10);
	​
	firstUser.showNameAndScores(); //Richard Scores: 15,10​
	​
	​// Another User​
	secondUser = new User("Peter", "Peter@examnple.com");
	secondUser.saveScore(18);
	secondUser.showNameAndScores(); //Peter Scores: 18
*/

function kl(theName,theEmail) {
	this.name = theName;
	this.email = theEmail;
	this.quizScores = [];
	this.currentScore = 0;
	}
	alert(kl.prototype.constructor);
alert(kl.constructor);
alert(kl.prototype);
kl.prototype.constructor = kl;
alert(kl.prototype.constructor);
alert("===kl"+kl);
