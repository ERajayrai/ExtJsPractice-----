Ext.define('student',{
	extend:'persion',
	schoolName:'ajay',
	constructor: function(name,schoolName){
		this.schoolName=schoolName ||'ajay'

		//call the prant constructure
		this.callParent(arguments);
	},

	getSchoolName:function(){
		alert("this is my schoolName"+""+this.schoolName);
	}
})