/*global $, dotclear, getData */
'use strict';

// Get context
Object.assign(dotclear, getData('admin.blog_pref'));

$(function () {
  $('#link-insert-cancel').on('click', function () {
    window.close();
  });

  $('#form-entries tr>td.maximal>a').on('click', function () {
    function stripBaseURL(url) {
      if (dotclear.base_url != '') {
        var pos = url.indexOf(dotclear.base_url);
        if (pos == 0) {
          url = url.substr(dotclear.base_url.length);
        }
      }

      return url;
    }

    // Get entry URL
    const main = window.opener;
    const title = stripBaseURL($(this).attr('title'));

    // Remove base scheme from beginning
    const next = title.indexOf('/');
    const href = next !== -1 ? title.substring(next + 1) : title;

    // Set new URL
    main.$('#static_home_url').prop('value', href);

    window.close();
  });
});
