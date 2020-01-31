package S6_Statements;

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
