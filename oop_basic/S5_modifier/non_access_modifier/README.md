#　非权限修饰符 Non Access Modifiers

除了权限修饰符之外，其他的修饰符有:

```
final / static / abstract / native / transient / synchronized / volatile
```

## Static

场景: 多个对象共享同一份数据

**一旦用了`static`关键字，那么这样的内容不再属于对象自己，而是属于类的，所以凡是本类的对象，都共享同一份**

### 静态属性

被`static`修饰的成员变量

- 某个对象实例更改其类的`Static`类属性，其类下的所有实例的该属性都会随之改变
- 自动增加的ID值

### 静态方法

一旦使用`static`修饰成员方法，那么这就成了静态方法．静态方法属于类，而不属于对象实例

如果没有`static`关键字，那么必须先创建对象，然后通过对象才能使用它．

```
public class Demo02StaticMethod {
    public static void main(String[] args) {
        MyClass obj = new MyClass(); // 创建对象
        //　然后才能使用没有`static`关键字的内容
        obj.method();
        
        //对于静态方法来说，可以通过对象名进行调用，但推荐使用类名称来调用
        obj.methodStatic(); // 正确,不推荐,这种写法在被编译之后也会被javac翻译成 "类名称.静态方法名"
        MyClass.methodStatic(); // 正确，推荐
        
        //　对于本类当中的静态方法，可以省略类名称
        myMethod();
        Demo02StaticMethod.myMethod(); //　与上一行完全等效
    }
    
    public static void myMethod() {
        System.out.println("自己的方法！");
    }
}
```

### 注意事项

1. 静态不能直接访问非静态，只能访问静态内容．

原因:因为在内存当中是**先**有静态内容，**后**有非静态内容．
＂先人不知道后人，后人知道先人＂

2. 静态方法当中不能用`this`

原因: this代表当前对象，通过谁调用的方法，谁就是当前对象，而静态方法没有通过对象调用．

### `static`的内存示意图

根据类名称访问静态成员变量的时候，全程和对象没关系，只和类有关系．

静态内容存放于方法区中的静态区

### 静态代码块

Syntax:

```
public class 类名称{
    static {
        代码块;
    }
}
```

特点: 当第一次用到本类时，静态代码块执行唯一一次

## final

`final`关键字代表最终的，不可变的．

可以修饰**一个类**,**一个方法**,**一个局部变量**,**一个成员变量**

### 修饰＂类＂

被`final`修饰的类无法有子类了．其所有的成员方法都无法被覆盖重写(没有子类就没有办法覆盖重写):

```
public final class MyClass {
    public void method(){
        doSomeThing();
    }
}
```

`MyClass`无法再有子类

```
public class subClass extends MyClass { // 报错
    
}
```

### 修饰＂方法＂

- 当`final`修饰方法时，该方法即最终方法，无法被覆盖重写:

```
public class Fu {
    public final void method(){
        System.out.println("method Fu");
    }
}
```

`method`方法无法被子类方法覆盖重写

```
public class Zi extends Fu{
    @Override
    public void method(){ // 'method()' cannot override 'method()'; overridden method is final
        System.out.println("method Zi");
    }
}
```

- `final` 和　`abstract`无法同时使用（`fianl`无法覆盖重写，`abstract`必须覆盖重写）:
 
```
public abstract class Fu {
    public final abstract void method(){ // Illegal combination of modifiers: 'abstract' and 'final'
        System.out.println("method Fu");
    }
}
```

### 修饰＂局部变量＂

- 一旦用final来修饰局部变量，那么这个变量就不可改变．
 
```
final int num = 1; // 一次赋值，终生不变
```

```
final int num; //　报错
num = 1;
```

