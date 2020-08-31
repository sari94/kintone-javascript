(function($) {
  'use strict';

  kintone.events.on('portal.show', function(event) {
    // hide icons
    $('.gaia-header-toolbar-menu').children('ul').children('li').each(function(index) {
      $(this).hide();
    });
    // change assigned
    $('.ocean-portal-assigned').find('.gaia-argoui-widget-title').each(function(index) {
      $(this).text('未処理');
    });
    // change app
    $('.ocean-portal-app').find('.gaia-argoui-widget-title').each(function(index) {
      $(this).text('申請');
    });
    // wide
    $('.ocean-portal-body-right').each(function(index) {
      $(this).css({'border-left-width':'0px','border-left-style':'solid','margin-top':'0px','padding-left':'10px','padding-right':'10px','padding-top':'10px','padding-bottom':'10px','width':'100%','font-size':'15px'});
    });
    $('.ocean-portal-assigned').find('.gaia-argoui-widget').each(function(index) {
      $(this).css({'margin-bottom':'28px'});
    });
    // index headername
    $('.ocean-portal-index-header-name').each(function(index) {
      $(this).css({'letter-spacing':'.1em'});
    });
    // moji
    $('.gaia-argoui-widget').each(function(index) {
      $(this).css({'letter-spacing':'.1em'});
    });
    // delete subete no application
    $('.gaia-argoui-widget-menu').each(function(index) {
      $(this).hide();
    });
    // sort application
    $('.gaia-argoui-appscrollinglist-list').each(function(index) {
      $(this).attr('class').sort();
    });
  });
})(jQuery);
