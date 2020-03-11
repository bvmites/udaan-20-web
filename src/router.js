import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Events from "@/components/Events";
import About from "@/components/About";
import TheRoadtoUrbanization from "@/views/TheRoadtoUrbanization";
import JackADullBoy from "@/views/JackADullBoy";
import FlagshipEvent from "@/views/FlagshipEvent";
import MADHouse from "@/views/MADHouse";
import Workshop from "@/views/Workshop";
import PulleyingTheFuture from "@/views/PulleyingTheFuture";
import WireMoreToWireless from "@/views/WireMoreToWireless";
import LightningYearsAhead from "@/views/LightningYearsAhead";
import CyberClan from "@/views/CyberClan";
import Cart from "@/components/Cart";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/civil',
      name: 'TheRoadtoUrbanization',
      component: TheRoadtoUrbanization
    },
    {
      path: '/cpit',
      name: 'CyberClan',
      component: CyberClan
    },
    {
      path: '/ee',
      name: 'LightningYearsAhead',
      component: LightningYearsAhead
    },
    {
      path: '/ecel',
      name: 'WireMoreToWireless',
      component: WireMoreToWireless
    },
    {
      path: '/mech',
      name: 'PulleyingTheFuture',
      component: PulleyingTheFuture
    },
    {
      path: '/workshop',
      name: 'Workshop',
      component: Workshop
    },
    {
      path: '/madhouse',
      name: 'MADHouse',
      component: MADHouse
    },
    {
      path: '/starevent',
      name: 'FlagshipEvent',
      component: FlagshipEvent
    },
    {
      path: '/nontech',
      name: 'JackADullBoy',
      component: JackADullBoy
    },
  ]
})
