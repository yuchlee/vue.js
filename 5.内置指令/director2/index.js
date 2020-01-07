var app = new Vue({
	el: "#app",
	data: {
		list: [
			{
				id: 1,
				name: 'iPhone 7',
				price: 6188,
				count: 1,
				state: false
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1,
				state: false
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21488,
				count: 1,
				state: false
			}
		],
		allChecked: false
	},
	computed: {
		totalPrice: function(){
			var total = 0;
			for (var i = 0; i < this.list.length; i++) {
				var item = this.list[i];
				if(item.state){
					total += item.price * item.count;
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		},
		allSelected: function(){
			var count = 0;
			this.list.forEach(function(item, index) {
                if(item.state == true){
                	count++;
                }
            });
            if(count == this.list.length){
            	this.allChecked = true;
            }else{
            	this.allChecked = false;
            }
		}
	},
	methods:{
		handleReduce: function(index){
			if(this.list[index].count === 1) return;
			this.list[index].count--;
		},
		handleAdd: function(index){
			this.list[index].count++;
		},
		handleRemove: function(index){
			this.list.splice(index,1);
		},
		checkedOne:function(one){
			one.state = !one.state;
		},
		checkedAll: function(){
			this.allChecked = !this.allChecked;
			var _this = this;
			if (this.allChecked) {
                this.list.forEach(function(item, index) {
                    item.state = true;
                });
            }else{
            	this.list.forEach(function(item, index) {
                    item.state = false;
                });
            }
		}
	}
});
