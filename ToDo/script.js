Vue.component("task", {
	props: ["data"],
	methods: {
		task_del: function () {
			this.$emit('task_del');
		},
		task_edit: function () {
			this.$emit('task_edit');
		}
	},
	template: `
	<div class="task">
		<div class="content">
			<p class="task_content">{{data.text}}</p>
<!--				<div style="display: none">-->
<!--					<input-->
<!--						type="text"-->
<!--						v-model="task.text">-->
<!--				</div>-->
		</div>
		<div class="button"> 
			<button class="task_done">✅</button>
			<button @click="task_edit()" class="task_edit">✏️</button>
			<button @click="task_del()" class="task_del">❌</button>
		</div>
	</div>
	`
});

const url = "https://aboyko.shpp.me/serv-api-v1/getItems.php";
let vue = new Vue({
	el: '#app',
	data: {
		new_task: {
			text: ''
		},
		items: [],
	},
	methods: {
		del(index){
			fetch('https://aboyko.shpp.me/serv-api-v1/deleteItem.php?id=' + index)
				.then(res => res.json())
				.then((response) => {
					if(response['ok'] === true){
						fetch('https://aboyko.shpp.me/serv-api-v1/getItems.php')
						.then(res => res.json())
						.then((response) => {
							this.items = response.items
						});
					} else {
						alert("Error 500. Internal server error. Please try again later")
					}
				});
		},
		add_task() {
			if(this.new_task.text !== ''){
				fetch('https://aboyko.shpp.me/serv-api-v1/addItems.php?text=' + this.new_task.text)
					.then(res => res.json())
					.then((response) => {
						if (response.id) {
							fetch('https://aboyko.shpp.me/serv-api-v1/getItems.php')
							.then(res => res.json())
							.then((response) => {
								this.items = response.items
							});
							this.new_task.text = '';
						} else {
							alert("Error 500. Internal server error. Please try again later")
						}
					});
		}},
		// edit(){
		// 	this.task.text = this.data.text;
		// 	this.task.text.style = 'display: block'
		// }
	 },
	mounted() {
		fetch('https://aboyko.shpp.me/serv-api-v1/getItems.php')
			.then(res => res.json())
			.then((response) => {
				this.items = response.items
			});
			console.log(items)
		},

	});












// {
// 	"items":[
// 		{
// 			"id":0,
// 			"text":"some0text",
// 			"checked":false
// 		},
// 		{
// 			"id":2,
// 			"text":"some2test",
// 			"checked":false
// 		}
// 	]
// }