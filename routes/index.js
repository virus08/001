var express = require('express');
var router = express.Router();
var data = { 
		site:{
			name : 'INSPINIA+ Admin Themexx.',
			title:'My App Title1 '
		},
		user:{
			name:'Wanchai Fuangmali',
			position:'Pre-Sales',
			profile_img:'img/profile_small.jpg',
			menus:[
				{
					href:'profile.html',
					label:'Profile'
				},{
					href:'contacts.html',
					label:'Contacts'
				}
			]
		},
		xpath:'#',
		routes:[{ 
			path: '/das1',
			component: { 
				template: '<async-example></async-example>' 
			}},{ 
			path: '/das2',
			component: { 
				template: '<div><h1> Dashboard v.2</h1></div>' 
			}},{
			path: '/report1',
			component: { 
				template: '<div><h1> Report v.1</h1></div>' 
			}},{
			path: '/report2',
			component: { 
				template: '<div><h1> Report v.2</h1></div>' 
			}}
			],
		userapps:[
			{
				name:'App1',
				href:'#',
				icont:'fa fa-th-large',
				menus:[
				{
					href:'#/das1',
					label:'Dashboard v.1'
				},{
					href:'#/das2',
					label:'Dashboard v.2'
				}],
			},
			{
				name:'App2',
				href:'#',
				icont:'fa fa-th-large',
				menus:[
				{
					href:'#/report1',
					label:'Report v.1'
				},
				{
					href:'#/report2',
					label:'Report v.2'
				}],
			}
		]
		
	};
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', data);
  //res.sendFile('index.html', {root: './public/'});
});

router.get('/login', function(req, res, next) {
	  res.render('index', data);
	  //res.sendFile('index.html', {root: './public/'});
	});

router.get('/endpoint', function(req, res){
	res.header('Content-type','application/json');
	res.header('Charset','utf8');
	res.send(req.query.callback + '('+ JSON.stringify(data) + ');');
});

module.exports = router;
