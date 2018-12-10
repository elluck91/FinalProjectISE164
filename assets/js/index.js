jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});

$(document).ready(function(){
$("#mytable #checkall").click(function () {
        if ($("#myTable #checkall").is(':checked')) {
            $("#myTable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#myTable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
    
    $("[data-toggle=tooltip]").tooltip();
});

var isMax = true

$("#filter").click(function(){
    if (isMax) {
        $('#myTable').css('max-height', '54vh');
        isMax = false
    }
    else {
        $('#myTable').css('max-height', '68vh');
        isMax = true
    }
    
});

$("#name").click(function(){
    sortTable(1, false);
    
});
$("#desc").click(function(){
    sortTable(2, false);
    
});
$("#location").click(function(){
    sortTable(3, false);
    
});
$("#price").click(function(){
    sortTable(4, true);
    
});

$("#quantity").click(function(){
    sortTable(5, true);
    
});

function sortTable(n, isNumber) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
      console.log(rows.length)
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
          if (isNumber) {
              if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                  shouldSwitch = true;
                    break;
              }
              
          }
          else {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
          }
        
      } else if (dir == "desc") {
        if (isNumber) {
              if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                  shouldSwitch = true;
                    break;
              }
              
          }
          else {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
          }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

jQuery("#myTable tbody tr td:not(':first-child, :nth-child(7), :nth-child(8)')").click(function(){
window.location.href = "./product_detail.html"
});

$("#flaggedItems").click(function(){
    
    window.location.href = "./flagged_items.html"
});


$("#addItem").click(function(){
    
    window.location.href = "./add_items.html"
});

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
    
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}