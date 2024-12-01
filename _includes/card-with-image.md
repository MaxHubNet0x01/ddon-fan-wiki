<section class="bg-white shadow-md rounded-lg p-6 mb-6">
  <h2 class="text-2xl font-semibold mb-4">{{ include.heading }}</h2>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex items-center justify-center">
      {% capture img_w %}{{ include.w | default: '50%'}}{% endcapture %}
      {%- include image.md src=include.src w=img_w h="auto" class="border-none shadow-none" -%}
    </div>
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <p class="mb-4 px-12">{{ include.content }}</p>
    </div>
  </div>
</section>