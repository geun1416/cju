// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/ko.json"
    },
    searching: false,
    dom: 'rt<"d-flex justify-content-between align-items-center table-footer"'
       + '<"col-2"l>'
       + '<"col-8 text-center"<"d-inline-block"p>>'
       + '<"col-2 text-end"i>>'
  });
});