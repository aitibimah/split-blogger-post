# split-blogger-post


split-blogger-post is compatible with almost all blogger templates and it can be implemented in easy ways. For user friendliness, this solution code come up with a button “Split Page '⏩' ” and easy usage within the text editor. It is light weight and comparatively optimized so it will not interrupt your scripts uselessly.

<br>
<img src="https://1.bp.blogspot.com/-SNY-Z4N4Zwk/XxHRiEjRihI/AAAAAAAACMY/pWBGf5GzDR02MXKGH975lfSgcYP7IHA9gCLcBGAsYHQ/s1600/anonce2.png" width="500">

<br>

Demo : https://nextprev-preview.blogspot.com/2018/11/test-post.html


<H4>BASIC FEATURES</H4>
- Posts and Pages can be divided into parts with page-breaks.<br>
- Navigation captions can be edited.<br>
- Slides counter can be displayed.<br>
- Custom HTML and CSS can be added above and below post slides.<br>


<H4>How to Install split-blogger-post on a Blogger template.</H4>


Installing split-blogger-post on your Blogger website is simple! In this article, we will walk you through each step. If you prefer visual instructions, check out our video tutorial below:

```
vid here
```


These are Following Steps:<br>

<h6>Add CSS code to your template</h6>
 1. Go to Blogger Theme and Click the Edit HTML Button.
 2. Click around the Code and Press Ctrl+F and Search for:  ```]]></b:skin>```
 3. then paste the code in the style.css file above:  ```]]></b:skin>```
 4. click the Save Template button.
 
<h6>Add html code to your template</h6>
1. Go to Blogger Theme and Click the Edit HTML Button.<br>
2. Click around the Code and Press Ctrl+F and Search for: 

```
<data:post.body/>
```


In the most blogger templates, this tag exists at least twice, or more than once. But how can we find the right tag that we need. you can add afetr eatch one of this tag a comment like ```<h1>place one</h1>``` like the exemple bellow.

```
image here
```

3. Save the template and go to your website, and check one of your post to figure out the right place.
In my case the right place is the third place as you can see in the image bellow.<br>

```
image here
```


4. Remove the tag ```<data:post.body/>``` and replace it with the code in the body.html file.

<h6>Add the javascripte code to your template</h6><br>

1. Click around the Code and Press Ctrl+F and Search for the close tag ```</body>```. <br>
2. Paste the code in the script.js file just befor the closing tag ```</body>```. <br>









