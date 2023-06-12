import BasePage from "./Base.page";

class SelectPage extends BasePage{
    static get firstname(){
        return cy.get('#firstName');
    }
    static get lastname(){
        return cy.get('#lastName');
    }
    static get userEmail(){
        return cy.get('#userEmail');
    }
    static get getGender(){
        return cy.get('.custom-control-label').eq(0)
    }
    static get userNumber(){
        return cy.get('#userNumber');
    }
    static get getClickableDate(){
        return cy.get('#dateOfBirthInput');
    }
    static get selectMonth(){
        return cy.get('.react-datepicker__month-select');
    }
    static get selectYear(){
        return cy.get('.react-datepicker__year-select');
    }
    static get selectDate(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
    }
    static get startSubject(){
        return cy.get('#subjectsContainer');
    }
    static get getMusic(){
        return cy.get('.custom-checkbox').eq(2);
    }
    static get getImage(){
        return cy.get('input[type=file]');
    }
    static get currentAddress(){
        return cy.get('#currentAddress');
    }
    static get getStateCity(){
        return cy.get('#stateCity-wrapper');
    }
    static get submitBut(){
        return cy.get('#submit')
    }
    static check1(name, email, gender, mobile, date, subjects, hobbies, picture, address, statecity){
        cy.get('table tr').eq(1).contains(name);
        cy.get('table tr').eq(2).contains(email);
        cy.get('table tr').eq(3).contains(gender);
        cy.get('table tr').eq(4).contains(mobile);
        cy.get('table tr').eq(5).contains(date);
        cy.get('table tr').eq(6).contains(subjects);
        cy.get('table tr').eq(7).contains(hobbies);
        cy.get('table tr').eq(8).contains(picture);
        cy.get('table tr').eq(9).contains(address);
        cy.get('table tr').eq(10).contains(statecity);

    }
}

export default SelectPage;