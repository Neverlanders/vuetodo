
app.component('taak-toevoegen',{
    template:
    `
        <div class="col-lg-6 offset-lg-3">
            <form @submit.prevent="onSubmit">
            <div class="input-group mb-3">
                    <input id="taak" v-model="taakje" type="text" class="form-control" placeholder="Taak..." aria-label="Taak" aria-describedby="button-addon2">
                    <button @click="toevoegenEenTaak" class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="bi bi-plus-square-fill"></i></button>
            </div>
            </form>
        </div>
    `,
    data(){
        return{
            taakje:'',
            status:false,
        }
    },
    methods:{
        onSubmit(){
            let eenTaakToevoegen = {
                taakje:this.taakje,
                status:this.status,
            }
            this.$emit('toevoegenEenTaak', eenTaakToevoegen)
            this.taakje=''
        }
    }
})
