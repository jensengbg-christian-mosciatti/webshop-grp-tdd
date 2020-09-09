import { shallowMount } from "@vue/test-utils";
import SearchFilter from "@/components/SearchFilter.vue";
import productData from '@/assets/db/products/products.json'
//import '@testing-library/jest-dom'


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
Som användare vill jag att filtret ska ge mig möjlighet att välja underlag.
Som användare vill jag att filtret ska ge mig möjlighet att välja märke.
Som användare vill jag att filtret ska ge mig möjlighet att välja storleksklass.
*/


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
        let actual = wrapper.vm.shoeSizeClass

        expect(expected).toBe(actual)
    })

    /*it("should update the shoe-size filter when the range slider is moved", async () => {
        const inputRange = wrapper.get("#adults-range")
        let testChoice = 30;
        inputRange.setValue(testChoice)
        let expected = "30"
        let actual = wrapper.vm.size

        expect(expected).toBe(actual)
    })*/

    /*it("should display the kids-range when size class 'kids' is selected", async () => {
        const input = wrapper.get("#shoeSize-range");
        await input.setValue(2)

        let expected = wrapper.get("#kids-range");
        expect(expected.exists()).toBe(true)
    })*/

    it("should update the basis-type filter when the range slider is moved", async () => {
        const inputRange = wrapper.findAll("#basis-range")
        let testChoice = 1;
        await inputRange.setValue(testChoice)

        let expected = "Gräs"
        let actual = wrapper.vm.basis

        expect(expected).toBe(actual)
    })

    it("should update the shoe-brand filter when the range slider is moved", async () => {
        const inputRange = wrapper.findAll("#brand-range")
        let testChoice = 3;
        await inputRange.setValue(testChoice)

        let expected = "nike"
        let actual = wrapper.vm.brand

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



