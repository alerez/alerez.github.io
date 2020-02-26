const url = "https://aboyko.shpp.me/serv-api-v2/";
const site = "https://alerez.github.io/ToDov2/login.html";
let vue = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		login(){
			let request = JSON.stringify({login: this.nickName, password: this.pass});
			fetch(url + 'login.php', {
				method: 'POST',
				body: request,
				headers: {
					'Content-Type': 'application/json;'
				},
			}).then(res => res.json())
				.then((response) => {
					if (response.id) {
						this.login = '';
						this.pass = '';
					} else {
						alert("Error 500. Internal server error. Please try again later")
					}
				});
		},
		register(){
			let request = JSON.stringify({login: this.login, password: this.pass});
			fetch(url + 'register.php', {
				method: 'POST',
				body: request,
				headers: {
					'Content-Type': 'application/json;'
				},
			}).then(res => res.json())
				.then((response) => {
					if (response.id) {
						this.login = '';
						this.pass = '';
					} else {
						alert("Error 500. Internal server error. Please try again later")
					}
				});
		},
	},
	mounted() {

	},
});