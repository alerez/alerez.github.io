Vue.component("task", {
	props: ["data"],
	methods: {
		task_none: function () {
			this.$emit('task_none');
		},
		task_edit: function () {
			this.$emit('task_edit');
		}
	},
	template: `
	<div class="task">
		<div class="content">
			<p class="task_content">{{data.text}}</p>
		</div>
		<div class="button"> 
			<button class="task_done">✅</button>
			<button @click="task_edit()" class="task_edit">✏️</button>
			<button @click="task_none()" class="task_none">❌</button>
		</div>
	</div>
	`
});

const url = "http://aboyko.shpp.me/shpp_backend_v1/getItems.php";
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
			fetch('http://aboyko.shpp.me/shpp_backend_v1/deleteItem.php?id=' + index)
				.then(res => res.json())
				.then((response) => {
					this.items = response.items
				});
			setTimeout(true,200);
			fetch('http://aboyko.shpp.me/shpp_backend_v1/getItems.php')
				.then(res => res.json())
				.then((response) => {
					this.items = response.items
				});
		},
		add_task() {
			if(this.new_task.text !== ''){
				fetch('http://aboyko.shpp.me/shpp_backend_v1/addItems.php?text=' + this.new_task.text)
					.then(res => res.json())
					.then((response) => {
						this.items = response.items
					});
				setTimeout(true,200);
				fetch('http://aboyko.shpp.me/shpp_backend_v1/getItems.php')
					.then(res => res.json())
					.then((response) => {
						this.items = response.items
					});
				this.new_task.text = '';
		}},
	 },
	mounted() {
		fetch('http://aboyko.shpp.me/shpp_backend_v1/getItems.php')
			.then(res => res.json())
			.then((response) => {
				this.items = response.items
			});
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