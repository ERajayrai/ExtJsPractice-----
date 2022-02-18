Ext.define(studentApp.view.StudentDeatilsGrid, {
   extend : 'Ext.grid.GridPanel',
   id : 'studentsDetailsGrid',
   store : 'StudentsDetailsGridStore',
   renderTo : 'studentsDetailsRenderDiv',
   layout : 'fit',
   
   columns : [{
      text : 'Student Name',
      dataIndex : 'studentName'
   },{
      text : 'ID',
      dataIndex : 'studentId'
   },{
      text : 'Department',
      dataIndex : 'department'
   }]
});


//creating object in ext js


//1
var studentObject = new student();
studentObject.getStudentName();

//#2


Ext.create()
Ext.create('Ext.Panel', {
   renderTo : 'helloWorldPanel',
   height : 100,
   width : 100,
   title : 'Hello world',
   html :   'First Ext JS Hello World Program'     
});

//Inheritance in Ext JS
//Inheritance is the principle of using functionality defined in class A into class B.

//In Ext JS, inheritance can be done using two methods −

Ext.define(studentApp.view.StudentDetailsGrid, {
   extend : 'Ext.grid.GridPanel',
   ...
});
///Here, our custom class StudentDetailsGrid is using the basic features of Ext JS class GridPanel


//Mixins is a different way of using class A in class B without extend.

mixins : {
   commons : 'DepartmentApp.utils.DepartmentUtils'
},
//Mixins are added in the controller where we declare all the other classes such as store, view, etc.
// In this way, we can call DepartmentUtils class and use its functions in the controller or in this application.




//container  => the base class of all the componets and container

//Components inside container: We can have multiple components inside the container.
var component1 = Ext.create('Ext.Component', {
   html:'First Component'
});
Ext.create('Ext.container.Container', {
   renderTo: Ext.getBody(),
   items: [component1]
});