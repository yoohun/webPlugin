当前项目是用于存储自己写的各种小插件，并且做记录

插件一：
类似于ios的开关（携带文字的开关）

使用方法：
在使用前需要先将该控件引入页面中
`<script src="js/checkbox1.js"></script>`  
HTML页面：
在需要使用的时候，在页面的相应地方输入：
表示状态为开的按钮：
`<input type="checkbox" class="pluginCheckbox" name="checboxOn">`
表示状态为关的按钮：
`<input type="checkbox" class="pluginCheckbox" name="checboxOff" >`

在页面中引用按钮之后还需要对按钮进行初始化

在js文件中对所需的按钮进行初始化   
```$(document).ready(function(e) {
    $('input').initCheckbox();
   });
```     

使用以下方法获取到该按钮的开关状态
$("#a").getCheckboxStatus();


	

