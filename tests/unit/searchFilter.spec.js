import { shallowMount } from "@vue/test-utils";
import SearchFilter from "@/components/SearchFilter.vue";
import '@testing-library/jest-dom'


describe("SearchFilter.vue", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(SearchFilter)
    })

    // Meny knappens tester
    it("should show the menu/exit button when loaded", () => {
        const button = wrapper.get(".menu");
        expect(button.exists()).toBe(true)
    })

    it("should close the search overlay when clicked", async () => {
        const button = wrapper.get(".menu");
        await button.trigger("click")
        await wrapper.vm.$nextTick()
        

        
        expect(wrapper.exists()).toBe(false)
    })

    // This test should be done in Products.vue test file
    it("should open the search overlay when clicked again", async () => {

    })
    
    // Input fältet's tester
    it("should show the inputfield when loaded", () => {
        const inputField = wrapper.get(".search-field");
        expect(inputField.exists()).toBe(true)
    })

    it("should take and store the input data", async () => {
        const inputField = wrapper.get(".search-field");
        let expected = "Nike";
        await inputField.setValue(expected)

        let actual= wrapper.vm.userInput;

        expect(actual).toBe(expected)
    })
    
    // Filtreringens tester
    it("should show the filters when loaded", () => {
        const button = wrapper.findAll('input[type="range"]');
        expect(button.exists()).toBe(true)
    })
    
    // Sök knappens tester
    it("should show the search button when loaded", () => {
        const button = wrapper.get(".search");
        expect(button.exists()).toBe(true)
    })

})

/* 
Som användare vill jag kunna filtrera listan. 
Som användare vill jag ha enkel tillgång till sökfunktionen. 
Som användare vill jag att filtret ska ge mig möjlighet att välja underlag.
Som användare vill jag att filtret ska ge mig möjlighet att välja märke.
Som användare vill jag att filtret ska ge mig möjlighet att välja storleksklass.
*/


