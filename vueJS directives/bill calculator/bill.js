var app = new Vue({
    el:'#app',
    data(){
        return{
            bill: 0,
            tipPerc: 0,
            numPeople: 0
        }
    },
    methods:{
        cal(){
            this.numPeople = (!isNaN(this.numPeople) && this.numPeople > 1 ? this.numPeople : 1);
            return((this.bill * this.tipPerc) / this.numPeople)
        }
    }
})