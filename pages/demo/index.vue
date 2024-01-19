<template>
    <div>
        <form v-on:submit.prevent="submit">
        <div>
        <h1>Form</h1>
        <label for="first_name">Firstname</label>
        <input  type="text" name="first_name" v-model="applicant.first_name">
        </div>

        <div>

        <label for="last_name">lastname</label>
        <input  type="text" name="last_name" v-model="applicant.last_name">
        </div>

        <div>
            <label for="sex">Male</label>
            <input type="radio" name="sex" value="male" v-model="applicant.sex"/>
        
            <label for="sex">female</label>
            <input type="radio" name="sex" value="female" v-model="applicant.sex"/>
        </div>


        <div>
            <select name="courses" v-model="applicant.course">
            <option value="react">React</option>
            <option value="angular">angular</option>
            <option value="vulue">vulue</option>
            </select>
        </div>
        <form v-on:submit.prevent="submit"></form>
        <div>
        <button type="button" @click="clear">Clear</button>
        <button type="submit">Submit</button>
</div>
    </form>
    <div style="margin-top: 16px; color: red;">#Spy {{ JSON.stringify(applicant) }}</div>
    </div>
</template>

<script>
export default {
    name:'IndexPage',
    data(){
        return{
            applicant:{
                first_name:"",
                last_name:"",
                sex:"male",
                course:"react",
            }
        }
       
    }, 
    methods: {
        submit(){
            alert(JSON.stringify(this.applicant))
        },
            clear(){
                this.applicant ={
                    first_name:"",
                last_name:"",
                sex:"male",
                course:"react",
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
div{
    text-align: center;

}

</style>