---
layout: default
title: Add Content
id: add-content
description:
main_color: amber-600
---

<div class="margin-center-90">
  {% include page-heading.md heading="Do Not Use! ᴮᴱᵀᴬ" %}
  {% include alert-info.md heading="Note" content="Dark Mode not supported by Editor as yet" %}
</div>

<div id="editorjs" class="margin-center-90 bg-white rounded-lg"></div>

{% include page-script.md src="/assets/js/editorjs/main.js" %}
{% include page-script.md src="/assets/js/editorjs/header.js" %}
{% include page-script.md src="/assets/js/editorjs/quote.js" %}
{% include page-script.md src="/assets/js/editorjs/checklist.js" %}
{% include page-script.md src="/assets/js/editorjs/embed.js" %}
{% include page-script.md src="/assets/js/editorjs/image.js" %}
{% include page-script.md src="/assets/js/editorjs/marker.js" %}
{% include page-script.md src="/assets/js/editorjs/table.js" %}
{% include page-script.md src="/assets/js/editorjs/tooltip.js" %}
{% include page-script.md src="/assets/js/editorjs/warning.js" %}
{% include page-script.md src="/assets/js/editorjs/nestedList.js" %}

<script type="module">
  $(function(){
    new EditorJS({
      tools: {
        header: {
          class: Header,
          inlineToolbar : true
        },
        quote: {
          class: Quote
        },
        image: SimpleImage,
        list: {
          class: EditorjsList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
        },
        table: Table,
        warning: Warning,
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        tooltip: {
          class: Tooltip,
          config: {
            location: 'left',
            underline: true,
            placeholder: 'Enter a tooltip',
            highlightColor: '#FFEFD5',
            backgroundColor: '#154360',
            textColor: '#FDFEFE',
            holder: 'editorId',
          }
        }
      }
    });
  });
</script>