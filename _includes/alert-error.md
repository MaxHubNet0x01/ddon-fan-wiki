<div class="bg-red-50 text-red-800 p-6 rounded-lg my-5" role="alert">
  <div class="mb-3 flex items-center fill-red-800">
    {% include info-icon.svg %}
    <strong class="font-bold text-sm mr-3">{{ include.heading }}</strong>
  </div>

  <div class="text-sm">{{ include.content }}</div>
</div>