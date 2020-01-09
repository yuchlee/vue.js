function isValueNumber(value){
	return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'');
}

Vue.component('input-number', {
	template:`
		<div class="input-number">
			<input @change="handleChange" type="text" :value="currentValue" @keydown.up="handleUp" @keydown.down="handleDown">
			<button @click="handleDown" :disabled="currentValue <= min">-</button>
			<button @click="handleUp" :disabled="currentValue >= max">+</button>
		</div>`,
	data: function(){
		return {
			currentValue: this.value
		}
	},
	props: {
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {
			type: Number,
			default: 0
		},
		step: {
			type: Number,
			default: 1
		}
	},
	methods:{
		handleUp:function(){
			if(this.currentValue >= this.max) return;
			this.currentValue += Number(this.step);
		},
		handleDown: function(){
			if(this.currentValue <= this.min) return;
			this.currentValue -= Number(this.step);
		},
		handleChange: function(event){
			var val = event.target.value.trim();
			var max = this.max;
			var min = this.min;
			if(isValueNumber(val)){
				val = Number(val);
				this.currentValue = val;
				if(val > max){
					this.currentValue = max;
				}else if(val < min){
					this.currentValue = min;
				}
			}else{
				event.target.value = this.currentValue
			}
		}
	}
});