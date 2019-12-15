var obj = { name: "iceman" };

function fn() {
  console.log(this);
  console.log(this.name);
  console.log("---------split----------");
}

fn();
fn.call(obj);
