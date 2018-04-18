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
			<div style="padding:30px;"></div>
			<div 
				class="context"
				v-for="item in cart"
				:key=item.id
			>
				{{item.title}}
			</div>
			<div class="totalPriceStyle">
				總價：
				${{price}}
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

var openNav = function () {
		//document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("mySidenav").style.height = "100%";
}

var closeNav = function () {
		//document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mySidenav").style.height = "0";
}

export default {
    computed: {
        ...mapState(['cart']),
        ...mapGetters({
          lessons: 'lessonsInCart',
          price: 'priceInCart',
      }),
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
    height: 0;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
		overflow-y: hidden;
    transition: 0.5s;
    /* padding-top: 60px; */
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

.totalPriceStyle {
    
    margin: 20px;
    border-top: solid 1px white; 
    text-align: center;
    color: white;
}
</style>


