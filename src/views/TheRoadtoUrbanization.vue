<template>
    <div id="TheRoadtoUrbanization" class="background">
        <div>
            <img class="bg-asset" src="../assets/backgrounds/civil-bg.svg" alt="">
        </div>
        <div class="main-container">
            <div class="events">
                <p class="heading">The Road to Urbanization</p>
                <p class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{event.eventName}}</p>
            </div>
        </div>
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
        created(){
            let self = this;
            self.deptEvents = events.tech.ce;
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
        background-color: #0d0d0d;
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
        right: 0;
        width: 80%;
        bottom: -10px;
        object-fit: fill;
        opacity: 0.5;
    }

    @media screen and (max-width: 960px) {
        /*.heading{*/
        /*    font-size: 6vw;*/
        /*}*/

        .events{
            margin-top: 40px;
        }
        .bg-asset{
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
        .bg-asset{
            right: 0;
            width: 100%;
        }
    }
    @media screen and (max-width: 556px) {
        .bg-asset{
            left: 0;
            bottom: -10px;
            width: 150%;
        }
    }
</style>