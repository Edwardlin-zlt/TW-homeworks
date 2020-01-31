## 1.分别用 for 语句和 while 语句写一个无限循环。

Answer:
* For Loop:

```
public class InfiniteLoop {
    public static void main(String[] args) {
        int i = 0;
        for (;;){
            System.out.println("For Loop: " + i++);
        }
    }
}
```

* While Loop:

```
public class InfiniteLoopWhile {
    public static void main(String[] args) {
        int i = 0;
        while (true) {
            System.out.println("While Loop " + i++);
        }
    }
}
```
## 2.写一段代码来区分break和continue跳出循环的方式。

Answer:

* break out a loop:

```
public class BreakLoop {
    public static void main(String[] args) {
        int i = 0;
        while (true) {
            if (i > 10) break;
            System.out.println("Loop: " + i);
            i++;
        }
    }
}
```

* continue to next loop:

```
public class BreakLoop {
    public static void main(String[] args) {
        int i = 0;
        while (true) {
            if (i > 10) break;
            System.out.println("Loop: " + i);
            i++;
        }
    }
}
```

## 3.考虑以下代码片段：

```
if (aNumber >= 0)
    if (aNumber == 0)
        System.out.println("first string");
else System.out.println("second string");
System.out.println("third string");
```

a. 当 aNumber = 3 时代码的输出时什么，并解释为什么

b. 重构代码，使其更容易理解

Answer:

* Out:

```
second string
third string
```

程序指明当`aNumber >= 0`时，如果`aNumber == 0`，则输出`first string`;其他情况下输出`second string`，最后一定会执行输出`third string`。

所以这里当`aNumber = 3`的时候，先输出`second string`，最后输出`third string`

* 使用`switch case`重构代码：

```
if (aNumber >= 0) {
    switch (aNumber) {
        case 0:
            System.out.println("first string");
            break;
        default:
            System.out.println("second string");
    }
    System.out.println("third string");
}
```

## 4.输入三个整数x,y,z，请把这三个数由小到大输出。

```
public class AscendNumber {
    public static void main(String[] args) {
        int x = 10, y = 8, z = 9;
        threeNumSort(x, y, z);
    }

    public static void threeNumSort(int num1, int num2, int num3) {
        int max = num1;
        int min = num2;
        int meddle;
        if (num1 > num2) {
            if (num3 < min) {
                meddle = min;
                min = num3;
            } else if (num3 > max) {
                meddle = max;
                max = num3;
            } else {
                meddle = num3;
            }
        } else {
            max = num2;
            min = num1;
            if (num3 < min) {
                meddle = min;
                min = num3;
            } else if (num3 > max) {
                meddle = max;
                max = num3;
            } else {
                meddle = num3;
            }
        }
        System.out.println("Max: " + max + "\nMeddle: " + meddle + "\nMin: " + min);
    }
}
```
## 5.写一个程序，判断一个给定的数是不是质数。

```
public class PrimeNumber {
    public static void main(String[] args) {
        int number = 3;
        System.out.println(isPrime(number));
    }

    private static boolean isPrime(int srcNum) {
        double sqrt = Math.sqrt(srcNum);
        if (srcNum < 2) {
            return false;
        }
        if (srcNum == 2 || srcNum == 3) {
            return true;
        }
        if (srcNum % 2 == 0) {
            return false;
        }
        for (int i = 3; i <= sqrt; i+=2) {
            if (srcNum % i == 0) {
                return false;
            }
        }
        return true;
    }
}
```