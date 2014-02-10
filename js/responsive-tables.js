// Responsive tables
// ---------------------------------

(function($) {
  // determine if table-responsive is present
  if($('.table-responsive.js').length) {
    $('.table-responsive.js').each(function(i, table) {
      init($(table));
    });
  }
  
  function init(table) {
    //table.addClass('js'); // activates CSS for the table
    var $childTable = table.find('.table'),
        breakpoint = ($childTable.width() == undefined) ? $(window).width() : $childTable.width(),
        switched = false,
        updateTable = function() {
          if ((table.width() <= breakpoint) && !switched ) {
            switched = true;
            $childTable.each(function(i, element) {
              splitTable($(element));
            });
            return true;
          } else if (switched && (table.width() > breakpoint)) {
            switched = false;
            $childTable.each(function(i, element) {
              unsplitTable($(element));
            });
          }
        },
        splitTable = function(org) {
          var cp = org.clone();
          org.wrap('<div class="table-wrapper" />');
          cp.find('td:not(:first-child), th:not(:first-child)').css('display', 'none');
          org.closest('.table-wrapper').append(cp);
          cp.wrap('<div class="pinned" />');
          org.wrap('<div class="scrollable" />');
        },
        unsplitTable = function(org) {
          org.closest('.table-wrapper').find('.pinned').remove();
          org.unwrap();
          org.unwrap();
        };
    updateTable();
    $(window).bind('resize', updateTable);
  }
})(jQuery);