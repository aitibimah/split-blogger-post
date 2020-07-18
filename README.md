# split-blogger-post


split-blogger-post is compatible with almost all blogger templates and it can be implemented in easy ways. For user friendliness, this solution code come up with a button “Split Page '⏩' ” and easy usage within the text editor. It is light weight and comparatively optimized so it will not interrupt your scripts uselessly.

<br>
<img src="https://1.bp.blogspot.com/-SNY-Z4N4Zwk/XxHRiEjRihI/AAAAAAAACMY/pWBGf5GzDR02MXKGH975lfSgcYP7IHA9gCLcBGAsYHQ/s1600/anonce2.png" width="500">

<br>

Demo : https://nextprev-preview.blogspot.com/2018/11/test-post.html


<H4>BASIC FEATURES</H4>

- Posts and Pages can be divided into parts with page-breaks.

- Navigation captions can be edited.

- Slides counter can be displayed.

- Custom HTML and CSS can be added above and below post slides.


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

1. Go to Blogger Theme and Click the Edit HTML Button.

2. Click around the Code and Press Ctrl+F and Search for: ```<data:post.body/>```

In the most blogger templates, this tag exists at least twice, or more than once. But how can we find the right tag that we need.

If you have multiple <data:post.body/> in your template then, before each of those <data:post.body/> tag write this <h1>First place</h1>, here ‘First’ is for the first <data:post.body/>, write ‘Second’ for the second <data:post.body/> and so on. Now save your template.

After saving is complete, go to your blog and notice which <h1 /> tag is appearing before your post body. If ‘First’ is appearing then the first <data:post.body/> is the actual <data:post.body/>.

That’s it, you just debugged your code to find out which <data:post.body/> is the actual one working. Now go back to your template code editor and again find all those <data:post.body/> and remove the <h1></h1> tag you added to debug, but only before the actual <data:post.body/>, write something like <!– POST BODY HERE –>, a comment, so that to use it the next step.


3. Remove the tag ```<data:post.body/>``` and replace it with the code in the body.html file.

<h6>Add the javascripte code to your template</h6>

1. Click around the Code and Press Ctrl+F and Search for the close tag ```</body>```. <br>

2. Paste the code in the script.js file just befor the closing tag ```</body>```. <br>









