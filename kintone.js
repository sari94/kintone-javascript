(function($) {
  'use strict';

  const modifiedLabel = '#KINTONE_FRONTEND_FIELD_MODIFIED#'
  const backgroundColor = '#ffc0cb';
  const fontColor = '#ff0000';

  var hide_contents = [
    '.gaia-argoui-app-breadcrumb-portal',
    '.gaia-argoui-app-breadcrumb-divider',
    '.gaia-argoui-app-breadcrumb-space',
    '.gaia-argoui-app-breadcrumb-item-caption',
    '.gaia-argoui-app-breadcrumb-context',
    '.gaia-argoui-app-breadcrumb-record',
  ];

  /* index.show */
  kintone.events.on('app.record.index.show', function(event) {
    // field_modified
    for (var id in event.records) {
      for (var key in event.records[id]) {
        if (event.records[id][key]['type'] == 'SINGLE_LINE_TEXT') {
          if (event.records[id][key]['value'].endsWith(modifiedLabel)) {
            var elKeys = kintone.app.getFieldElements(key);
            elKeys[id].style.backgroundColor = backgroundColor;
            elKeys[id].style.color = fontColor;
            elKeys[id].innerHTML = elKeys[id].innerHTML.replace(modifiedLabel, '');
          }
        }
      }
    }

    // change_name_tablebar_content
    $('.gaia-argoui-app-titlebar-content').each(function(index) {
      $(this).text(cybozu.data.page['APP_NAME']);
      $(this).attr('href', null)
    });

    // space var
    $('.gaia-argoui-app-infobar-breadcrumb-iconlist').each(function(index) {
      $(this).hide();
    });

    // ichiran var
    $('.gaia-argoui-app-viewtoggle-reports').children('div').each(function(index) {
      $(this).hide();
    });
    $('.gaia-argoui-app-viewtoggle').each(function(index) {
      $(this).css({'width':'258px'});
    });
  });


  /* index.edit.show */
  kintone.events.on('app.record.index.edit.show', function(event) {
    // change_name_tablebar_content
    $('.gaia-argoui-app-titlebar-content').each(function(index) {
      $(this).text(cybozu.data.page['APP_NAME']);
      $(this).attr('href', null)
    });

    // space var
    $('.gaia-argoui-app-infobar-breadcrumb-iconlist').each(function(index) {
      $(this).hide();
    });

    // ichiran var
    $('.gaia-argoui-app-viewtoggle-reports').children('div').each(function(index) {
      $(this).hide();
    });
    $('.gaia-argoui-app-viewtoggle').each(function(index) {
      $(this).css({'width':'258px'});
    });
  });


  /* detail.show */
  kintone.events.on('app.record.detail.show', function(event) {
    // field_modified
    for (var key in event.record) {
      if (event.record[key]['type'] == 'SINGLE_LINE_TEXT') {
        if (event.record[key]['value'].endsWith(modifiedLabel)) {
          var elKey = kintone.app.record.getFieldElement(key);
          elKey.style.backgroundColor = backgroundColor;
          elKey.style.color = fontColor;
          elKey.textContent = event.record[key]['value'].replace(modifiedLabel, '');
        }
      }
    }

    // hide_unnecessary_buttons
    var record = event.record;
    $('.gaia-app-statusbar-actionlist').children('span').each(function(index) {
      if (index > 1) {
        $(this).show().hide();
      }
    });

    // change_name_tablebar_content
    $('.gaia-argoui-app-titlebar-content').each(function(index) {
      $(this).text(cybozu.data.page['APP_NAME']);
      $(this).attr('href', null)
    });

    // hide_unnecesarry_buttons
    var record = event.record;
    $('.gaia-app-statusbar-actionlist').children('span').each(function(index) {
      if (index > 1) {
        $(this).show().hide();
      }
    });

    // remove_space_bar
    $(hide_contents).each(function(index) {
      $(this).hide();
    });

    // change_breadcrumb_item
    $('.gaia-argoui-app-breadcrumb-item').each(function(index) {
      $(this).text(' ◀︎ 一覧に戻る');
    });
  });

  /* details.process.proceed */
  kintone.events.on('app.record.detail.process.proceed', function(event) {
    // check_before_reject
    if (event.nextStatus.value == '却下' && (event.record['crc_note'].value == null || event.record['crc_note'].value == '')) {
      event.error = 'CRC事務備考に却下理由を入力してください'
      return event
    }
  });

  /* detail.delete.submit */
  kintone.events.on('app.record.detail.delete.submit', function(event) {
    // remove_space_bar
    $(hide_contents).each(function(index) {
      $(this).hide();
    });

    // change_breadcrumb_item
    $('.gaia-argoui-app-breadcrumb-item').each(function(index) {
      $(this).text(' ◀︎ 一覧に戻る');
    });
  });

  /* all */
  $(document).ready( function(){
    // delete toolbar menu
    $('.gaia-header-toolbar-menu').children('ul').children('li').each(function(index) {
      $(this).hide();
    });
  });

})(jQuery);
