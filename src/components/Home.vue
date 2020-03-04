<template>
    <transition name="slide-up">
        <div id="Home" class="main background">
<!--            <div id="particles-js" class="background"></div>-->
            <canvas id="fluid" style="width: 100%; height: 100%;"></canvas>
            <div class="main-container mx-auto d-block">
                <img class="udaan_logo mx-auto d-block" src="../assets/logo.png" alt="">
                <p class="text-center date">6-8 April, 2020</p>
            </div>
            <div class="pullUp">
                <a class="text-center" @click="$router.push('events')"><i class="fa fa-angle-down"
                                                                          aria-hidden="true"></i></a>
            </div>
        </div>
    </transition>
</template>

<script>
    import 'particles.js'

    export default {
        name: "Home",
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
                window.particlesJS("Home", {
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

    .date {
        margin-top: 16px;
        color: white;
        font-size: 30px;
    }

    .main-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }

    .background {
        display: block;
        position: absolute;
        background: #0d0d0d;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    canvas {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }

    canvas {
        background: linear-gradient(to right, #232526, #414345, #141e30, #243b55);
        background-size: 400% 400%;
        animation: gradient 5s ease infinite;
        opacity: 0.3;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
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
