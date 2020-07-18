# split-blogger-post


split-blogger-post is compatible with almost all blogger templates and it can be implemented in easy ways. For user friendliness, this solution code come up with a button “Split Page '⏩' ” and easy usage within the text editor. It is light weight and comparatively optimized so it will not interrupt your scripts uselessly.

<br>
<img src="https://1.bp.blogspot.com/-SNY-Z4N4Zwk/XxHRiEjRihI/AAAAAAAACMY/pWBGf5GzDR02MXKGH975lfSgcYP7IHA9gCLcBGAsYHQ/s1600/anonce2.png" width="500"/>

<br>

Demo : https://nextprev-preview.blogspot.com/2018/11/test-post.html

<br>

<b>BASIC FEATURES</b><br>
- Posts and Pages can be divided into parts with page-breaks.<br>
- Navigation captions can be edited.<br>
- Slides counter can be displayed.<br>
- Custom HTML and CSS can be added above and below post slides.<br>

<br>
<b>How to Install split-blogger-post on a Blogger template.</b>

<br>

Installing split-blogger-post on your Blogger website is simple! In this article, we will walk you through each step. If you prefer visual instructions, check out our video tutorial below:

<br>
vid here
<br>

These are Following Steps:<br>

----------- Add CSS code to your template -----------<br>
 1. Go to Blogger Theme and Click the Edit HTML Button.<br>
 2. Click around the Code and Press Ctrl+F and Search "\]]></b:skin>" tag.<br>
 3. then paste the code above ]]></b:skin> tag. <br>
 4. click the Save Template button.<br>
 <br>
 <br>
----------- Add html code to your template -----------<br>
1. Go to Blogger Theme and Click the Edit HTML Button.<br>
2. Click around the Code and Press Ctrl+F and Search "\<data:post.body/>".<br><br>
In the most blogger templates, this tag exists at least twice, or more than once. But how can we find the right tag that we need. you can add afetr eatch one of this tag a comment like "place one" like the exemple bellow.<br><br>

image here<br>

3. Save the template and go to your website, and check one of your post to figure out the right place.<br>

in my case the right place is the third place as you can see in the image bellow.<br>

---image here---<br>


4. Remove the tag "\<data:post.body/>" and replace it with the code in the body.html file.<br>


----------- Add the javascripte code to your template -----------<br>

1. Click around the Code and Press Ctrl+F and Search for the close tag \</body>. <br>
2. Paste the code in the script.js file just befor the closing tag \</body>. <br>









