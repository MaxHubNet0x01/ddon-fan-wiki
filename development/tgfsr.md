---
layout: default
title: TGFSR
id: tgfsr
description: 
main_color: slate-500
main_dark_dolor: slate-200
---

<div class="margin-center-90">
  {% include page-heading.md heading="TGF Subs" %}  

  <form id="submissionForm" class="dark:bg-zinc-800">
    <input type="text" id="name" name="name" placeholder="Your Name" required>
    <input type="email" id="email" name="email" placeholder="Your Email" required>
    <textarea id="message" name="message" placeholder="Your Message"></textarea>
    <button type="submit">Submit</button>
  </form>
</div>

<script>
  $(function(){
    $("#submissionForm").submit(async function (event) {
        event.preventDefault();
        return;

        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-"); // Make filename safe

        const newEntry = {
            name,
            email,
            message,
            date: new Date().toISOString()
        };

        const githubRepo = "MaxHubNet0x01/ddon-fan-wiki-submissions"; // Replace with your repo
        const githubToken = "REDACTED"; // Store securely, DO NOT expose in frontend!
        const filePath = `submissions/${timestamp}.json`;

        await $.ajax({
            url: `https://api.github.com/repos/${githubRepo}/contents/${filePath}`,
            type: "PUT",
            headers: {
                "Authorization": `token ${githubToken}`,
                "Accept": "application/vnd.github.v3+json"
            },
            data: JSON.stringify({
                message: "New form submission",
                content: btoa(JSON.stringify(newEntry, null, 2))
            }),
            success: function () {
                alert("Form submitted successfully!");
            },
            error: function (xhr) {
                alert("Error submitting form: " + xhr.responseText);
            }
        });
    });
  });
</script>