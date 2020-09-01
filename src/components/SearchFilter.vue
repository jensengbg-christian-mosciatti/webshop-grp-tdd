<template>
    <div class="search-overlay">
        <!-- <button class="menu"></button>
        <input type="text" v-model="userInput"/>
        <label>
            <input type="range" min="1" max="3" v-model="size">
        </label>
        <label>
            <input type="range" min="24" max="45">
        </label>
        <label>
            <input type="range" min="1" max="3">
        </label>
        <label>
            <input type="range" min="1" max="5">
        </label>
        <button class="search"></button> -->

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            userInput: '',
            size: ''
        }
    }
}
</script>

<style>

.search-overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0px;
    top: 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
}
</style>