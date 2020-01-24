## 用八种基本类型分别定义一个变量并赋值，再打印，上传打印结果

结果:
```$xslt
3
4
5
6
7.0
8.0
true
a
```

代码:
```$xslt
package S4_Java_data_type;

public class StringMethods {
    public static void main(String[] args) {
        String strLength = "Edward";
        System.out.println(strLength.length());

        String strIndexOf = "Amons";
        System.out.println(strIndexOf.indexOf('o'));

        String strCharAt = "ThoughtWorks";
        System.out.println(strCharAt.charAt(2));

        String strStartWith = "YouKnowWhat";
        System.out.println(strStartWith.startsWith("You"));

        String strEndsWith = "foo";
        System.out.println(strEndsWith.endsWith("o"));

        String strSubString = "Give me 100";
        System.out.println(strSubString.substring(8, 10));
    }
}
```

## 自己创建字符串再调用它的length indexOf charAt startWith endsWith subString方法并打印(每个方法都创建一个新的字符串)，上传打印结果

结果:
```$xslt
6
2
o
true
true
10
```

代码: 
```$xslt
package S4_Java_data_type;

public class StringMethods {
    public static void main(String[] args) {
        String strLength = "Edward";
        System.out.println(strLength.length());

        String strIndexOf = "Amons";
        System.out.println(strIndexOf.indexOf('o'));

        String strCharAt = "ThoughtWorks";
        System.out.println(strCharAt.charAt(2));

        String strStartWith = "YouKnowWhat";
        System.out.println(strStartWith.startsWith("You"));

        String strEndsWith = "foo";
        System.out.println(strEndsWith.endsWith("o"));

        String strSubString = "Give me 100";
        System.out.println(strSubString.substring(8, 10));
    }
}
```

You can find my code at: <https://github.com/Edwardlin-zlt/TW-homeworks/tree/master/java_basic/src/S4_Java_data_type>