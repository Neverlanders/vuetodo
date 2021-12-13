app.component('taken-formulier',{
    template:
    `   
   <div class="col-lg-10 offset-lg-1">
   
   <h1 class="shadow-lg p-3 my-5 bg-body rounded text-center">Takenlijst</h1>
    <button @click="wisAlleTaken()" class="btn btn-outline-danger d-flex mx-auto mb-3" type="button">Wis alle taken</i></button> 
        <taak-toevoegen @toevoegenEenTaak="eenTaakToevoegen"></taak-toevoegen>        
         </div>
        <hr>       
       <div class="col-lg-6 offset-lg-3">
       
               <div v-for="(taak, index) in taken" :key="index" class="input-group mb-3">
                   <div class="input-group-text">
                  
                     <input v-model="taak.status" class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input">
                   </div>
                   <input v-model="taak.taakje" type="text" value="{{taak.taakje}}" :class="[{'doorstrepen': taak.status},'form-control']" aria-label="Text input with checkbox">
                    <button @click="wissenTaak(index)" class="btn btn-outline-danger" type="button"><i class="bi bi-trash-fill"></i></button>            
               </div>
       </div>
    `,
    data(){
      return{
          taken: [],
      }
    },

    methods:{
        eenTaakToevoegen(taak){
            this.taken.push(taak)
        },
        wissenTaak(index){
            this.taken.splice(index, 1)
        },
        wisAlleTaken(){
            this.taken=[]
        },

        }


})