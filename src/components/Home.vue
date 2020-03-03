<template>
    <div id="Home" class="main">
        <div class="background"></div>
        <div class="main-container">
            <img class="mx-auto d-block udaan_logo" src="../assets/logo.png" alt="">
            <!--        <a class="pullUp" @click="$router.push('/events')"><i class="fa fa-angle-down" aria-hidden="true"></i>-->
            <!--        </a>-->
            <div ref="events" class="events">
                <div class="civil">
                    <img src="../assets/civil_header.png" alt="">
                    <div class="content" style="height: 300px">
                        <p>Civil</p>
                    </div>
                </div>
            </div>
            <div class="events">
                <div class="computer">
                    <img src="../assets/computer_header.png" alt="">
                    <div class="content" style="height: 300px">
                        <p>Computer/IT</p>
                    </div>
                </div>
            </div>
            <div class="events">
                <div class="electrical">
                    <img src="../assets/electrical_header.png" alt="">
                    <div class="content" style="height: 300px">
                        <p>Electrical</p>
                    </div>
                </div>
            </div>
            <div class="events">
                <div class="electronics">
                    <img src="../assets/electronics_header.png" alt="">
                    <div class="content" style="height: 300px">
                        <p>EC/EL</p>
                    </div>
                </div>
            </div>
            <div class="events">
                <div class="mechanical">
                    <img src="../assets/mechanical_header.png" alt="">
                    <div class="content" style="height: 300px">
                        <p>Mechanical</p>
                    </div>
                </div>
            </div>
            <div class="events">
                <div class="production">
                    <img src="../assets/production_header.png" alt="">
                    <div class="content" style="height: 300px">
                        <p>Production</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped type="text/css">
    @import "../css/home.css";

    .main-container {
        position: absolute;
        margin-top: 100px;
    }

    .background {
        position: absolute;
        background: #FFFEE3;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .events p {
        font-size: 60px;
        font-weight: bold;
    }

    .events img {
        width: 100%;
        object-fit: contain;
    }

    .civil .content {
        background: #f5a1af;
    }

    .computer img {
        background: #f5a1af;
    }

    .computer .content {
        background: #caf8f9;
    }

    .computer img {
        background: #f5a1af;
    }

    .electrical .content {
        background: #a2bcc9;
    }

    .electrical img {
        background: #caf8f9;
    }

    .electronics .content {
        background: #b0fe76;
    }

    .electronics img {
        background: #a2bcc9;
    }

    .mechanical .content {
        background: #ffbf3e;
    }

    .mechanical img {
        background: #b0fe76;
    }

    .production .content {
        background: #99dbff;
    }

    .production img {
        background: #ffbf3e;
    }
</style>
