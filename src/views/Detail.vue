<template>
    <main class="container mt-custom">
        <div class="bg-light p5 rounded" style="padding:30px 30px">
            <div class="row">
                <div class="col-sm-3">
                    <div class="card" style="width:200px">
                        <img class="card-img-top" v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+posts.id+'.png'" alt="Card image" style="width:100%">
                        <div class="card-body">
                        <h4 class="card-title text-center">{{posts.name}}</h4>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card" style="padding:20px 20px; background-color:#F6F7F6">
                        <i><h5>STATISTICS</h5></i>
                        <br>
                        <div class="card-body">
                        <h4 class="card-title" style="color:#77E9F9">Abilities</h4>

                        <div v-for="(post,index) in posts.abilities" :key="index">
                        <h6>- {{post.ability['name']}}</h6>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style="padding:20px 20px; background-color:#CDFAE4">
                        <i><h5>EVOLUTIONS</h5></i>
                    
                        <div class="card-body">
                        <h4 class="card-title">ivysaur</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios'
    import {onMounted,ref} from 'vue'

    export default{
        setup(){
            let posts = ref([])

            onMounted(()=>{
                getPokemonData()
            })

            function getPokemonData(){
                axios.get('https://pokeapi.co/api/v2/pokemon/7/')
                .then(response=>{
                    posts.value = response.data
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }

            return {
                posts,
                getPokemonData,
            }
        }
    }
</script>

