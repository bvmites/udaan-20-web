<template>
    <div id="EventsNew">
        <div id="particles-js" class="bg"></div>
        <canvas id="fluid" style="width: 100%; height: 100%;"></canvas>
        <div class="container">
            <div style="height: 72px"></div>
            <p class="events-headers text-center">Tech</p>
            <div class="row">
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/civil.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/cpit.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/ecel.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/ee.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/mech.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/workshop.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
            </div>
            <p class="events-headers text-center">Non Tech</p>
            <div class="row">
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/starevent.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/mad.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
                <div class="col-md-4 col-sm-6 col-6">
                    <img src="../assets/logos/nontech.png" alt="">
                    <p class="text-center header-name mt-3">Cyber-Clan</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventsNew",
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


    canvas {
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

    .events-headers {
        font-family: Neutronium;
        font-size: 400%;
        color: white;
    }

    img {
        position: relative;
        transform: scale(0.7);
        background: white;
        padding: 10px;
        width: inherit;
        object-fit: contain;
        border-radius: 50%;
    }

    .header-name {
        color: white;
        font-size: 24px;
    }
</style>