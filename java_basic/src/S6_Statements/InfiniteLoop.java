package S6_Statements;

public class InfiniteLoop {
    public static void main(String[] args) {
        int i = 0;
        for (;;){
            System.out.println("For Loop: " + i++);
        }
    }
}
