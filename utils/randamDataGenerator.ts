import { fa, faker, Faker } from "@faker-js/faker";

export class randamDataGenerator{

    static getFirstname(){

      return  faker.person.firstName();
    }

    static getLastname(){

       return faker.person.lastName();

    }

    static getEmailID(){

       return faker.internet.email();
    }

    static getTelephoneNo(){

        return faker.phone.number();
    }

    static getPassword(){

        return faker.internet.password();
    }

    static getRandomAddress(){

        return faker.location.streetAddress();
    }

    static getRandomstate(){

        return faker.location.state();
    }

    static getRandomCountry(){

        return faker.location.country();
    }

    static getRandamZipCode(){
        
        return faker.location.zipCode();
    }
}