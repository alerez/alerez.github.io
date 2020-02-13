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
		},
		save: function () {
			this.$emit('save');
		},
		disable: function () {
			this.$emit('disable');
		},
	},
	template: `
	<div class="task" v-bind:class="{ taskFalse: data.checked}" >
		<div class="content">
			<div v-if="!data.editable" class="contentText">
				<p class="task_content">{{data.text}}</p>
				<div class="button check"> 
					<input type="checkbox" v-model="data.checked" @click="task_done()" class="task_done">
					<button @click="task_edit()" class="task_edit">✏️</button>
					<button @click="task_del()" class="task_del">❌</button>
				</div>
			</div>
			<div v-if="data.editable">
       			<input v-on:keyup.enter="save()" v-model="data.inputedit" class="input" size="70px"/>
   				<button @click="save()">💾</button>
   				<button @click="disable()">⊗</button>
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
			text: '',
			editable: false,
			checked: false
		},
		items: [{
			inputedit: '',
			checked: false
		}]
	},
	methods: {
		getItems: function(){
			fetch('https://aboyko.shpp.me/serv-api-v1/getItems.php')
				.then(res => res.json())
				.then((response) => {
					this.items = response.items.map((item) => {
						item.editable = false;
						return item;
					})
				});
		},
		del(index){
			fetch('https://aboyko.shpp.me/serv-api-v1/deleteItem.php?id=' + index)
				.then(res => res.json())
				.then((response) => {
					if(response['ok'] === true){
						this.getItems()
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
								this.getItems()
							this.new_task.text = '';
						} else {
							alert("Error 500. Internal server error. Please try again later")
						}
					});
		}},
		task_done(index, id){
			this.items[index].checked = this.items[index].checked === false;
			this.checked = this.items[index].checked;
			fetch('https://aboyko.shpp.me/serv-api-v1/changeItem.php?id=' + id + '&text=' + this.items[index].text + '&checked=' + this.items[index].checked)
				.then(res => res.json())
				.then((response) => {
					this.getItems()
				});
		},
		task_edit(index){
			this.items[index].inputedit = this.items[index].text;
			this.items[index].editable = true;
		},
		save(index, id){
			this.items[index].text = this.items[index].inputedit;
			fetch('https://aboyko.shpp.me/serv-api-v1/changeItem.php?id=' + id + '&text=' + this.items[index].text + '&checked=' + this.items[index].checked)
				.then(res => res.json());
			this.items[index].editable = false;
		},
		disable(index){
			this.items[index].editable = false;
			this.items[index].inputedit = '';
		}
	 },
	mounted() {
		this.getItems()
		},
	});