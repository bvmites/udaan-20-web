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
        },
        methods: {
        }
    }
</script>

<style scoped>
    .main-container {
        margin-top: 200px;
    }

    .background {
        background-image: linear-gradient(to bottom,#13719e,#10045a);
    }

    .heading{
        color: white;
        font-size: 32px;
    }

    .events{
        margin-left: 8%;
    }

    .event{
        margin: 8px;
        font-size: 20px;
        color: white;
    }

    .bg-asset{
        position: fixed;
        z-index: -1;
        right: 50px;
        width: 70%;
        bottom: 30px;
        object-fit: fill;
        opacity: 0.8;
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
            left: 24px;
            bottom: 30px;
            width: 110%;
        }
    }
</style>