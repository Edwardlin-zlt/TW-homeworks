function test() {
   console.log(a);
   console.log(foo());
   
   // var a = 1;
   // console.log(a);
   function foo() {
      return 2;
   }
}
 
test();