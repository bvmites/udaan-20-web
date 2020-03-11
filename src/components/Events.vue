<template>
    <div class="main background" id="Events">
        <div id="particles-js"></div>
        <canvas id="fluid" style="width: 100%; height: 100%;"/>
        <div class="events-container text-center">
            <div class="row m-0">
                <div class="col-12 col-lg-4 my-auto mx-auto">
                    <p class="events-headers">Tech</p>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="row display-flex">
                        <div class="col-4">
                            <div @click="$router.push('civil')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/civil.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">The Road to Urbanization</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('cpit')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/cpit.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Cyber-Clan</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('ee')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/ee.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Lightning Years Ahead</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('ecel')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/ecel.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Wire-More to Wireless</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('mech')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/mech.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Pulleying the Future</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('workshop')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/workshop.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4 m-0">
                <div class="col-12 col-lg-4 my-auto mx-auto">
                    <p class="events-headers">Non Tech</p>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="row display-flex">
                        <div class="col-4">
                            <div @click="$router.push('madhouse')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/mad.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">M.A.D. House</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('starevent')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/starevent.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Flagship Events</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div @click="$router.push('nontech')" class="logos-container">
                                <img alt="" class="mx-auto d-block event-logo" src="../assets/logos/nontech.svg">
                                <img alt="" class="stars" src="../assets/logos/stars.svg">
                                <img alt="" class="logo-base" src="../assets/logos/base.svg">
                                <p class="text-center event-title mt-4">Jack a Dull Boy?</p>
                            </div>
                        </div>
                    </div>
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
                    },
                    {
                        name: "Cyber-Clan",
                        url: '/',
                    },
                    {
                        name: "Wire-More to Wireless",
                        url: '/',
                    },
                    {
                        name: "Pulleying the Future",
                        url: '/',
                    },
                    {
                        name: 'Lighting Years Ahead',
                        url: '/',
                    },
                    {
                        name: "M.A.D. House",
                        url: '/',
                    },
                    {
                        name: "Flagship Events",
                        url: '/',
                    },
                    {
                        name: "Workshop",
                        url: '/',
                    },
                    {
                        name: "Jack a Dull Boy?",
                        url: '/',
                    },
                ]
            }
        },
        mounted() {
            this.initParticles();
            // this.setHeight();
        },
        created() {
            // window.addEventListener("resize", this.setHeight);
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
            },
            // setHeight(){
            //     let height = document.querySelector(".logos-container").offsetHeight;
            //     console.log(height);
            //     document.querySelectorAll('.col-4').forEach(function (el) {
            //         el.style.height = height+"px";
            //     })
            // }
        }
    }
</script>

<style scoped>
    @import "../css/events.css";
    @import "../css/common_style.css";
    @import "../css/fontfaces.css";

    .row.display-flex {
        display: flex;
        flex-wrap: wrap;
    }

    .row.display-flex > [class*='col-'] {
        display: flex;
    }

    canvas {
        background-image: linear-gradient(to right, #10054d, #471489, #2c1558, #190933);
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
        background-repeat: no-repeat;
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

    .event-title {
        word-break: break-word;
        font-family: NovaSquare;
        color: white;
    }

    .event-logo {
        position: absolute;
        animation: updown-animation 1.5s ease 1.5s infinite alternate, born-animation 1.5s ease 1;
    }

    .stars {
        position: absolute;
        animation-delay: 0.5s;
        animation: updown-animation 1.5s 1.5s alternate infinite;
    }

    .logos-container {
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {
        .event-title {
            font-size: 4vw;
        }

        .logos-container {
            transform: scale(0.80);
        }

        .logos-container:hover {
            transform: scale(0.9);
            transition: all 0.5s ease;
        }
    }

    @media screen and (min-width: 960px) {
        .event-title {
            font-size: 2vw;
        }

        .logos-container {
            transform: scale(0.7);
        }

        .logos-container:hover {
            transform: scale(.65);
            transition: all 0.5s ease;
        }
    }

    .logos-container {
        width: inherit;
        /*object-fit: contain;*/

    }

    @keyframes updown-animation {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }

    @keyframes born-animation {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
