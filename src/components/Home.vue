<template>
    <div id="Home" class="main">
        <div id="particles-js" class="background"></div>
        <canvas id="fluid" style="width: 100%; height: 100%;"></canvas>
        <div class="main-container mx-auto d-block">
            <img class="udaan_logo mx-auto d-block" src="../assets/logo.png" alt="">
            <p class="text-center date">6-8 April, 2020</p>
            <!--        <a class="pullUp" @click="$router.push('/events')"><i class="fa fa-angle-down" aria-hidden="true"></i>-->
            <!--        </a>-->
            <!--            <div ref="events" class="events">-->
            <!--                <div class="civil">-->
            <!--                    <img src="../assets/civil_header.png" alt="">-->
            <!--                    <div class="content" style="height: 500px">-->
            <!--                        <p>Civil</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="events">-->
            <!--                <div class="computer">-->
            <!--                    <img src="../assets/computer_header.png" alt="">-->
            <!--                    <div class="content" style="height: 500px">-->
            <!--                        <p>Computer/IT</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="events">-->
            <!--                <div class="electrical">-->
            <!--                    <img src="../assets/electrical_header.png" alt="">-->
            <!--                    <div class="content" style="height: 500px">-->
            <!--                        <p>Electrical</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="events">-->
            <!--                <div class="electronics">-->
            <!--                    <img src="../assets/electronics_header.png" alt="">-->
            <!--                    <div class="content" style="height: 500px">-->
            <!--                        <p>EC/EL</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="events">-->
            <!--                <div class="mechanical">-->
            <!--                    <img src="../assets/mechanical_header.png" alt="">-->
            <!--                    <div class="content" style="height: 500px">-->
            <!--                        <p>Mechanical</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="events">-->
            <!--                <div class="production">-->
            <!--                    <img src="../assets/production_header.png" alt="">-->
            <!--                    <div class="content" style="height: 500px">-->
            <!--                        <p>Production</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
        <a class="pullUp" @click="$router.push('events')"><i class="fa fa-angle-down" aria-hidden="true"></i></a>
    </div>
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

    .date{
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

    .events p {
        font-size: 60px;
        font-weight: bold;
        margin-left: 24px;
    }

    .events img {
        width: 100%;
        object-fit: contain;
    }

    .civil .content {
        background: #f5a1af;
    }

    .computer img {
        background: #f5a1af;
    }

    .computer .content {
        background: #cbe8f7;
    }

    .computer img {
        background: #f5a1af;
    }

    .electrical .content {
        background: #9aaaaf;
    }

    .electrical img {
        background: #cbe8f7;
    }

    .electronics .content {
        background: #b0fe76;
    }

    .electronics img {
        background: #9aaaaf;
    }

    .mechanical .content {
        background: #ffcc7b;
    }

    .mechanical img {
        background: #b0fe76;
    }

    .production .content {
        background: #99dbff;
    }

    .production img {
        background: #ffcc7b;
    }
</style>
