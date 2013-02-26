

function proQuestSearchGo(){
var url="http://proxycu.wrlc.org/login?url=http://proquest.umi.com/pqdweb?RQT=305&FT=1&DBId=10000011%2C1006829&SQ=";
var searchInputEl = document.getElementById("proQuestSearchInput");
document.location=url + encodeURIComponent(searchInputEl.value);
}


//Include FancyBox File

function getUrlVars()
{	
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
	if(getUrlVars()["S"]=="TOU") {
		$("div#content").css("float","left");
		$("div#content").css("padding","15px");
		}
if ($.browser.msie && $.browser.version == 7.0){
document.write("<script src=\"http://www.lib.cua.edu/common/nginx/old_fancybox/fancybox/jquery.fancybox.js\"><\/script>");
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://www.lib.cua.edu/common/nginx/old_fancybox/fancybox/jquery.fancybox.css\">");
	}

$(document).ready(function () {
	    //remove Show Citation Information temp
	 $("span#SearchResults").html('');
	$("body").addClass("drill school");
	//remove some extra whitespace
	$('td.BorderN:first').hide();
	$('td.BorderW:first').hide();
	$('td.SS_Text.PadAll').remove();
	 $("td.CornerSW").remove();
  	$("td.BorderS").remove();
   $("td.CornerSE").remove();
   	$('td.CornerNW,td.BorderW').remove();
	$('td.BorderE').remove();
	$('table.CandyWrap');
	$('td').css("width", "auto");//fix some style issue
try
  {
  //Run some code here --Fix style issue for non-journal article
  	if(format!="JournalFormat"||format!="Journal") {
	$('span.SS_ALTermsOfUse').prependTo('div#CitationResults');
	$('#JournalLinkTable').prependTo('div#CitationResults');
	$('#BookLinkTable').prependTo('div#CitationResults');
	$('#ContentNotAvailableTable').prependTo('div#CitationResults');
	$('#ContentAvailableTable').prependTo('div#CitationResults');
	$('#CandyWrapper:first').addClass("SS_CitationTable2");
	//$('div#CitationResults>table#CandyWrapper:first>tbody>tr>td').find("table").eq(4).addClass("SS_CitationTable");
	}

//thesis
var pubtime=$('input[name="date"]').val();

	if(format=="DissertationFormat" && pubtime >='1997'){
		$('table#CandyWrapper').prepend('<div id="enterText" style="font-weight:bold; padding-left:10px">It appears the article you are looking for is a Dissertations.<br/>Click the search button, and it will take you to the Dissertations database.</div><div id="proQuestSearchBox" style="border: 0px; background-color:#FFFFFF;margin: 0 1.00em 1.00em 0; padding: 1.00em 0.75em;"> <input type="hidden" id="proQuestSearchInput" size="10" value="'+ $("#emailCitationButtons>input[name=title]").val() + '" onKeyPress="handleKeyPress(event,this.form)" /><div style="display:inline"><input type="button"  value="Locate this article in Dissertations database" onclick="proQuestSearchGo()" /></div></div>');
	$('#optionimg').show();
	$("tr.MediumLine").hide();
	$("tr.MediumLine").closest("td").hide();
	$('#optionimg').attr("src","http://lgimages.s3.amazonaws.com/data/imagemanager/50327/asc-add.png");
	}

  }
catch(err)
  {
  //Handle errors here
  }
		
     //wrap the citation table for fancybox	
	   var divshow = document.createElement("div");
       divshow.id = "Wrap_CitationTable";
       var divhide = document.createElement("div");
       divhide.id = "Wrap_Hide";
       document.body.appendChild(divhide);
		divhide.appendChild(divshow);
		$('table.SS_CitationTable').prependTo('#Wrap_CitationTable');
		$('table.SS_CitationTable2').appendTo('#Wrap_CitationTable');
		

    //save link for Refine or alter criteria
	var $stra = $('div#RefinerLink1>a').attr("href");
	var $strtitle = '<a class="iframe" href="'+$stra+'"><img src="http://lgimages.s3.amazonaws.com/data/imagemanager/50327/refine.png" alt="Refine Search" style="height:20px;"/>Refine Citation</a>';
	//set citation style
	$('#citationstyleId').val('mla');
	$('input[value=saveashtml]').attr("checked", "checked");
	var $shead1 ='<tr class="firsttr"><td id="headarticle">You are looking for...</td><td id="refine1"><a class="inline" href="#Wrap_CitationTable"><img src="http://lgimages.s3.amazonaws.com/data/imagemanager/50327/export-icon.png" alt="Export Citation" style="height:20px;"/>Export Citation</a>'+$strtitle+'</td></tr>';
      $('#ContentNotAvailableTable').html($shead1);
	  $('#ContentAvailableTable').html($shead1);
	//using ajax to get citation
	$.ajax({
		type: "POST",
		url: './exportCitation',
		data: $('form#exportCitationFormId').serialize(),
		dataType: 'html',
		success: function(data) {
						var doc = document.createElement('html');
    					doc.innerHTML = data;

						$('#ContentNotAvailableTable').append('<tr style="width:95%"><td colspan="2"><div class="citationbox"><span class="dropt" title="This citation is in MLA format.">'+$('div',doc).html()+'<img src="http://www.lib.cua.edu/common/images/icon.png" alt="This citation is in MLA format" style="height:1.2em;padding-top:4px" /></span></div></td></tr>');   	
						$('#ContentAvailableTable').append('<tr style="width:95%"><td colspan="2"><div class="citationbox"><span class="dropt" title="This citation is in MLA format">'+$('div',doc).html()+'<img src="http://www.lib.cua.edu/common/images/icon.png" alt="This citation is in MLA format." style="height:1.2em;padding-top:4px" /></span></div></td></tr>');
											
						$('#refine1>a.AnchorButton').text(' Refine Citation');
						//turn on exportcitation by default for fancybox size issue
						try {
							   exportArrowLinkSet('exportCitation');
							}
							catch (e) {
								// handle the unsavoriness if needed
							}
				
			$(".iframe").colorbox({iframe:true, width:"70%", height:"800px"});
			
			if ( ($.browser.msie && $.browser.version == 7.0) ) {
				$("a.inline").fancybox({
					'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600, 
					'speedOut'		:	200, 
					'autoScale'		:	true,
					'overlayShow'	:	true,
					'overlayOpacity':	0.8, 
					'type'			:   'inline',
					'overlayColor'	:	'#2b2b2b'
				});
			}else{
			$(".inline").colorbox({inline:true, width:"50%"});

			}
						
		  }//ending for success function
	});//ending for ajax
    	
	//show/close of additional method
   $('#optionimg').click(function(){
         if ($("tr.MediumLine").is(":hidden")) {
			$("tr.MediumLine").show();
			$("tr.MediumLine").closest("td").show();
		    $('#optionimg').attr("src","http://lgimages.s3.amazonaws.com/data/imagemanager/50327/desc-add.png");
		 } else { 
				$("tr.MediumLine").hide();
				$("tr.MediumLine").closest("td").hide();
			   $('#optionimg').attr("src","http://lgimages.s3.amazonaws.com/data/imagemanager/50327/asc-add.png");
	    }
	});
   //add icon on additional option
   var i=1;
   $('td.CustomLinkGroup>div.cl>a').each(function(){
			switch(i)
			{			
			case 1:
 		 	 $(this).html('<br/><br/><img id="icon1" src="http://lgimages.s3.amazonaws.com/data/imagemanager/50327/searchcatlog.png" alt="Search Catalog" style="height:40px;"/>');
			 $(this).remove().appendTo('td.CustomLinkGroupLabel');
			  break;
		  	case 2:
			 $(this).html('<img id="icon2" src="http://lgimages.s3.amazonaws.com/data/imagemanager/50327/ill.png" alt="Interlibrary Loan"  style="height:40px;"/>');
			  $(this).remove().appendTo('td.CustomLinkGroupLabel');
			 break;
			 case 3:
			  $(this).html('<img id="icon3" src="http://lgimages.s3.amazonaws.com/data/imagemanager/50327/askus.png" alt="Ask Us" style="height:40px;"/>');
			   $(this).remove().appendTo('td.CustomLinkGroupLabel');
			 break;
			}
			 i=i+1;
		});
   
   //mouseover	   
   	   $("#icon1").hover(
 			 function () {
  			 $(this).parent().parent().parent().next("tr").children("td:first").text("Check the catalog to see if we have a hard copy of this journal.");
 		 },  function () {
 			   $(this).parent().parent().parent().next("tr").children("td:first").html("&nbsp;   ");
				  });
	   $("#icon2").hover(
 			 function () {
  			 $(this).parent().parent().parent().next("tr").children("td:first").text("Request this article through Interlibrary Loan. This article will be delivered to you by email.");
 		 },  function () {
 			   $(this).parent().parent().parent().next("tr").children("td:first").html(" &nbsp; ");
			});
	     $("#icon3").hover(
 			 function () {
  			 $(this).parent().parent().parent().next("tr").children("td:first").text("Talk to one of our references librarians and they might be able to help!");
 		 },  function () {
 			   $(this).parent().parent().parent().next("tr").children("td:first").html(" &nbsp; ");
			});



		//mark if fulltext
		var contentava=0;
		 $('#OtherSearchOptions').closest('table').remove();
		if($('#nofulltext').length<=0)  {
	       //hide additional option if full text 
		   $("tr.MediumLine").hide();
			$("tr.MediumLine").closest("td").hide();
		    contentava=1;
		   if(format=="JournalFormat"||format=="Journal")
			{
				$("[id='ArticleCL']").each(function(i){
					var testshort=$.trim($(this).html());
					var orgstr = $(this).parent().next("td").children().html();
					 if(testshort.length<=1) $(this).html(orgstr);
				  });
			}
			 if($("#crossRefLinkWrapper").length>0){
				$("#crossRefLinkWrapper").parent().next("td").remove();
			  };
			  $('span.CustomLinkGroupLabel').text('When full-text link is not available above, chances are you will still get it by the following options:');
		 }
		 else
		 {
		$('span.CustomLinkGroupLabel').html('<span id="MoreOptions">Sorry, no holdings were found for that journal. But there are still some choices.</span>');
		 $("tr.MediumLine:last").children("td.CustomLinkGroup").html('Is it a dissertation or thesis? If yes, <a href="http://proxycu.wrlc.org/login?url=http://proquest.umi.com/pqdweb?RQT=305&FT=1&DBId=10000011%2C1006829" target="_blank">click here</a> to search the Dissertation database');
		 }


 //remove additional parameter in TD
var whitelist = ["id","alt","class"];

$('#JournalLinkTable').find("td").each(function() {
    var attributes = this.attributes;
    var i = attributes.length;
    while( i-- ) {
        var attr = attributes[i];
        if( $.inArray(attr.name,whitelist) == -1 )
            this.removeAttributeNode(attr);
    }
});
$('#BookLinkTable').find("td").each(function() {
    var attributes = this.attributes;
    var i = attributes.length;
    while( i-- ) {
        var attr = attributes[i];
        if( $.inArray(attr.name,whitelist) == -1 )
            this.removeAttributeNode(attr);
    }
});
   
    //fix crossref issue
	$('#CrossRefTable').insertAfter('#JournalLinkTable');
	$('#CrossRefTable').hide();
	$('#crossRefLinkWrapper>a').prop("onclick", null);
	$('#crossRefLinkWrapper>a').click(function () { 
     $('.crossRefMessage').show();
	 $('#CrossRefTable').show();
  	 checkCrossRef();
    });
	//get journal name
	var jstr = $('#CitationJournalTitleValue').text();
	 //move journal link to resource table
	$("[id='JournalCL']").each(function() {
				if($(this).has('a').length>0){
	 $(this).parent().next().prepend(" via ");
     $(this).children('a').text(jstr).prependTo($(this).parent().next()); 
						}
	 $(this).parent("td").remove();
	 });
 
   //space tweak
	$('#pagewrapper').after('<div id="footwrapper"> &nbsp; </div>');
	//error reporting link
 $('#reporting').click(function () { 
      var url= "http://culib.wrlc.org/support/index.php?a=add&catid=2&b=360link&article="+ $.trim($('input[name=atitle]').val())+"&journal="+$.trim($('input[name=title]').val())+"&journalcit=vol:"+$.trim($('input[name=volume]').val())+" no:"+$.trim($('input[name=issue]').val())+"&url="+encodeURIComponent(window.location.href);
	  if(contentava==0){
		var xd2;
		var rc2=confirm("Please note that 'no holdings were found' is not a system problem. You should go back and use 'Request Item' to receive the item. Please 'OK' to continue for technical problem report form or 'Cancel' to return the previous page so that you could place a request for the item.");
		if (rc2==true)
		  {
		  window.open(url);
		  }
		
	  }else{
		  
		  window.open(url);
	  }
	
	});
 


 
 
});//closing of document ready
 

 
 



