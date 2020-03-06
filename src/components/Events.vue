<template>
    <div id="Events" class="main background">
        <div id="particles-js" class="bg"></div>
        <canvas id="fluid" style="width: 100%; height: 100%;"></canvas>
        <div class="events-container text-center">
        <div class="row m-0">
            <div class="col-xl-4 col-lg-4 col-md-2 my-auto">
                <p class="events-headers">Tech</p>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-10 my-auto">
                <table class="table table-borderless">
                    <tr>
                        <td><img class="mx-auto d-block" src="../assets/TheRoadtoUrbanization.png" alt=""
                                 @click="$router.push('TheRoadtoUrbanization')"></td>
                        <td><img class="mx-auto d-block" src="../assets/Cyber-Clan.png" alt=""></td>
                        <td><img class="mx-auto d-block" src="../assets/Wire-MoretoWireless.png" alt=""></td>
                    </tr>
                    <tr>
                        <td><img class="mx-auto d-block" src="../assets/PulleyingtheFuture.png" alt=""></td>
                        <td><img class="mx-auto d-block" src="../assets/LightingYearsAhead.png" alt=""></td>
                        <td><img class="mx-auto d-block" src="../assets/workshop.png" alt=""></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="row m-0 mt-4">
            <div class="col-xl-4 col-lg-4 col-md-2 my-auto">
                <p class="events-headers">Non Tech</p>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-10 my-auto">
                <table class="table table-borderless">
                    <tr>
                        <td><img class="mx-auto d-block" src="../assets/flagshipEvents.png" alt=""></td>
                        <td><img class="mx-auto d-block" src="../assets/madHouse.png" alt=""></td>
                        <td><img class="mx-auto d-block" src="../assets/jackAPullBoy.png" alt=""></td>
                    </tr>
                </table>
            </div>
        </div>
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
                        img: "../assets/TheRoadtoUrbanization.png"
                    },
                    {
                        name: "Cyber-Clan",
                        url: '/',
                        img: "../assets/Cyber-Clan.png"
                    },
                    {
                        name: "Wire-More to Wireless",
                        url: '/',
                        img: "../assets/Wire-MoretoWireless.png"
                    },
                    {
                        name: "Pulleying the Future",
                        url: '/',
                        img: "../assets/PulleyingtheFuture.png"
                    },
                    {
                        name: 'Lighting Years Ahead',
                        url: '/',
                        img: "../assets/LightingYearsAhead.png"
                    },
                    {
                        name: "M.A.D. House",
                        url: '/',
                        img: "../assets/madHouse.png"
                    },
                    {
                        name: "Flagship Events",
                        url: '/',
                        img: "../assets/flagshipEvents.png"
                    },
                    {
                        name: "Workshop",
                        url: '/',
                        img: "../assets/workshop.png"
                    },
                    {
                        name: "Jack a Dull Boy?",
                        url: '/',
                        img: "../assets/jackADullBoy.png"
                    },
                ]
            }
        },
        mounted() {
            this.initParticles()
        },
        methods: {
            initParticles() {
                window.particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 700
                            }
                        },
                        "color": {
                            "value": "#cccccc"
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
                            "color": "#CCCCCC",
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

    canvas{
        background-image: linear-gradient(to right, #10054d, #45108a, #30048a, #45108a);
        opacity: 1;
        animation: gradient 7s ease infinite;
    }

    #particles-js {
        z-index: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% 50%;
    }

    .bg {
        /*background-image: linear-gradient(to bottom right, #10054d, #45108a);*/
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }


    .events-container {
        width: 100%;
        margin-top: 72px;
    }

    .events-headers {
        font-family: Neutronium;
        font-size: 400%;
        color: white;
    }

    @media screen and (max-width: 960px) {
        tr img {
            width: 100%;
        }
    }
    @media screen and (min-width: 960px) {
        tr img {
            width: 57%;
        }
    }

    tr img {
        /*width: 100%;*/
        object-fit: contain;
    }

    tr img:hover{
        transform: scale(1.2);
        transition: all 0.5s ease;
    }

    @font-face {
        font-family: 'Neutronium';
        src: url('../assets/font/Neutronium.ttf');
        font-weight: normal;
        font-style: normal;
    }
</style>