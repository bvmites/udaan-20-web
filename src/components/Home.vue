<template>
    <transition name="slide-up">
        <div class="main background" id="Home">
            <!--            <div id="particles-js" class="background"></div>-->
            <div class="bg" id="particles-js"></div>
            <canvas id="fluid" style="width: 100%; height: 100%;"/>
            <div class="main-container mx-auto d-block">
                <img alt="" class="udaan_logo mx-auto d-block" src="../assets/logo.png">
                <p class="text-center date">7-9 April, 2020</p>
            </div>
            <div class="pullUp">
                <a @click="$router.push('events')" class="text-center"><i aria-hidden="true"
                                                                          class="fa fa-angle-down"></i></a>
            </div>
        </div>
    </transition>
</template>

<script>
    import 'particles.js'

    export default {
        name: "Home",
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

<style scoped type="text/css">
    @import "../css/home.css";
    @import "../css/common_style.css";

    canvas {
        background-image: linear-gradient(to right, #232526, #414345, #141e30, #243b55);
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

    .main-container {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .date {
        font-family: NovaSquare;
        margin-top: 16px;
        color: white;
        font-size: 30px;
    }

    .slide-up-leave-active {
        animation: slide-up 0.5s ease-in;
    }

    @keyframes slide-up {
        0% {
            transform: translateY(0);
            opacity: 1
        }
        100% {
            transform: translateY(-100%);
            opacity: 0
        }
    }
</style>
