package S6_Statements;

public class ContinueLoop {
    public static void main(String[] args) {
        for (int i=0; i<=10; i++){
            if (i == 5) continue;
            System.out.println("Loop: " + i);
        }
    }
}
