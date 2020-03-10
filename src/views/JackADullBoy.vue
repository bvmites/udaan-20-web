<template>
    <div id="JackADullBoy" class="background">
        <canvas id="fluid" style="width: 100%; height: 100%;"/>
        <div class="main-container container">
            <div class="events">
                <div class="row">
                    <div class="col-12">
                        <p class="heading text-center">Jack a Dull Boy?</p>
                    </div>
                    <div class="col-12">

                        <div class="row">
                            <div class="col-12 col-md-4 col-sm-6 event text-center" v-for="event in deptEvents" @click="eventsDetail = event"
                                 v-bind:key="event">
                                {{event.eventName}}
                            </div>
                        </div>
                    </div>
                </div>
                <!--                <p class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">-->
                <!--                    {{event.eventName}}</p>-->
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
        name: "JackADullBoy",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null,
                dept: {
                    name: "Jack a Dull Boy?"
                }
            }
        },
        created() {
            let self = this;
            self.deptEvents = events["non-tech"];
        },
        mounted() {
            let t2 = new this.$gsap.TimelineMax();
            t2.staggerFrom('.event', 0.4, {
                rotationX: 90,
                autoAlpha:0
            }, 0.1);
        },
        methods: {}
    }
</script>

<style scoped>
    @import "../css/common_style.css";
    @import "../css/eventDetails.css";

    .main-container {
        margin-top: 150px;
        margin-bottom: 80px;
    }

    canvas, .background {
        opacity: 1;
        background: #0d0d0d;
    }

    .bg-asset {
        position: fixed;
        z-index: -1;
        right: 50px;
        width: 70%;
        bottom: 30px;
        object-fit: fill;
        opacity: 0.8;
    }

    .event{
        margin: 0;
        padding: 4px;
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
            width: 50%;
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
            margin-top: 80px;
        }

        .bg-asset {
            left: 24px;
            bottom: 30px;
            width: 110%;
        }
    }
</style>