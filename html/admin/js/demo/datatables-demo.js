// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.7/i18n/ko.json"
    },
    searching: false
  });
});
