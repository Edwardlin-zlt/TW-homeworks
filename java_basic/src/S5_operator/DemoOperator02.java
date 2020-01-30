package S5_operator;

public class DemoOperator02 {
    public static void main(String[] args) {
        int i = 10;
        int n = i++%5;
        int ii = 10;
        int nn = ++ii % 5;
        System.out.println(i);
        System.out.println(n);
        System.out.println(ii);
        System.out.println(nn);
    }
}
