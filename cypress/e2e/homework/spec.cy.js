import BasePage from "../pageObjects/Base.page";
import SelectPage from "../pageObjects/Select.page";

describe("Homework", () => {
  beforeEach(() => {
    BasePage.visit();
  });
  it("Scenario 1 Make an Appointment" , () => {
    SelectPage.firstname.type('Renārs');
    SelectPage.lastname.type('Piesis');
    SelectPage.userEmail.type('renars.piesis@va.lv')
    SelectPage.getGender.click();
    SelectPage.userNumber.type('1234567890');
    SelectPage.getClickableDate.click();
    SelectPage.selectMonth.select('February');
    SelectPage.selectYear.select('1930');
    SelectPage.selectDate.click();
    SelectPage.startSubject.type('Econ{enter}');
    SelectPage.getMusic.click();
    SelectPage.getImage.selectFile('./files/hw.jpg');
    SelectPage.currentAddress.type('Atmodas iela 5');
    SelectPage.getStateCity.contains('Select State').click({force: true}).type('NCR{enter}');
    SelectPage.getStateCity.contains('Select City').click({force: true}).type('Delhi{enter}');
    SelectPage.submitBut.click({force: true});
    //CHECK
    SelectPage.check1('Renārs Piesis', 'renars.piesis@va.lv', 'Male', '1234567890', '28 February,1930', 'Economics', 'Music', 'hw.jpg', 'Atmodas iela 5', 'NCR Delhi');
  });
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
    });
});