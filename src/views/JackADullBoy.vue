<template>
    <div id="JackADullBoy" class="background">
        <canvas id="fluid" style="width: 100%; height: 100%;"/>
        <div class="main-container">
            <p class="text-center heading">Jack a Dull Boy?</p>
            <div class="events container">
                <p class="event text-center" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{event.eventName}}</p>
            </div>
        </div>
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
        created(){
            let self = this;
            self.deptEvents = events["non-tech"];
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>
    @import "../css/common_style.css";

    .main-container {
        margin-top: 80px;
    }

    canvas,.background {
        opacity: 1;
        background-color: #0d0d0d;
    }

    .heading{
        color: white;
    }

    .event{
        margin: 8px;
        font-size: 20px;
        color: white;
    }

    .event:hover{
        transition: all 0.5s ease;
        transform: scale(1.2);
    }

    @media screen and (max-width: 960px) {
        .heading{
            font-size: 4vw;
        }
    }

    @media screen and (min-width: 960px) {
        .heading{
            font-size: 2vw;
        }
    }
</style>