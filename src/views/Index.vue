<template>
    <main class="container mt-custom">
        <img
            alt="poke logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        ><br><br>
        <div class="bg-light p5 rounded">
            <div id="poke-container" class="ui cards">
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios'
    import {onMounted} from 'vue'

    export default{
        setup(){

            onMounted(()=>{
                getPokemonData()
            })

            function getPokemonData(){
                axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(response=>{
                    response.data.results.forEach(function(pokemon){
                        getPokemonDataDetail(pokemon);
                    })
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }

            function getPokemonDataDetail(pokemon){
                let url = pokemon.url
                axios.get(url)
                .then(response=>{
                    renderPokemon(response.data)
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }

            function renderPokemon(pokeData){
                let allPokemonContainer = document.getElementById('poke-container');
                let pokeContainer = document.createElement("div") 
                pokeContainer.classList.add('card');
                pokeContainer.onclick = function() { window.location.href = `/detail/${pokeData.id}` };

                createPokeImage(pokeData.id, pokeContainer);

                let pokeName = document.createElement('h6') 
                pokeName.innerText = pokeData.name

                let pokeNumber = document.createElement('p')
                pokeNumber.innerText = `#${pokeData.id.toString()
							.padStart(3, '0')}`
            
                let pokeTypes = document.createElement('ul') 
            
                createTypes(pokeData.types, pokeTypes) 

                pokeContainer.append(pokeName, pokeNumber, pokeTypes);  
                allPokemonContainer.appendChild(pokeContainer);       
            }

            function createTypes(types, ul){
                types.forEach(function(type){
                    let typeLi = document.createElement('li');
                    typeLi.innerText = type['type']['name'];
                    ul.append(typeLi)
                })
            }

            function createPokeImage(pokeID, containerDiv){
                let pokeImgContainer = document.createElement('div')
                pokeImgContainer.classList.add('image')

                let pokeImage = document.createElement('img')
                pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeID}.png`

                pokeImgContainer.append(pokeImage);
                containerDiv.append(pokeImgContainer);
            }
        }
    }
</script>

<style>
    .card{width: 150px; margin-bottom: 20px;cursor: pointer;}
    .card:hover{
        background-color: #DDFCED;
    }
     h6,p{margin-left: 10px;}
    .card img{width: 100%; background-color: #dedede;}
    .ui.cards{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 1px 1px;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    #container {
        margin: auto;
    }

    #poke-container {
        margin: auto;
        width: 100%;
        padding: 40px 5px 20px 30px;
    }
    ul{font-size: 10px;}
</style>
