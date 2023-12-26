<script>
	/*
  *THIS FUNCTION CALL THE getData() FUNCTION IN THE Code.gs FILE, 
  *AND PASS RETURNED DATA TO showData() FUNCTION
  */
  google.script.run.withSuccessHandler(showData).getData();

  //THIS FUNCTION GENERATE THE DATA TABLE FROM THE DATA ARRAY
  function showData(dataArray){
    $(document).ready(function(){
      $('#data-table').DataTable({
        fixedHeader: true,
        responsive: true,
        data: dataArray,
        //CHANGE THE TABLE HEADINGS BELOW TO MATCH WITH YOUR SELECTED DATA RANGE
        columns: [
          {"title":"Name"},
          {"title":"Photo",
  "render": function(data, type, row, meta){
    if(type === 'display'){
      data = '<span class="imageholder"><img src="' + data + '"></span>';
    }
    return data;
  }
},
          {"title":"Session"},
          {"title":"Mobile Number"},
          {"title":"Email"},
          {"title":"Facebook",
  "render": function(data, type, row, meta){
    if(type === 'display'){
      data = '<a href="' + data + '">' + data + '</a>';
    }
    return data;
  }
}
        ],
        lengthMenu: [
        [50, 100, -1],
        [50, 100, 'All']
    ],
    columnDefs: [
        { targets: [2], visible: true},
        { targets: '_all', visible: true },
        { "defaultContent": "", "targets": "_all" }
    ],
    order: [[2, 'asc']]
      });
    });
  }
</script>
