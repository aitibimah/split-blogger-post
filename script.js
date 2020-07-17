<script type='text/javascript'>
//<![CDATA[

var ll = function ll(sParam) { var l1 = decodeURIComponent(window.location.search.substring(1)), sURLVariables = l1.split('&'), sParameterName, i;                             

for (i = 0; i < sURLVariables.length; i++){ 

  sParameterName = sURLVariables[i].split('='); if (sParameterName[0] === sParam) { return sParameterName[1] === undefined ? true : sParameterName[1]; }}};

var lI = ll('atpage');
var l1l = $('#aiti_next');
var l11 = $('#aiti_prev');
var l1I = $('.aiti-body').prop('innerHTML').split('⏩');
$('.aiti-body').remove();
var lIl = $('#aiti-out');
var lI1 = $('#aiti-page-number');
var total=l1I.length ;
if(lI === undefined || lI == 1)  
                                {
                              l11.remove();
                              l1l.find('a').attr('href', '?atpage=2');
                              lIl.html(l1I[0]);
								lI1.html('1'+' of '+ total); } 
else { 
  
lI = parseInt(lI); 
if(l1I.length <= lI){ l1l.remove();}
var lII = lI + 1;
var l1ll = lI - 1; l1l.find('a').attr('href', '?atpage=' + lII);
l11.find('a').attr('href', '?atpage=' + l1ll);
lIl.html(l1I[l1ll]);
//lI1.html(lI);
lI1.html(lI+' of '+ total);

 }


//]]>
</script>
