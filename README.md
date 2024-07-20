# JS_chai_aur_code


document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning from chai and code​</h1>​
document.getElementById

ƒ getElementById() { [native code] }

document.getElementById('title').id
'title'

document.getElementById('title').class
undefined

document.getElementById('title').className
'heading'


document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }

document.getElementById('title').getAttribute("id")
'title'

document.getElementById('title').getAttribute("class")
'heading'

document.getElementById('title').setAttribute("class", "test")
undefined

document.getElementById('title').setAttribute("class", "test heading")
undefined

title
<h1 id=​"title" class=​"test heading">​DOM learning from chai and code​</h1>​

title.style.backgroundColor ='green'
'green'

title.style.padding = '15px'
'15px'

title.style.borderRadius = '15px'
'15px'

title
<h1 id=​"title" class=​"test heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 15px;​">​DOM learning from chai and code​</h1>​

title.textContent
'DOM learning from chai and code'

title.innerHTML
'DOM learning from chai and code'

