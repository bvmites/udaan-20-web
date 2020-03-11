<template>
    <div class="background" id="About">
        <div id="particles-js"></div>
        <canvas id="fluid" style="width: 100%; height: 100%;"/>
        <div class="main-container container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="about-udaan">
                        <p class="text-center title">About Udaan</p>
                        <p class="about-text">UDAAN is not just an annual function but a celebration of what the
                            students here are and
                            about their aspirations and dreams. As the name defines it is a joint effort by each one
                            to help provide the flight and wings to the bright ideas of young minds.</p>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="about-bvm">
                        <p class="text-center title">About BVM</p>
                        <p class="about-text">
                            We Birla Vishvakarma Mahavidyalaya(BVM) family take the pride of being the first engineering
                            college in the state of Gujarat, founded in 1948 and inaugurated by last Viceroy of India
                            "Lord Mountbatten".
                        </p>
                    </div>
                </div>
            </div>
            <div class="social-handle">
                <div class="row p-2">
                    <p class="text-center col-12">Follow us on</p>
                    <div class="col-12">
                        <a href="https://www.youtube.com/channel/UCnqRgS6O0MGF8sTYb_fHjWA"><i aria-hidden="true"
                                                                                              class="fa fa-youtube-play"/></a>
                        <a href="https://www.instagram.com/teamudaan/"><i aria-hidden="true"
                                                                          class="fa fa-instagram"/></a>
                        <a href="https://www.facebook.com/teamudaan19/"><i aria-hidden="true"
                                                                           class="fa fa-facebook-square"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
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
        margin-top: 100px;
        color: white;
    }

    .title {
        font-family: Oxanium-Bold;
        font-weight: 900;
        font-size: 24px;
        margin: 0;
    }

    .about-text {
        font-family: TitilliumWeb;
        letter-spacing: 1px;
        text-align: justify;
        width: 100%;
        word-wrap: break-word;
        padding: 0 10px 10px 10px;
        text-indent: 20px;
    }

    .social-handle {
        padding: 10px 20px;
        text-align: center;
        margin-bottom: 20px;
    }

    .social-handle .row {
        border-radius: 10px;
        border: 2px white solid;
    }

    .social-handle a {
        font-size: 36px;
        margin: 10px;
    }

    .social-handle p {
        text-decoration: underline;
        font-size: 20px;
        font-family: Oxanium-Bold;
        margin: 0;
    }
</style>
