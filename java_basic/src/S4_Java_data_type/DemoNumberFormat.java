package S4_Java_data_type;

import java.text.NumberFormat;

public class DemoNumberFormat{
    public static void main(String[] args) {
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        String result = currency.format(12345678.871);
        System.out.println(result);
    }
}