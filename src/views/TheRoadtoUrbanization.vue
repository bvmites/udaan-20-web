<template>
    <div id="TheRoadtoUrbanization" class="background">
        <div class="main-container">
            <p class="text-center heading">The Road to Urbanization</p>
            <div class="events container">
                <p class="event text-center" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{event.eventName}}</p>
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
        margin-top: 80px;
    }

    .background {
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
            font-size: 6vw;
        }

        .events{
            margin-top: 40px;
        }
    }

    @media screen and (min-width: 960px) {
        .heading{
            font-size: 2vw;
        }
    }
</style>