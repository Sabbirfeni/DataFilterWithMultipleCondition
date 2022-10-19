

// Google sheet to html table 
// --------------------------

  {
    {
      // Your API KEY
      const API_KEY = "AIzaSyCa5GgOTng3c0t_CHT_XOASd3JFJN0UGfc";

      function displayResult2(response) {
        let tableHead = "";
        let tableBody = "";

        response.result.values.forEach((row, index) => {
          if (index === 0) {
            tableHead += "<tr>";
            row.forEach((val) => (tableHead += "<th>" + val + "</th>"));
            tableHead += "</tr>";
          } else {
            tableBody += "<tr>";
            row.forEach((val) => (tableBody += "<td>" + val + "</td>"));
            tableBody += "</tr>";
          }
        });

        document.getElementById("table-head").innerHTML = tableHead;
        document.getElementById("table-body").innerHTML = tableBody;
     

        const allTableData = document.querySelectorAll("#emp-table > tbody > tr > td:last-child");

        allTableData.forEach((item, index, arr) => {

        item.setAttribute('class', 'player')
        
          
        })







    // Auto search of player names
    // ----------------------------
    function autocomplete(inp, arr) {
      var currentFocus;
      
      inp.addEventListener("input", function(e) {
          var a, b, i, val = this.value;
          
          let uniquePlayer = [...new Set(arr)]


          closeAllLists();
          if (!val) { return false;};
          currentFocus = -1;
          
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          
          this.parentNode.appendChild(a);
          /*for each item in the array...*/


          for (i = 0; i < uniquePlayer.length; i++) {

              
            if (uniquePlayer[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              /*create a DIV element for each matching element:*/
              b = document.createElement("DIV");
              // b.classList.add('player__name-onWriting');
              /*make the matching letters bold:*/
              b.innerHTML = "<strong>" + uniquePlayer[i].substr(0, val.length) + "</strong>";
              b.innerHTML += uniquePlayer[i].substr(val.length);
              
              b.innerHTML += "<input type='hidden' value='" + uniquePlayer[i] + "'>";
              
              b.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  closeAllLists();
                  filter_rows()
              });
              a.appendChild(b);
            }
          }
      });
      
      inp.addEventListener("keydown", function(e) {
          var x = document.getElementById(this.id + "autocomplete-list");
          if (x) x = x.getElementsByTagName("div");
          if (e.keyCode == 40) {
              
            currentFocus++;
            
            addActive(x);
          } else if (e.keyCode == 38) { 

            currentFocus--;
            
            addActive(x);
          } else if (e.keyCode == 13) {
              
            e.preventDefault();
            if (currentFocus > -1) {
              
              if (x) x[currentFocus].click();
            }
          }
      });
      function addActive(x) {
          
        if (!x) return false;
        
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        
        x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
          
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {

        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
    }


    // var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    var allPlayer = document.querySelectorAll('.player');
    let allPlayerName = [];

    allPlayer.forEach((valueName, index) => {
      let playerName = valueName.innerText;
      allPlayerName.push(playerName);
    })

    autocomplete(document.getElementById("myInput"), allPlayerName);














        
        // allTableData.forEach((singleTableData) => {
        //   singleTableData.setAttribute('id', 'table_data');
        // })


        // const allTableRow = document.querySelectorAll("#emp-table > tbody > tr > td:nth-last-child(odd)");
        // const lastChild = document.querySelectorAll("#emp-table > tbody > tr > td:nth-last-child");
        // allTableRow.forEach((value, index, arr) => {

        //   console.log(lastChild)
          
        // })



        
// Get unique values for the desired columns
// {2 : ["M", "F"], 3 : ["RnD", "Engineering", "Design"], 4 : [], 5 : []}
// ----------------------------------------------------------------------
getUniqueValuesFromColumn();

function getUniqueValuesFromColumn() { 

    var unique_col_values_dict = {};

    allFilters = document.querySelectorAll(".table-filter");
    allFilters.forEach((filter_i) => {
        col_index = filter_i.parentElement.getAttribute("col-index");
     
        // alert(col_index)
        const rows = document.querySelectorAll("#emp-table > tbody > tr");
        
        rows.forEach((row) => {
            cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML;
           
            // if the col index is already present in the dict
            if (col_index in unique_col_values_dict) {

                // if the cell value is already present in the uniquePlayeray
                if (unique_col_values_dict[col_index].includes(cell_value)) {
                    // alert(cell_value + " is already present in the array : " + unique_col_values_dict[col_index])

                } else {
                    unique_col_values_dict[col_index].push(cell_value)
                    // alert("Array after adding the cell value : " + unique_col_values_dict[col_index])

                }


            } else {
                unique_col_values_dict[col_index] = new Array(cell_value)
            }
        });

        
    });

    // for(i in unique_col_values_dict) {
    //     alert("Column index : " + i + " has Unique values : \n" + unique_col_values_dict[i]);
    // }

    updateSelectOptions(unique_col_values_dict)

};




// Add <option> tags to the desired columns based on the unique values
// -------------------------------------------------------------------
  function updateSelectOptions(unique_col_values_dict) {
        allFilters = document.querySelectorAll(".table-filter");

        allFilters.forEach((filter_i) => {
            col_index = filter_i.parentElement.getAttribute('col-index');

            unique_col_values_dict[col_index].forEach((i) => {

              if(i !== '') {
                filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`;
              }

            });

        });
    };

        
    }

      function loadData() {
        // Spreadsheet ID
        const spreadsheetId = "1dvnKX-6-XhU8tnkmlqp8kKS-KZlW_r9hNgPuM9kG8ek";
        const range = "A:Z";
        getPublicValues({ spreadsheetId, range }, displayResult2);
      }

      window.addEventListener("load", (e) => {
        initOAuthClient({ apiKey: API_KEY });
      });

      document.addEventListener("gapi-loaded", (e) => {
        loadData();
      });
    }
  }







// Create filter_rows() function
// filter_value_dict {2 : Value selected, 4:value, 5: value}
// ---------------------------------------------------------
function filter_rows() {
  allFilters = document.querySelectorAll(".table-filter");
  
  var filter_value_dict = {};

  allFilters.forEach((filter_i) => {
      col_index = filter_i.parentElement.getAttribute('col-index');

      value = filter_i.value;
      if (value != "all") {
          filter_value_dict[col_index] = value;
      }
  });

  var col_cell_value_dict = {};

  const rows = document.querySelectorAll("#emp-table tbody tr");
  rows.forEach((row) => {
      var display_row = true;

      allFilters.forEach((filter_i) => {
          col_index = filter_i.parentElement.getAttribute('col-index');
          col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index+ ")").innerHTML;
      })

      for (var col_i in filter_value_dict) {
          filter_value = filter_value_dict[col_i];
          row_cell_value = col_cell_value_dict[col_i];
          
          if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
              display_row = false;
              break;
          }


      }

      if (display_row == true) {
          row.style.display = "table-row";

      } else {
          row.style.display = "none";

      }

  })

}







