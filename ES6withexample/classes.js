//A class is a blueprint for the object. You can create an object from the class.
class test{
     constructor(a,b){
          this.a=a;
          this.b=b;
          console.log("i am the constructor hhhh");
     }
     add(){
          console.log(this.a+this.b)
     }
}
//new test(10,20).add();
let ref = new test(10,20);
ref.add();