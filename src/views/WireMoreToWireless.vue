<template>
    <div class="background" id="WireMoreToWireless">
        <div>
            <img alt="" class="bg-asset" src="../assets/backgrounds/ecel-bg.svg">
        </div>
        <div class="main-container">
            <div class="events">
                <p class="heading">Wire More To Wireless</p>
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
        name: "WireMoreToWireless",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null,
                dept: {
                    name: "Wire More To Wireless"
                }
            }
        },
        created() {
            let self = this;
            self.deptEvents = events.tech.ec;
        },
        mounted() {
            let t2 = new this.$gsap.TimelineMax();
            t2.staggerFrom('.event', .7, {
                rotationY: 90,
                autoAlpha: 0
            }, 0.15);
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
        background: linear-gradient(to bottom right, #a455ff, #2b98cd);
    }

    .events {
        margin-left: 8%;
    }

    .bg-asset {
        position: fixed;
        z-index: -1;
        right: 30px;
        width: 55%;
        bottom: 30px;
        object-fit: fill;
        animation: bg-animation 1.5s 1 ease;
    }

    @media screen and (max-width: 960px) {
        .events {
            margin-top: 40px;
        }

        .bg-asset {
            width: 70%;
        }
    }

    @media screen and (min-width: 1295px) {
        .bg-asset {
            width: 45%;
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
            right: -48px;
            bottom: 15px;
            width: 110%;
        }
    }

    @keyframes bg-animation {
        0% {
            opacity: 0;
            bottom: -100px;
            right: 150px;
        }
    }
</style>
