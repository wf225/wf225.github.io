  $(function() {
    var li_root, li_sub, ul_sub;
    $("h2, h3, h4, h5, h6").each(function(i, el) {
      var $el, id;
      $el = $(el);
      id = el.id;
      tagName = el.tagName;
      h_index = parseInt(tagName.substr(1));
         
      if (id) {
        var aa = $("<a />").attr("href", "#" + id).html(el.innerText);        
        if(h_index == 2) {
          li_root = $('<li></li>');
          li_root.append(aa);
          $("#header_list").append(li_root);
        }
        else if(h_index == 3) {
          ul_sub = $("<ul><ul>");
          li_sub = $('<li></li>');
          li_sub.html(aa);
          ul_sub.html(li_sub);          
          li_root.append(ul_sub);
        }
        else if(h_index > 3) {
          var ul_sub_3 = $("<ul><ul>");
          var li_sub_3 = $('<li></li>');
          li_sub_3.html(aa);
          ul_sub_3.html(li_sub_3);          
          li_sub.append(ul_sub_3);
        }
      }
    });
  });