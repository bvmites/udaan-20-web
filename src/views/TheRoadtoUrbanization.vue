<template>
    <div id="TheRoadtoUrbanization" class="background">
        <div>
            <img class="bg-asset" src="../assets/backgrounds/civil-bg.svg" alt="">
        </div>
        <div class="main-container">
            <div class="events">
                <p class="heading">The Road to Urbanization</p>
                <p class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">
                    {{event.eventName}}</p>
            </div>
        </div>

        <transition name="fade">
            <div class="eventDescription" v-if="eventsDetail">
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
        name: "TheRoadtoUrbanization",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null,
                dept: {
                    name: "The Road to Urbanization"
                }
            }
        },
        created() {
            let self = this;
            self.deptEvents = events.tech.ce;
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped>
    @import "../css/eventDetails.css";

    .main-container {
        margin-top: 200px;
    }

    .background {
        background-color: #121920;
    }

    .heading {
        color: white;
        font-size: 32px;
    }

    .events {
        margin-left: 8%;
    }

    .event {
        margin: 8px;
        font-size: 20px;
        color: white;
    }

    .bg-asset {
        position: fixed;
        z-index: -1;
        right: 0;
        width: 80%;
        bottom: -10px;
        object-fit: fill;
        opacity: 0.6;
    }

    @media screen and (max-width: 960px) {
        .events {
            margin-top: 40px;
        }

        .bg-asset {
            right: 0;
            width: 90%;
        }
    }

    @media screen and (min-width: 960px) {
        /*.heading{*/
        /*    font-size: 2vw;*/
        /*}*/
    }

    @media screen and (max-width: 768px) {
        .bg-asset {
            right: 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 556px) {
        .bg-asset {
            left: -30px;
            bottom: -10px;
            width: 150%;
        }
    }



</style>