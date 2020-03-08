<template>
    <div id="MenuComponent">
        <div class="n-container">
            <nav>
                <input ref="checkbox" type="checkbox" id="nav" class="hidden">
                <label for="nav" class="nav-btn">
                    <i></i>
                    <i></i>
                    <i></i>
                </label>
                <div class="logo">
                    <a @click="$router.push('/')">Udaan</a>
                </div>
                <div class="nav-wrapper">
                    <ul>
                        <li v-for="navigation in navigations" v-bind:key="navigation"><a
                                @click="navigate(navigation.url)">{{ navigation.name }}</a></li>
                        <li><a @click="navigate('cart')">Cart <i class="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <!--        <div class="social-media">-->
        <!--            <a href="#">A</a>-->
        <!--            <a href="#">B</a>-->
        <!--            <a href="#">C</a>-->
        <!--            <a href="#">D</a>-->
        <!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "MenuComponent",
        data() {
            return {
                isOpen: false,
                navigations: [
                    {
                        name: 'Home',
                        url: '/'
                    },
                    {
                        name: "Events",
                        url: 'events'
                    },
                    {
                        name: "About",
                        url: 'about'
                    }
                ],
            }
        },
        mounted() {
        },
        methods: {
            navigate(url) {
                this.$refs.checkbox.checked = false;
                this.$router.push(url);
            },
            gotoEvents() {
                // this.$router.push('/');
                var element = this.$refs['events'];
                console.log(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        }
    }
</script>

<style scoped>
    @import "../css/menu.css";
    @import "../css/fontfaces.css";
</style>

<style type="text/css">
    * {
        box-sizing: border-box;
    }

    html {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    a:hover{
        color: white;
    }

    nav{
        font-family: Riviera;
    }

</style>