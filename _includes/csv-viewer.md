<div id="{{ include.id }}_data">
</div>
<script>
  $(function(){
    insertCSVToHtml("{{ include.filename }}", {{ include.mainColIndex }}, "#{{ include.id }}_data", DF_Wiki.csvHtmlStart, DF_Wiki.csvHtmlItem, DF_Wiki.csvHtmlEnd);
  });
</script>