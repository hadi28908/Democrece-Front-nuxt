jQuery(window).load(function($) {
  var filter_container = jQuery('#filterable-item-holder-1');

  filter_container.children().css('position','relative');
  filter_container.masonry({
    singleMode: true,
    itemSelector: '.filterable-item:not(.hide)',
    animate: true,
    animationOptions:{ duration: 800, queue: false }
  });
  jQuery(window).resize(function(){
    var temp_width =  filter_container.children().filter(':first').width()+20;
    filter_container.masonry({
      columnWidth: temp_width,
      singleMode: true,
      itemSelector: '.filterable-item:not(.hide)',
      animate: true,
      animationOptions:{ duration: 800, queue: false }
    });
  });
  jQuery('ul#filterable-item-filter-1 a').addEventListener('click',function(e){

    jQuery(this).classList.add("active");
    jQuery(this).parents("li").siblings().children("a").removeClass("active");
    e.preventDefault();

    var select_filter = jQuery(this).attr('data-value');

    if( select_filter == "All" || jQuery(this).parent().index() == 0 ){
      filter_container.children().each(function(){
        if( jQuery(this).classList.contains('hide') ){
          jQuery(this).removeClass('hide');
          jQuery(this).fadeIn();
        }
      });
    }else{
      filter_container.children().not('.' + select_filter).each(function(){
        if( !jQuery(this).classList.contains('hide') ){
          jQuery(this).classList.add('hide');
          jQuery(this).fadeOut();
        }
      });
      filter_container.children('.' + select_filter).each(function(){
        if( jQuery(this).classList.contains('hide') ){
          jQuery(this).removeClass('hide');
          jQuery(this).fadeIn();
        }
      });
    }

    filter_container.masonry();

  });
});
