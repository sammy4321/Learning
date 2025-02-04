using System;
using all_files;

public class Program
{
    public static void Main()
    {
        int age = 18;
        string firstName = "Samarth";
        string lastName = "Mohan";
        string[] names = { "Alice", "Bob", "Charlie" };

        if (age > 18)
        {
            Console.WriteLine("Greater than 18");
        }
        else if (age < 18)
        {
            Console.WriteLine("Less than 18");
        }
        else
        {
            Console.WriteLine("Equal to 18");
        }

        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine(i);
        }

        foreach (var name in names)
        {
            Console.WriteLine(name);
        }

        Console.WriteLine(firstName);

        Person person = new Person(18, "Samarth", "Mohan");
        Console.WriteLine($"Age: {person.Age}, First Name: {person.FirstName}, Last Name: {person.LastName}");
        Console.WriteLine(person.return_fullname("Sample Message"));
        Pair<int> p = new Pair<int>(1,2);
        Console.WriteLine(p.GetValues());
        Console.WriteLine((int)DayOfWeek.Sunday);
        Console.WriteLine(DayOfWeek.Sunday);

        // Create instances of the concrete payment processors.
        IPaymentProcessor creditCard = new CreditCardProcessor();
        IPaymentProcessor payPal = new PayPalProcessor();

        // Create an instance of PaymentService.
        PaymentService service = new PaymentService();

        // Process a credit card payment.
        service.MakePayment(creditCard, 100.00m);

        // Process a PayPal payment.
        service.MakePayment(payPal, 150.50m);

    }
}

public class Person
{
    public int Age { get; }
    public string FirstName { get; }
    public string LastName { get; }

    public Person(int age, string firstName, string lastName)
    {
        Age = age;
        FirstName = firstName;
        LastName = lastName;
    }

    public string return_fullname(string message){
        return FirstName + LastName + message;
    }
}

public class Pair<T> {
    public T X {get; set;}
    public T Y {get; set;}
    public Pair(T x,T y){
        X = x;
        Y = y;
    }
    public void display(){
        Console.WriteLine($"x: {X}, y: {Y}");
    }
    public (T,T) GetValues(){
        return (X,Y);
    }
}

public enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

public interface IPaymentProcessor
{
    // Method to process a payment.
    void ProcessPayment(decimal amount);
}
public class CreditCardProcessor : IPaymentProcessor
{
    public void ProcessPayment(decimal amount)
    {
        // Implementation for processing credit card payments.
        Console.WriteLine($"Processing credit card payment of {amount:C}");
    }
}
public class PayPalProcessor : IPaymentProcessor
{
    public void ProcessPayment(decimal amount)
    {
        // Implementation for processing PayPal payments.
        Console.WriteLine($"Processing PayPal payment of {amount:C}");
    }
}
public class PaymentService
{
    public void MakePayment(IPaymentProcessor paymentProcessor, decimal amount)
    {
        // Polymorphic call: the correct ProcessPayment implementation is invoked
        paymentProcessor.ProcessPayment(amount);
    }
}
