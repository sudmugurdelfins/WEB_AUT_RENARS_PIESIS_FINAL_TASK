class BasePage{
    static get url(){
        return "https://demoqa.com/automation-practice-form";
    }
    static visit(){
        cy.visit(this.url);
    }
}


export default BasePage;