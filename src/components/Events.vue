<template>
    <div id="Events">
        <div class="background"></div>
        <div class="main-container">
            <div class="departments">
                <ul class="department" v-for="department in departments" v-bind:key="department">
                    <li class="deptName"><a class="deptEvent" @click="$router.push(department.url)">{{ department.name }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Events",
        data() {
            return {
                departments: [
                    {
                        name: "Civil",
                        url: 'boa'
                    },
                    {
                        name: "Computer",
                        url: 'automotivePhilosophers'
                    },
                    {
                        name: "Electronics",
                        url: 'chamberOfCoders'
                    },
                    {
                        name: "Electrical",
                        url: 'halfWavePrince'
                    },
                    {
                        name: 'IT',
                        url: 'gobletOfWorkshops'
                    },
                    {
                        name: "EC",
                        url: 'scamandersSuitcase'
                    },
                    {
                        name: "Mechanical",
                        url: 'madHollows'
                    },
                    {
                        name: "Production",
                        url: 'orderOfOhms'
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    @import "../css/events.css";

    .main-container {
        position: absolute;
        /*width: 100%;*/
        top: 50%;
        transform: translateY(-50%);
    }

    .background {
        position: absolute;
        background: #333333;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: visibility 0.5s ease;
    }
    li{
        color: white;
    }
</style>