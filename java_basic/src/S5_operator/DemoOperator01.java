package S5_operator;

public class DemoOperator01 {
    public static void main(String[] args) {
        int a = 3;
        int b = 4;
        b++;
        System.out.println(b);
        int result = b*12+(b--)+a*(b--);
        System.out.println(b);
        System.out.println(result);
    }
}