- 对于基本类型来说，不可变是指变量中的数据不可改变
- 对于引用类型来说，不可变是指变量当中的地址值不可变，但是其内部数据可以发生变化:
    - 地址值不可改变
        ```
        public abstract class Fu {
            public static void main(String[] args) {
                final int[] myArray = {1, 2, 3, 5};
                System.out.println(myArray);
                System.out.println("================");
                myArray = new int[]{1, 2, 3, 4}; // Cannot assign a value to final variable 'myArray'
                System.out.println(myArray);
            }
        }
        ```
    - 内部数据可以改变
        ```
        public abstract class Fu {
            public static void main(String[] args) {
                final ArrayList<Integer> myArray = new ArrayList<>(Arrays.asList(1, 2, 3, 5));
                System.out.println(myArray); // [1, 2, 3, 5]
                System.out.println("================");
                myArray.add(6);
                System.out.println(myArray); // [1, 2, 3, 5, 6]
            }
        }
        ```
    
### 修饰＂成员变量＂

- 由于成员变量有默认值，所有用了`final`之后必须手动赋值，不会再给默认值
- 对于`final`的成员变量，要么使用直接复制，要么通过构造方法进行赋值，二者选其一
    - 通过构造方法进行赋值的时候，必须保证类中所有重载的构造方法都会对`final`成员变量进行赋值
    ```
    public class Person {
        private final String name;
    
        public Person(String name) {
            this.name = name;
        }
    
        public Person() {
            name = "defaultName";
        }
    }
    ```

## abstract

### 抽象方法与抽象类

- 抽象类: 普通类的定义方法加上`abstract`关键字
    - `public abstract class 类名称 {}`
- 抽象方法: 加上`abstract`关键字，然后去掉大括号，直接分号结束
    - `public abstract 返回值类型 方法名称();`
    - 抽象方法必须在抽象类当中

### 抽象方法与抽象类的使用

- 不能直接创建`new`抽象类对象
- 必须用一个子类来继承抽象父类
- 子类必须覆盖重写抽象父类当中的所有抽象方法
- 创建子类对象进行使用

### 注意事项

1. 抽象类不能创建对象，如果创建，编译无法通过而报错．只能创建其非抽象子类的对象
2. 抽象类中，可以有构造方法，是供子类创建对象时，初始化父类成员使用
3. 抽象类中，不一定包含抽象方法，但是有抽象方法的类必定是抽象类
4. 抽象类的子类，必须重写抽象父类中的所有抽象方法，否则，编译无法通过而报错，除非该子类也是抽象类．

## synchronized

`synchronized`修饰符用于指明被修饰的方法在同一时间点只能被一个线程访问，他可以和任何权限修饰符共用

```
public synchronized void showDetails() {
   .......
}
```

## transient

1. 一旦变量被transient修饰，变量将不再是对象持久化的一部分，该变量内容在序列化后无法获得访问。

2. transient关键字只能修饰变量，而不能修饰方法和类。注意，本地变量是不能被transient关键字修饰的。变量如果是用户自定义类变量，则该类需要实现Serializable接口。

3. 被transient关键字修饰的变量不再能被序列化，一个静态变量不管是否被transient修饰，均不能被序列化。


## volatile

Java语言提供了一种稍弱的同步机制，即volatile变量，用来确保将变量的更新操作通知到其他线程。当把变量声明为volatile类型后，编译器与运行时都会注意到这个变量是共享的，因此不会将该变量上的操作与其他内存操作一起重排序。volatile变量不会被缓存在寄存器或者对其他处理器不可见的地方，因此在读取volatile类型的变量时总会返回最新写入的值。

在访问volatile变量时不会执行加锁操作，因此也就不会使执行线程阻塞，因此volatile变量是一种比sychronized关键字更轻量级的同步机制。
　　
当对非 volatile 变量进行读写的时候，每个线程先从内存拷贝变量到CPU缓存中。如果计算机有多个CPU，每个线程可能在不同的CPU上被处理，这意味着每个线程可以拷贝到不同的 CPU cache 中。

而声明变量是 volatile 的，JVM 保证了每次读变量都从内存中读，跳过 CPU cache 这一步。

## native 

用来调用本地的（C/C++）语言

