<template>
    <div id="CyberClan" class="background">
        <div>
            <img class="bg-asset" src="../assets/backgrounds/cpit-bg.svg" alt="">
        </div>
        <div class="main-container">
            <div class="events">
                <p class="heading">Cyber-Clan</p>
                <p class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{event.eventName}}</p>
            </div>
        </div>

        <transition name="fade">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName hide-native-scrollbar">{{ eventsDetail.eventName }}</div>
                <div class="tagline hide-native-scrollbar">{{ eventsDetail.tagline }}</div>
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
        name: "CyberClan",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null,
                dept: {
                    name: "Cyber-Clan"
                }
            }
        },
        created(){
            let self = this;
            self.deptEvents = events.tech.cp;
        },
        mounted() {
            let t2 = new this.$gsap.TimelineMax();
            t2.staggerFrom('.event', 0.5, {
                x: -200,
                autoAlpha: 0
            }, 0.2);
        },
        methods: {
        }
    }
</script>

<style scoped type="text/css">
    @import "../css/eventDetails.css";
    @import "../css/common_style.css";

    .main-container {
        margin-top: 200px;
    }

    .background {
        background-image: linear-gradient(to bottom,#13719e,#10045a);
    }

    .events{
        margin-left: 8%;
    }

    .bg-asset{
        position: fixed;
        z-index: -1;
        right: 50px;
        width: 70%;
        bottom: 30px;
        object-fit: fill;
        opacity: 0.8;
        animation: fade-in 1.5s 1 ease;
    }

    @media screen and (max-width: 960px) {
        .events{
            margin-top: 40px;
        }
        .bg-asset{
            width: 70%;
        }
    }
    @media screen and (min-width: 1295px) {
        .bg-asset{
            width: 50%;
        }
    }

    @media screen and (min-width: 960px) {
        /*.heading{*/
        /*    font-size: 2vw;*/
        /*}*/
    }

    @media screen and (max-width: 768px) {
        .bg-asset{
            right: 0;
            width: 80%;
        }
    }
    @media screen and (max-width: 556px) {
        .main-container{
            margin-top: 150px;
        }
        .bg-asset{
            right: -80px;
            bottom: 30px;
            width: 110%;
        }
    }

    @keyframes fade-in {
        0%{
            opacity: 0;
            right: -150px;
        }
    }
</style>