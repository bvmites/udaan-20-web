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
                <a class="text-center" @click="$router.push('events')"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
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
    @import "../css/common_style.css";

    .main-container{
        width: 100%;
    }

    .background{
        background: #0d0d0d;
    }

    .date {
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
