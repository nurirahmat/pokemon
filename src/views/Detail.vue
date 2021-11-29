<template>
    <main class="container mt-custom">
        <div class="bg-light p5 rounded" style="padding:30px 30px">
            <div class="row">
                <div class="col-sm-3">
                    <div class="card" style="width:200px">
                        <img class="card-img-top" v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+posts.id+'.png'" alt="Card image" style="width:100%">
                        <div class="card-body">
                        <h6 class="text-center">#{{postid}}</h6>
                        <!-- note : deskripsi versi not found in endpoint pokeapi v2 -->
                        <h4 class="card-title text-center">{{posts.name}}</h4>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card" style="padding:20px 20px; background-color:#F6F7F6">
                        <i><h5>STATISTICS</h5></i><br>
                        <div class="row">
                            <div class="col-sm-2">HP</div>
                            <div class="col-sm-2">{{hp}}</div>
                            <div class="col-sm-8">
                                <div class="progress" style="margin-top:5px">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:hp+'%'}">
                                    <span class="sr-only"></span>
                                </div>
                                </div>
                            </div>

                            <div class="col-sm-2">ATK</div>
                            <div class="col-sm-2">{{atk}}</div>
                            <div class="col-sm-8">
                                <div class="progress" style="margin-top:5px">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:atk+'%'}">
                                    <span class="sr-only"></span>
                                </div>
                                </div>
                            </div>

                            <div class="col-sm-2">DEF</div>
                            <div class="col-sm-2">{{def}}</div>
                            <div class="col-sm-8">
                                <div class="progress" style="margin-top:5px">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:def+'%'}">
                                    <span class="sr-only"></span>
                                </div>
                                </div>
                            </div>

                            <div class="col-sm-2">SATK</div>
                            <div class="col-sm-2">{{satk}}</div>
                            <div class="col-sm-8">
                                <div class="progress" style="margin-top:5px">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:satk+'%'}">
                                    <span class="sr-only"></span>
                                </div>
                                </div>
                            </div>

                            <div class="col-sm-2">SDEF</div>
                            <div class="col-sm-2">{{sdef}}</div>
                            <div class="col-sm-8">
                                <div class="progress" style="margin-top:5px">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:sdef+'%'}">
                                    <span class="sr-only"></span>
                                </div>
                                </div>
                            </div>

                            <div class="col-sm-2">SPD</div>
                            <div class="col-sm-2">{{spd}}</div>
                            <div class="col-sm-8">
                                <div class="progress" style="margin-top:5px">
                                <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:spd+'%'}">
                                    <span class="sr-only"></span>
                                </div>
                                </div>
                            </div>
                        </div><br>
                        
                        <div class="card-body">
                        <!-- still not found endpoint pokeapi -->
                        <h4 class="card-title" style="color:#77E9F9">Weaknesses</h4>
                            <img src="../assets/types/Bug.png" width="25"> 2x
                            <img src="../assets/types/Dark.png" width="25" style="margin-left:100px"> 2x
                            <img src="../assets/types/Dragon.png" width="25" style="margin-left:100px"> 2x
                            <br><br>
                            <img src="../assets/types/Electric.png" width="25"> 2x
                            <img src="../assets/types/Fairy.png" width="25" style="margin-left:100px"> 2x
                            <img src="../assets/types/Fighting.png" width="25" style="margin-left:100px"> 2x
                            <br><br>
                            <img src="../assets/types/Fire.png" width="25"> 2x
                            <img src="../assets/types/Flying.png" width="25" style="margin-left:100px"> 2x
                            <img src="../assets/types/Ghost.png" width="25" style="margin-left:100px"> 2x
                            <br><br>
                            <img src="../assets/types/Grass.png" width="25"> 2x
                            <img src="../assets/types/Ground.png" width="25" style="margin-left:100px"> 2x
                            <img src="../assets/types/Ice.png" width="25" style="margin-left:100px"> 2x
                            <br><br>
                            <img src="../assets/types/Normal.png" width="25"> 2x
                            <img src="../assets/types/Poison.png" width="25" style="margin-left:100px"> 2x
                            <img src="../assets/types/Psychic.png" width="25" style="margin-left:100px"> 2x
                            <br><br>
                            <img src="../assets/types/Rock.png" width="25"> 2x
                            <img src="../assets/types/Steel.png" width="25" style="margin-left:100px"> 2x
                            <img src="../assets/types/Water.png" width="25" style="margin-left:100px"> 2x
                        <div>
                        <h6></h6>
                        </div><br>

                        <h4 class="card-title" style="color:#77E9F9">Abilities</h4>

                        <div v-for="(post,index) in posts.abilities" :key="index">
                        <h6>- {{post.ability['name']}}</h6>
                        </div><br>

                        <h4 class="card-title" style="color:#77E9F9">Breeding</h4>

                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width:120px">Egg Group</th>
                                    <th style="width:120px">Hatch Time</th>
                                    <th style="width:120px">Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- still not found endpoint pokeapi -->
                                <tr>
                                    <td>Monster</td>
                                    <td>5101 Steps</td>
                                    <td>12,5 %</td>
                                </tr>
                                <tr>
                                    <td>Water I</td>
                                    <td>20 Cycles</td>
                                    <td>87,5 %</td>
                                </tr>
                            </tbody>
                        </table>
                        </div><br>

                        <h4 class="card-title" style="color:#77E9F9">Capture</h4>

                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width:120px">Habitat</th>
                                    <th style="width:120px">Generation</th>
                                    <th style="width:120px">Capture Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- still not found endpoint pokeapi -->
                                <tr>
                                    <td>Waters-Edge</td>
                                    <td>Generation I</td>
                                    <td>45 %</td>
                                </tr>
                                <tr>
                                    <td>Water I</td>
                                    <td>20 Cycles</td>
                                    <td>87,5 %</td>
                                </tr>
                            </tbody>
                        </table>
                        </div><br>

                        <h4 class="card-title" style="color:#77E9F9">Sprites</h4>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div>
                                        <p class="text-center">Normal</p>
                                        <img v-bind:src="posts2" style="width:100%">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div>
                                        <p class="text-center">Shiny</p>
                                        <img v-bind:src="posts3" style="width:100%">
                                    </div>
                                </div>
                            </div>
                        <div>
                        <h6></h6>
                        </div><br>

                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card" style="padding:20px 20px; background-color:#CDFAE4">
                        <i><h5>EVOLUTIONS</h5></i>
                    
                        <div class="card-body">
                            <!-- still not found endpoint pokeapi -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import {ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import axios from 'axios'

    export default{
        setup(){
            let postid = ref([])
            let posts = ref([])
            let posts2 = ref([])
            let posts3 = ref([])
            let hp = ref([])
            let atk = ref([])
            let def = ref([])
            let satk = ref([])
            let sdef = ref([])
            let spd = ref([])

            //vue router
            const route = useRoute()
            onMounted(()=>{
                getPokemonDetail()
            })

            function getPokemonDetail(){
                axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.id}/`)
                .then(response=>{
                    postid.value = response.data.id.toString()
							.padStart(3, '0')
                    posts.value = response.data
                    posts2.value = response.data.sprites.front_default
                    posts3.value = response.data.sprites.front_shiny
                    hp.value = response.data.stats[0].base_stat
                    atk.value = response.data.stats[1].base_stat
                    def.value = response.data.stats[2].base_stat
                    satk.value = response.data.stats[3].base_stat
                    sdef.value = response.data.stats[4].base_stat
                    spd.value = response.data.stats[5].base_stat
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }

            return {
                postid,posts,posts2,posts3,hp,atk,def,satk,sdef,spd,
                getPokemonDetail,
            }
        }
    }
</script>

