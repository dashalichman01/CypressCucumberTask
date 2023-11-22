import { faker } from '@faker-js/faker';

class Faker {
    
    getRandomFirstName(){
        return faker.person.firstName();
    }

    getRandomLastName(){
        return faker.person.lastName();
    }

    getRandomPostalCode(){
        return faker.finance.accountNumber(5);
    }
}

export default new Faker();