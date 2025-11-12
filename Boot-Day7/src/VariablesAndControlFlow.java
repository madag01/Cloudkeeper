import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class VariablesAndControlFlow {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Sum of digits
        System.out.println("enter digits for sum");
        int num = sc.nextInt();

        int sum = 0;
        while (num != 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println("Sum = " + sum);

        //Multiplication Table
        System.out.println("enter number to print table");
        num = sc.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }

        //Factorial calculator
        System.out.println("enter number for factorial");
        num = sc.nextInt();

        long fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }

        System.out.println("Factorial = " + fact);

        //Reverse a number
        System.out.println("enter number to reverse");
        num = sc.nextInt();

        int rev = 0;
        while (num != 0) {
            rev = rev * 10 + (num % 10);
            num /= 10;
        }

        System.out.println("Reversed = " + rev);
    }
}