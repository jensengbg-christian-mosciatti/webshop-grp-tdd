import { shallowMount } from "@vue/test-utils";
import SearchFilter from "@/components/SearchFilter.vue";
import '@testing-library/jest-dom'
import ProductList from '@/assets/img/products.json'

const productData = ProductList


describe("SearchFilter.vue", () => {
    let wrapper
    //console.log('This is productData ', productData)
    beforeEach(() => {
        wrapper = shallowMount(SearchFilter, {
            propsData: {
                products: productData
            },
        })
    })

    /* 
    Som användare vill jag kunna filtrera listan. 
    Som användare vill jag ha enkel tillgång till sökfunktionen. 
    Som användare vill jag att filtret ska ge mig möjlighet att välja underlag.
    Som användare vill jag att filtret ska ge mig möjlighet att välja märke.
    Som användare vill jag att filtret ska ge mig möjlighet att välja storleksklass.
    */

    it("should return a filtered list when selecting a brand", async () => {
        let list = wrapper.vm.products
        //console.log("Här", list)
        let expected = []
        for(let x = 0; x < list.length; x++) {
            let obj = (list[x])
            if (obj.brand == "puma") {
                expected.push(obj)
            
            }
        }
        console.log(expected)
        let button = wrapper.get(".search");
        let input = wrapper.get("#brand-range")
        await input.setValue("puma")
        await button.trigger("click")
        let actual = wrapper.vm.filteredList
        expect(expected).toBe(actual)
    })


    // Meny knappens tester
    it("should show the menu/exit button when loaded", () => {
        const button = wrapper.get(".menu");
        expect(button.exists()).toBe(true)
    })

    it("should emit a event to parent component when clicked", async () => {
        const button = wrapper.get(".menu");
        await button.trigger("click")
        await wrapper.vm.$nextTick()

        //await wrapper.vm.$emit('showClose')
        //await wrapper.vm.$nextTick()
        let example = wrapper.emitted()
        //console.log(example)
        expect(wrapper.emitted()).toBeTruthy()
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

    it("should update the shoe-size-category filter when the range slider is moved", async () => {
        const inputRange = wrapper.get("#shoeSize-range")
        let testChoice = 2;
        await inputRange.setValue(testChoice)

        let expected = "kids"
        let p = wrapper.findAll("p").at(0)
        let actual = p.text()

        expect(expected).toBe(actual)
    })

    it("should update the shoe-size filter when the range slider is moved", async () => {
        const inputRange = wrapper.findAll("#kids-range")
        let testChoice = 30;
        await inputRange.setValue(testChoice)

        let expected = "30"
        let p = wrapper.findAll("p").at(1)
        let actual = p.text()

        expect(expected).toBe(actual)
    })

    it("should update the basis-type filter when the range slider is moved", async () => {
        const inputRange = wrapper.findAll("#basis-range")
        let testChoice = 1;
        await inputRange.setValue(testChoice)

        let expected = "Gräs"
        let p = wrapper.findAll("p").at(2)
        let actual = p.text()

        expect(expected).toBe(actual)
    })

    it("should update the shoe-brand filter when the range slider is moved", async () => {
        const inputRange = wrapper.findAll("#brand-range")
        let testChoice = 5;
        await inputRange.setValue(testChoice)

        let expected = "Märke"
        let p = wrapper.findAll("p").at(3)
        let actual = p.text()

        expect(expected).toBe(actual)
    })
    
    
    // Sök knappens tester
    it("should show the shoe-brand search button when loaded", () => {
        const button = wrapper.get(".search");
        expect(button.exists()).toBe(true)
    })

    it("should emit a event to parent component when clicked", async () => {
        const button = wrapper.get(".search");
        await button.trigger("click")

        let hope = wrapper.emitted()
        //console.log(hope)
        expect(wrapper.emitted()).toBeTruthy()
    })
})



