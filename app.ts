
//!DZ
// 1 Реалізувати клас "Адреса" (Address) з властивостями "вулиця" (street), "місто" (city) і "поштовий індекс" (postalCode).


class Address {
    street: string;
    city: string;
    postalCode: number;
    
    constructor(street: string, city: string, postalCode: number){
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }
    
    logAddress(): void {
        console.log('I live in ' + this.city + ', on ' + this.street + ', postal code: ' + this.postalCode);
    }

     toString(): string {
        return 'Street: ' + this.street + ', City: ' + this.city + ', Postal Code: ' + this.postalCode;
    }
}

const myAddress = new Address('Banderu', 'Rivne', 12345);
myAddress.logAddress();


//  Потім створити клас "Клієнт" (Customer) з властивостями "ім'я" (name), "вік" (age) і "адреса" (address), який може відображати повну інформацію про клієнта.

class Customer {
    name: string;
    age: number;
    address: Address;

    constructor(name: string, age: number, address: Address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    
    printCustommerInpho(): void {
        
        console.log('client: ' + this.name + ', ' + 'age: ' + this.age + ', ' + this.address);
    }
}
const client = new Customer('Ildar', 33, myAddress);
client.printCustommerInpho()





// 2 3 Реалізувати інтерфейс "Фігура" (Shape) з методом "обчислити площу" (calculateArea). 

interface Shape {
    square(): number
}


// Створити класи "Прямокутник" (Rectangle) і "Коло" (Circle), які реалізовують інтерфейс "Фігура". 

// Кожен клас повинен мати відповідні властивості та методи для обчислення площі.

class Rectangle implements Shape {
    width: number
    height: number

    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }

    square(): number {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(20, 20)
console.log(rectangle.square());

class Circle implements Shape {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    square(): number {
        return Math.floor(Math.PI * this.radius * this.radius)
    }
}

const cirlce = new Circle(20)
console.log(cirlce.square());





// 3 Реалізувати клас "Магазин" (Store) з властивістю "назва" (name) та методами для додавання товарів до магазину, видалення товарів з магазину і 
// відображення списку товарів у магазині. Використовувати масив для зберігання товарів у магазині.                                                                                 
class Store {
    name: string;
    products: string[];

    constructor(name: string) {
        this.name = name;
        this.products = [];
    }

    addTovar(product: string): void {
        this.products.push(product);
        this.logAssortiment()
    }

    deleteTovar(product: string): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
        this.logAssortiment()
    }

    logAssortiment(): void {
        console.log('Товари в ' + this.name + ':');
        for (const product of this.products) {
            console.log(product);
        }
    }
}


const store = new Store('Eldorado');

store.addTovar('Xbox');
store.addTovar('PS');
store.addTovar('Nintendo');
// store.logAssortiment();

store.deleteTovar('PS');
// store.logAssortiment();
