<template>
    <div class="rightcolumn">
        <div class="container" @click="OpenNav">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div id="mySidenav" class="sidenav">
            <a 
                href="javascript:void(0)" 
                class="closebtn" 
                @click="CloseNav">&times;
            </a>
            <div 
                class="context"
                v-for="item in cart"
                :key=item.id
            >
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

var openNav = function () {
    document.getElementById("mySidenav").style.width = "250px";
}

var closeNav = function () {
    document.getElementById("mySidenav").style.width = "0";
}

export default {
    computed: {
        ...mapState(['cart']),
    },
    methods: {
        OpenNav() {
            openNav()
        },
        CloseNav() {
            closeNav()
        },
    },
    
}
</script>

<style scoped>
.rightcolumn{
    float: right;
    width: 5%;
    margin-top: 30px;
    text-align: right;
}

.container {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
}
.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.sidenav{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 36px;
    margin-right: 50px;
}

.context{
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 12px;
    color: #818181;
    width: 100%;
    text-align: left;
}
</style>


