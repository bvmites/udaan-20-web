<template>
    <div id="WireMoreToWireless" class="background">
        <div class="main-container">
            <p class="text-center heading">Wire More To Wireless</p>
            <div class="events container">
                <p class="event text-center" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{event.eventName}}</p>
            </div>
        </div>
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
        created(){
            let self = this;
            self.deptEvents = events.tech.ec;
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