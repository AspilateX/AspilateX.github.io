!function(o){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),o((function(){var e=o(window),a=o("body");a.addClass("is-loading"),e.on("load",(function(){window.setTimeout((function(){a.removeClass("is-loading")}),100)})),o("form").placeholder();var n=o("#banner");if(n.length>0){skel.vars.IEVersion<12&&(e.on("resize",(function(){var o=.6*e.height(),a=n.height();n.css("height","auto"),window.setTimeout((function(){a<o&&n.css("height",o+"px")}),0)})),e.on("load",(function(){e.triggerHandler("resize")})));var i=n.data("video");i&&e.on("load.banner",(function(){e.off("load.banner"),!skel.vars.mobile&&!skel.breakpoint("large").active&&skel.vars.IEVersion>9&&n.append('<video autoplay loop><source src="'+i+'.mp4" type="video/mp4" /><source src="'+i+'.webm" type="video/webm" /></video>')})),n.find(".more").addClass("scrolly")}o(".scrolly").scrolly(),e.on("load",(function(){var e=o(".thumbnails");e.length>0&&e.poptrox({onPopupClose:function(){a.removeClass("is-covered")},onPopupOpen:function(){a.addClass("is-covered")},baseZIndex:10001,useBodyOverflow:!1,overlayColor:"#222226",overlayOpacity:.75,popupLoaderText:"",fadeSpeed:500,usePopupDefaultStyling:!1,windowMargin:skel.breakpoint("small").active?5:50})})),e.on("load",(function(){e.trigger("scroll")}))}))}(jQuery);