<template>
    <div>
        
        <h1>v-model</h1>
        <input v-model="message" type="text" placeholder="Enter your message">
        <div>{{ message }}</div>
        <button @click="message=''">Reset</button>

    </div>
</template>

<script>
export default {
    name:'IndexPage',
    data(){
        return{
            message:""
        }
    },
    }
</script>

<style lang="scss" scoped>
div{
    text-align: center;

}

</style>