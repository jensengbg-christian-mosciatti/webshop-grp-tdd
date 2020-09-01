<template>
    <div class="search-overlay">
        <button class="menu" v-on:click="showOrClose"></button>
        <input type="text" class="search-field" v-model="userInput"/>
         <label id="shoe-size-category">
            <p> {{ showSizeCat }} </p>
            <input type="range" min="1" max="3" v-model="size">
        </label>
       <label id="shoe-size">
            <p> example </p>
            <input type="range" min="24" max="45">
        </label>
        <label id="basis-type">
            <p> example </p>
            <input type="range" min="1" max="3">
        </label>
        <label id="shoe-brand">
            <p> example </p>
            <input type="range" min="1" max="5">
        </label>
         <button class="search"></button> 

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            userInput: '',
            size: ''
        }
    },
    methods: {
        showOrClose() {
            this.$emit("show-close")
        }
    },
    computed: {
        showSizeCat() {
            if (this.size == 1) {
                return "Man"
            }
            else if (this.size == 2) {
                return "Damer"
            }
            else (this.size == 3) 
                return "Junior"
        }
    }
}
</script>

<style>
.search-overlay {
    background-color: whitesmoke;
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0px;
    top: 0px;
    left: 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
}

.menu {
    grid-row: 1;
    grid-column: 1;
}

.search-field {
    grid-row: 2;
    grid-column: 2/5;
}

#shoe-size-category {
    grid-row: 3/4;
    grid-column: 2/5;
    display: flex;
    flex-direction: column;
}

#shoe-size {
    grid-row: 4/5;
    grid-column: 2/5;
    display: flex;
    flex-direction: column;
}

#basis-type {
    grid-row: 5/6;
    grid-column: 2/5;
    display: flex;
    flex-direction: column;
}

#shoe-brand {
    grid-row: 6/7;
    grid-column: 2/5;
    display: flex;
    flex-direction: column;
}

.search {
    grid-row: 7/8;
    grid-column: 2/5;
    display: flex;
    flex-direction: column;
}
</style>