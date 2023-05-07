export class Employee {

  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  age: number;
  gender: string;

  constructor( firstName: string, lastName: string, address: string, phoneNumber: string, age: number, gender: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.gender = gender;
  }
}
