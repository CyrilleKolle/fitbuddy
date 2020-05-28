<template>
    <div id="wrapper">
        <section>
            <div class="contact-form-container">
                <h1>Skapa ditt pass</h1>
                <div class="contact-form">
                    <form @submit.prevent="onSubmit">
                        <!-- titel -->
                        <div class="box">
                            <label>Titel: <input v-model="title" placeholder="Vad vill du göra?" required></label>
                        </div>
                        <!-- förvalda träningstyper m.h.a checkboxar -->
                        <div class="workout-types">
                            <label> <strong>träningstyp: </strong> </label>
                            <label :key="type" v-for="type in types">
                                <input v-model="selectedSports" type="checkbox" :value="type" />
                                {{ type }}
                            </label>
                        </div>
                        <!-- Användaren kan m.h.a av en kalender bestämma dag -->
                        <div class="box">
                            <label> Kalender: <!-- plugin ---> </label>
                        </div>
                        <!-- Sätt en tid -->
                        <div class="box">
                            <label>Tid: <input v-model="time" placeholder="Hur lång tid vill du träna?"></label>
                        </div>
                        <!-- Användaren kan här beskriva mer i detalj vad andra behöver veta -->
                        <div class="box">
                            <label >Beskrivnig: <textarea v-model="description" cols="30" rows="10" placeholder="vad är det andra behöver veta för att kunna vara med ?" required></textarea></label>
                        </div>
                        <!-- knappen som skickar vidare datan registrerad mot databasen -->
                        <input class="button" type="submit" value="skapa ditt träningspass"> 
                    </form>
                </div>
            </div>   
        </section>
    </div>
</template>

<script>
   
    

export default {
    data() {
        // datan som representer utgångs punkt av formulärets input-element
        return {
            selectedSports: [],
            types: [ 'Fotboll', 'Tennis', 'paddel', 'löpträning', 'hockey', 'bowling'],
            title: null,
            //picker: null,
            time: null,
            description: null
        }
    },
    methods: {
        /*
        Denna method tar hand om datan registrerad av användaren efter att ha klickat på "submit"
        */
        onSubmit() {
            console.log(this.title);
            console.log(this.time);
            console.log(this.description);
            //console.log('kalender' + this.picker);
            console.log('träningstyp' + this.selectedSports);
            
            // omkonverterar input från formuläret m.h.a v-model till ett Json-objekt och skickar mot express
            fetch('http://localhost:3000/post', { 
            body: JSON.stringify (
                { 
                    title: this.title, 
                    workout: this.selectedSports,
                    //calender: this.picker,
                    time: this.time,
                    description: this.description,
                }), 
                headers: { 'Content-Type': 'application/json'}, 
                method: 'POST' 
            })
        }
    }
}
</script>

<style scoped>
   .main-container {
    margin: 0;
    padding: 0;
}
    /* Osynlig wrapper som möjligör kontroll över contact-form-container */

section {
    display: flex;
    height: 100vh;
}

    /* elemntet som håller hela formuläret förutom */

.contact-form-container {
    box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, .7); 
    width: 85%;
    max-width: 1000px;
    padding: 30px 40px;
    margin: 100px auto auto auto;
    box-sizing: border-box;
    
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-radius: 10px;
}

    /* Titel */

.contact-form-container h1 {
    margin-bottom: 30px;
    font-size: 2.5em;
}

    /* här skriver man in sitt meddelande */

.box {
    border: 1px solid grey;
    margin: 10px 50px;
    padding: 12px 18px;
    border-radius: 8px;
}
    /* Gör ändringar formulärets alla labels */

.workout-types {
    padding: 10px;
}
.box label {
    display: block; /* elemnten ska visas under varandra */
    text-align: left;
    color: #333;
    text-transform: uppercase; /* a -> A  etc.. */
    font-size: 13px;
}

    /* Gör ändringar i formulärets alla input + textarean */

.box input, .box textarea {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    font-size: 12px;
    margin-top: 6px;
}
.box input:focus{
    background-color: rgba(200, 200, 200, 0.1);
}
    /* submit knappen */

.button {
    background-color: #421616;
    width: 87%;
    padding: 13px 0;
    color: #DBDAD8;
    font-size: 1.3rem;
    border-radius: 8px;
    
}
</style>