<template>
    <div id="LightningYearsAhead" class="background">
        <div>
            <img class="bg-asset" src="../assets/backgrounds/ee-bg.svg" alt="">
        </div>
        <div class="main-container">
            <div class="events">
                <p class="heading">Lightning Years Ahead</p>
                <p class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">
                    {{event.eventName}}</p>
            </div>
        </div>

        <transition name="fade">
            <div class="eventDescription" v-if="eventsDetail">
<!--                <div class="close-btn">-->
<!--                    <i class="fa fa-close" @click="eventsDetail = null" aria-hidden="true"/>-->
<!--                </div>-->
                <div class="eventName">{{ eventsDetail.eventName }}</div>
                <div class="tagline">{{ eventsDetail.tagline }}</div>
                <div class="event-content hide-native-scrollbar">
                    <div class="rounds">
                        <div class="round" v-for="(round, index) in eventsDetail.rounds" v-bind:key="index">
                            <span class="roundIndice">Round {{index + 1}} : </span>
                            <p class="round-text">{{ round}}</p>
                        </div>
                    </div>
                    <div class="entryFee">Entry Fee: {{ eventsDetail.entryFee }}</div>
                    <div class="entryFee">Team Size: {{ eventsDetail.teamSize}}</div>
                    <div class="managers">
                        <div class="contact-text">Contact</div>
                        <div class="manager" v-for="manager in eventsDetail.managers" v-bind:key="manager">
                            <div class="name">{{manager.name}}</div>
                            <div class="contact">{{manager.phone}}</div>
                        </div>
                    </div>
                    <div class="notes" v-if="eventsDetail.notes">
                        Notes:
                        <pre>{{eventsDetail.notes}}</pre>
                    </div>
                </div>
                <div class="bottom-part">
                    <div class="cart btn btn-success">Add to Cart</div>
                    <div class="back btn btn-primary" @click="eventsDetail = null">Back</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import events from '../events'

    export default {
        name: "LightningYearsAhead",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null,
                dept: {
                    name: "Lightning Years Ahead"
                }
            }
        },
        created() {
            let self = this;
            self.deptEvents = events.tech.ee;
        },
        mounted() {
            let t2 = new this.$gsap.TimelineMax();
            t2.staggerFrom('.event', .5, {
                autoAlpha: 0,
                rotation: -20,
            }, 0.1);
        },
        methods: {},
        watch: {
            eventsDetail: {
                handler: function (val) {
                    console.log("ad");
                    if (val.eventName === "Electronics Premiere League") {
                        document.querySelector('eventName').style.fontSize = "28px"
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    @import "../css/eventDetails.css";
    @import "../css/common_style.css";

    .main-container {
        margin-top: 200px;
    }

    .background {
        background: #002a4c;
    }

    .events {
        margin-left: 8%;
    }

    .bg-asset {
        position: fixed;
        z-index: -1;
        right: -8px;
        width: 85%;
        bottom: 30px;
        object-fit: fill;
        opacity: 0.8;
        animation: bg-animation 3s 1 ease;
    }

    @media screen and (max-width: 960px) {
        .events {
            margin-top: 40px;
        }

        .bg-asset {
            width: 85%;
        }
    }

    @media screen and (min-width: 1295px) {
        .bg-asset {
            width: 75%;
            bottom: -20px;
        }
    }

    @media screen and (min-width: 1400px) {
        .bg-asset {
            width: 65%;
            bottom: -20px;
        }
    }

    @media screen and (max-width: 768px) {
        .bg-asset {
            right: 0;
            width: 80%;
        }
    }

    @media screen and (max-width: 556px) {
        .main-container {
            margin-top: 150px;
        }

        .bg-asset {
            right: -35px;
            bottom: 30px;
            width: 125%;
        }
    }

    @keyframes bg-animation {
        0% {
            opacity: 0;
            right: -100px;
            bottom: -50px;
        }
        20% {
            opacity: 0.9;
        }
        30% {
            opacity: 0;
        }
        50% {
            opacity: 0.6;
        }
        70% {
            opacity: 0;
        }
    }
</style>