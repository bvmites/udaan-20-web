<template>
    <div class="background" id="PulleyingTheFuture">
        <div>
            <img alt="" class="bg-asset" src="../assets/backgrounds/mech-bg.svg">
        </div>
        <div class="main-container">
            <div class="events">
                <p class="heading">Pulleying The Future</p>
                <p @click="eventsDetail = event" class="event" v-bind:key="event" v-for="event in deptEvents">
                    {{event.eventName}}</p>
            </div>
        </div>

        <transition name="fade">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName hide-native-scrollbar">{{ eventsDetail.eventName }}</div>
                <div class="tagline hide-native-scrollbar">{{ eventsDetail.tagline }}</div>
                <div class="event-content hide-native-scrollbar">
                    <div class="rounds">
                        <div class="round" v-bind:key="index" v-for="(round, index) in eventsDetail.rounds">
                            <span class="roundIndice">Round {{index + 1}} : </span>
                            <p class="round-text">{{ round}}</p>
                        </div>
                    </div>
                    <div class="entryFee">Entry Fee: {{ eventsDetail.entryFee }}</div>
                    <div class="entryFee">Team Size: {{ eventsDetail.teamSize}}</div>
                    <div class="managers">
                        <div class="contact-text">Contact</div>
                        <div class="manager" v-bind:key="manager" v-for="manager in eventsDetail.managers">
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
                    <div @click="eventsDetail = null" class="back btn btn-primary">Back</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import events from '../events'

    export default {
        name: "PulleyingTheFuture",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null,
                dept: {
                    name: "Pulleying The Future"
                }
            }
        },
        created() {
            let self = this;
            self.deptEvents = events.tech.me;
        },
        mounted() {
            let t2 = new this.$gsap.TimelineMax();
            t2.staggerFrom('.event', 0.5, {
                x: -200,
                autoAlpha: 0
            }, 0.2);
        },
        methods: {}
    }
</script>

<style scoped>
    @import "../css/eventDetails.css";
    @import "../css/common_style.css";

    .main-container {
        margin-top: 200px;
    }

    .background {
        background-image: linear-gradient(to bottom right, #088ba1, #003a62);
    }


    .events {
        margin-left: 12%;
    }

    .bg-asset {
        position: fixed;
        z-index: -1;
        right: 60px;
        width: 55%;
        bottom: 16px;
        object-fit: fill;
        opacity: 0.75;
        animation: fade-in 2s 1 ease;
    }

    @media screen and (max-width: 960px) {
        .events {
            margin-top: 40px;
        }

        .bg-asset {
            width: 55%;
        }
    }

    @media screen and (min-width: 1295px) {
        .bg-asset {
            width: 40%;
            right: 80px;
        }
    }

    @media screen and (max-width: 768px) {
        .bg-asset {
            right: -50px;
            bottom: -10px;
            width: 80%;
        }

        .events {
            margin-left: 8%;
        }
    }

    @media screen and (max-width: 556px) {
        .main-container {
            margin-top: 150px;
        }

        .bg-asset {
            left: 40px;
            bottom: 6px;
            width: 115%;
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            bottom: -100px;
        }
    }
</style>
