<template>
    <div class="topnav" id="myTopnav">
      <router-link to="/" class="active">課程</router-link>
      <router-link to="/new">最新消息</router-link>
      <router-link to="/contact">聯絡方式</router-link>
      <router-link to="/about">關於我</router-link>
      <a 
				href="javascript:void(0);" 
				style="font-size:15px;" 
				class="icon" 
				@click="dropDownNav">&#9776;
      </a>
    </div>
</template>

<script>
var myFunction = function () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

export default {
  methods: {
		dropDownNav() {
			myFunction()
		},
	},
}
</script>

<style scoped>
	.topnav{
		overflow: hidden;
		background-color: #333;
	}
  .topnav a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    color: #f2f2f2;
  }
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
	.active {
  	background-color: #4CAF50;
  	color: white;
	}
	.topnav .icon {
  	display: none;
	}

	@media screen and (max-width: 600px) {
  	.topnav a:not(:first-child) {display: none;}
  	.topnav a.icon {
    	float: right;
    	display: block;
  	}
	}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>