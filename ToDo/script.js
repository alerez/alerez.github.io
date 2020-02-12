Vue.component("task", {
	props: ["data"],
	methods: {
		task_del: function () {
			this.$emit('task_del');
		},
		task_edit: function () {
			this.$emit('task_edit');
		},
		task_done: function () {
			this.$emit('task_done');
		}
	},
	template: `
	<div class="task" v-bind:class="{ taskFalse: data.checked}" >
		<div class="content">
			<div v-if="!data.editable">
				<p class="task_content">{{data.text}}</p>
				<div class="button"> 
					<button @click="task_done()" class="task_done">✅</button>
					<button @click="task_edit()" class="task_edit">✏️</button>
					<button @click="task_del()" class="task_del">❌</button>
				</div>
			</div>
			<div v-if="data.editable">
       			<input v-model="inputEdit" class="input" size="70px"/>
   				<button v-on:click="saveEdit(index)">💾</button>
   				<button v-on:click="disableEdit(index)">⊗</button>
       		</div>	
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
		items: [{
			editable: false
		}],
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
		task_done(index){
			this.items[index].checked = true;
			fetch('https://aboyko.shpp.me/serv-api-v1/changeItem.php?checked=' + this.items[index].checked + '&id=' + index + '&text=' + this.items[index].text)
				.then(res => res.json())
				.then((response) => {
						fetch('https://aboyko.shpp.me/serv-api-v1/getItems.php')
							.then(res => res.json())
							.then((response) => {
								this.items = response.items
							});
				});
		},
		task_edit(index){
			this.items[index].editable = true;
			this.inputEdit.text = this.items[index].text;
		}
	 },
	mounted() {
		fetch('https://aboyko.shpp.me/serv-api-v1/getItems.php')
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