Vue.component('store-item', {
	template: 
	`
	<div>
	<ul>
	<li>
	{{items.name}} {{items.price}}
	</li>
	</ul>
	
	</div>`,

	data (){
		return{
			items:[
			{
				name: 'Boogie Board',
				price: '29.99'
			},
			{
				name: 'Cornhole Boards',
				price: '50.00'
			}
			]
		}
	}

});



var app = new Vue({
	el: '#app',
	
});