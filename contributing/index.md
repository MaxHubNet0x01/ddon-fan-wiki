---
layout: default
title: Contributing
description:
---

<div class="margin-center-90 overflow-x-auto">
  {% include page-heading.md heading="Contribute to the Dragon's Dogma Online Community" %}
  {% include page-p.md content="Your contributions are invaluable! Help us keep the site accurate, informative, and up-to-date." %}

  <section id="coders">
    {% include page-heading.md heading="For Coders: Submit a Pull Request (PR)" %}
    
    {% capture coders_info %}
      If you're comfortable working with code, you can contribute by submitting a Pull Request (PR) on our GitHub
      repository. Follow these steps:
      <br><br>

      <menu class="list-disc">
        <li>Fork the repository from our <a href="https://github.com/MaxHubNet0x01/ddon-fan-wiki" target="_blank" class="font-bold underline">GitHub repository</a>.</li>
        <li>Clone the forked repository to your local machine.</li>
        <li>Make your changes or additions in your branch. Be sure to follow any coding guidelines outlined in the
          repository.</li>
        <li>Commit and push your changes to your forked repository.</li>
        <li>Open a Pull Request by going to the original repository and clicking "New Pull Request." Provide a clear
          description of your changes.</li>
      </menu>
      <br><br>

      We will review your PR and merge it if all looks good!
    {% endcapture %}
    {% include page-p.md content=coders_info %}
  </section>

  <section id="non-coders">
    {% include page-heading.md heading="For Non-Coders: Open an Issue" %}
    
    {% capture non_coders_info %}
      If you don't code but want to suggest improvements, report errors, or request new content, opening an issue is
      easy. Here's how:
      <br><br>

      <menu class="list-disc">
        <li>Go to our <a href="https://github.com/MaxHubNet0x01/ddon-fan-wiki/issues" target="_blank" class="font-bold underline">GitHub Issues page</a>.</li>
        <li>Click on "New Issue."</li>
        <li>Provide a descriptive title for your issue (e.g., "Typo on the Classes page" or "Request for new guide on
          combat strategies").</li>
        <li>In the body of the issue, explain your suggestion or report in detail. You can include links, screenshots,
          or references if applicable.</li>
        <li>Click "Submit New Issue" to send your suggestion for review.</li>
      </menu>
      <br><br>

      We appreciate your input! Issues help us improve the site for everyone.
    {% endcapture %}
    {% include page-p.md content=non_coders_info %}
  </section>

  <section id="community-guidelines">
    {% include page-heading.md heading="Community Guidelines" %}
    
    {% capture comm_guide %}
      To keep our project welcoming and organized, please adhere to the following:
      <br><br>

      <menu class="list-disc">
        <li>Be respectful and constructive in your suggestions or code contributions.</li>
        <li>Check existing issues or PRs to avoid duplicates.</li>
      </menu>
      <br><br>

      Thank you for your interest in contributing! Together, we can create an amazing resource for Dragon's Dogma Online fans.
      <br>
      For additional questions or help, feel free to contact us via the Issues page.
    {% endcapture %}
    {% include page-p.md content=comm_guide %}
  </section>
</div>