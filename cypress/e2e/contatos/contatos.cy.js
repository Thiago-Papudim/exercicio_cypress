/// <reference types='cypress'>

describe("Teste de funcionalidades da agenda", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("Deve inserir um contato", () => {
        cy.get("input").eq(0).type("Luiz Souza");
        cy.get("input").eq(1).type("luiz@gmail.com");
        cy.get("input").eq(2).type("(11) 12345-6789");
        cy.get(".adicionar").click();

        cy.screenshot("teste_inserir_contato");
    });

    it("Deve editar um contato", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('[type="text"]').clear().type("Arthur Lira");
        cy.get('[type="email"]').clear().type("arthur@gmail.com");
        cy.get('[type="tel"]').clear().type("(11) 12345-6789");
        cy.get(".alterar").click();

        cy.screenshot("teste_editar_contato");
    });

    it("Deve excluir um contato", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();

        cy.screenshot("teste_excluir_contato");
    });

    it("Deve finalizar o teste", () => {
        expect(true).to.be.true;

        cy.screenshot("teste_finalizado");
    });
});