<template>
	<div class="rightcolumn">
        <div class="HoverableSidenav" @click="OpenNav">
            <div id="bar">共{{lessons}}筆</div>
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
.HoverableSidenav div:hover {
    right: 0px;
}
#bar {
    top: 20px;
    background-color: #4CAF50;
}
.sidenav{
    position: fixed;
    height: 0;
    width: 250px;
    top: 0;
    right: 0;
    z-index: 1;

    background-color: #111;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: 0.5s;
}
.sidenav a {
    display: block;

    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;

    transition: 0.3s;
}
.sidenav a:hover {
    color: #f1f1f1;
}
.sidenav .closebtn {
    position: absolute;
    margin-right: 50px;
    top: 0;
    left: 0;
    
    font-size: 36px;
}
.context{
    padding: 8px 8px 8px 32px;
    width: 100%;

    text-decoration: none;
    font-size: 12px;
    text-align: left;
    color: #818181;
}
.totalPriceStyle { 
    margin: 20px;

    text-align: center;
    border-top: solid 1px white; 
    color: white;
}
.HoverableSidenav div {
    cursor: pointer;
    position: fixed;
    margin-top: 40px;
    padding: 15px;
    right: -50px;

    width: 100px;
    text-decoration: none;
    font-size: 20px;
    text-align: left;
    color: white;
    border-radius: 5px 0 0 5px;

    transition: 0.3s;
}
</style>


