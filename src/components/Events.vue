<template>
    <div id="Events" class="main background">
        <canvas id="fluid" style="width: 100%; height: 100%;"></canvas>
        <div class="row h-100 m-0">
<!--            <div class="col-xl-6 col-md-6 my-auto">-->
<!--                <div class="departments events-headers ml-md-4 ml-2">-->
<!--                    <ul class="department m-0 p-0" v-for="department in departments" v-bind:key="department">-->
<!--                        <li class="deptName"><a class="deptEvent" @click="$router.push(department.url)">{{-->
<!--                            department.name }}</a></li>-->
<!--                        <img src="" alt="">-->
<!--                    </ul>-->
<!--                </div>-->

<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Events",
        data() {
            return {
                departments: [
                    {
                        name: "The Road to Urbanization",
                        url: '/',
                        img: "../asstes/TheRoadtoUrbanization.png"
                    },
                    {
                        name: "Cyber-Clan",
                        url: '/',
                        img: "../asstes/Cyber-Clan.png"
                    },
                    {
                        name: "Wire-More to Wireless",
                        url: '/',
                        img: "../asstes/Wire-MoretoWireless.png"
                    },
                    {
                        name: "Pulleying the Future",
                        url: '/',
                        img: "../asstes/PulleyingtheFuture.png"
                    },
                    {
                        name: 'Lighting Years Ahead',
                        url: '/',
                        img: "../asstes/LightingYearsAhead.png"
                    },
                    {
                        name: "M.A.D. House",
                        url: '/',
                        img: "../asstes/madHouse.png"
                    },
                    {
                        name: "Flagship Events",
                        url: '/',
                        img: "../asstes/flagshipEvents.png"
                    },
                    {
                        name: "Workshop",
                        url: '/',
                        img: "../asstes/workshop.png"
                    },
                    {
                        name: "Jack a Dull Boy?",
                        url: '/',
                        img: "../asstes/jackADullBoy.png"
                    },
                ]
            }
        },
        mounted() {
            // window.onload = function() {
            //     Particles.init({
            //         selector: '.background'
            //     });
            // };
            this.initParticles()
        },
        methods: {
            initParticles() {
                window.particlesJS("Events", {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 700
                            }
                        },
                        "color": {
                            "value": "#919191"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 100,
                            "color": "#919191",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 4,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                })
            }
        }
    }
</script>

<style scoped>
    @import "../css/events.css";
    @import "../css/common_style.css";

    li {
        color: white;
    }

    .background{
        background-image: linear-gradient(to bottom right, #10054d, #45108a)
    }

    .main-container {
        margin-top: 36px;
    }
    .events-headers{
        font-size: 20px;
    }

    @media screen and (max-width: 786px) {
        .udaan_logo {
            width: 100%;
        }
    }
</style>