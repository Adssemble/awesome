
////////////////////////////////////////////
////////////////// Modals //////////////////
///////////////////////////////////////////
$(function (e) {
    // jQuery Modal
    $('.modal').find('p:last-child').css('margin-bottom', 0);

    $('a[data-modal]').click(function(event) {
        
        $(this).modal({
            fadeDuration: 250,
            fadeDelay: 0.80,
            closeClass: 'custom-close-modal'
        });
        return false;
    });
     
    // Fancybox Modal
    $('.fancybox-content').find('p:last-child').css('margin-bottom', 0);

    $('[data-fancybox]')
    .not('[data-fancybox^="gallery"]')
    .fancybox({
        loop: false,
        transitionEffect: "slide",
        arrows: false,
        infobar: false, // counter
        toolbar  : true,
        smallBtn : true, // button inside the modal box
        buttons: [
        // "close"
        ],
        baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '</div>' +
        '</div>'
        ,
        afterLoad : function(instance, slide){
            // $('.fancybox-toolbar').append($('.fancybox-button'))
            $('.fancybox-navigation').append($('.fancybox-button--arrow_right'))
            $('.fancybox-navigation').append($('.fancybox-button--arrow_left'))
        },
    });

    $('[data-fancybox^="gallery-image"]').fancybox({
        loop: true,
        transitionEffect: "slide",
        animationEffect: "fade",
        arrows: true,
        infobar: true, // counter
        media : {
          youtube : {
            params : {
              autoplay : 0
            }
          }
        },
        clickContent: function(current, event) {
            return current.type === "image" ? false : false;
        },
        caption : function( instance, item ) {
          var caption = $(this).data('caption') || '';
          var subtitle = $(this).data('subtitle') || '';
          return ( caption.length ? '<div class="fancybox-title">'+ caption +'</div>' + '' : '' ) + ( subtitle.length ?  '<span class="fancybox-subtitle">'+ subtitle +'</span>' : '' );
        },
        buttons: [
            "close"
        ],
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1">' +
          '<div class="fancybox-bg"></div>' +
          '<div class="fancybox-inner">' +
          '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
          '<div class="fancybox-toolbar">{{buttons}}</div>' +
          '<div class="fancybox-navigation">{{arrows}}</div>' +
          '<div class="fancybox-stage"></div>' +
          '</div>' +
          '</div>'

        ,
        afterLoad : function(instance, slide){
            if(slide.contentType === 'image'){
                slide.$content.remove('.fb-caption').append('<div class="fb-caption">' + slide.opts.caption + '</div>');
            }

            $('.fancybox-toolbar').append($('.fancybox-button'))
            $('.fancybox-navigation').append($('.fancybox-button--arrow_right'))
            $('.fancybox-navigation').append($('.fancybox-button--arrow_left'))
        },
    });

    $('[data-fancybox^="gallery-video"]').fancybox({
        loop: false,
        transitionEffect: "slide",
        arrows: true,
        infobar: true, // counter
        media : {
          youtube : {
            params : {
              autoplay : 0
            }
          }
        },
        caption : function( instance, item ) {
          console.log($(this));
          var caption = $(this).data('caption') || '';
          var subtitle = $(this).data('subtitle') || '';
          return ( caption.length ? caption + '<br />' : '' ) + ( subtitle.length ?  '<span class="fancybox-subtitle">'+ subtitle +'</span>' : '' );
        },
        buttons: [
          "close"
        ],
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1">' +
          '<div class="fancybox-bg"></div>' +
          '<div class="fancybox-inner">' +
          '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
          '<div class="fancybox-toolbar">{{buttons}}</div>' +
          '<div class="fancybox-navigation">{{arrows}}</div>' +
          '<div class="fancybox-stage"></div>' +
          '</div>' +
          '</div>'
        ,
        afterLoad : function(instance, slide){
            if(slide.contentType === 'image'){
                slide.$content.remove('.fb-caption').append('<div class="fb-caption">' + slide.opts.caption + '</div>');
            }

            $('.fancybox-toolbar').append($('.fancybox-button'))
            $('.fancybox-navigation').append($('.fancybox-button--arrow_right'))
            $('.fancybox-navigation').append($('.fancybox-button--arrow_left'))
        },
      });

});