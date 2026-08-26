/* ==========================================================================
   Destiny Tours — enquiry.js
   Holiday enquiry form: validation + WhatsApp message generator
   ========================================================================== */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "918856962959"; // +91 8856962959, international format, no +

  var form = document.querySelector("#enquiry-form");
  if (!form) return;

  var requiredFields = form.querySelectorAll("[data-required]");

  function setError(field, hasError) {
    var wrapper = field.closest(".field");
    if (!wrapper) return;
    if (hasError) {
      wrapper.classList.add("error");
    } else {
      wrapper.classList.remove("error");
    }
  }

  function validate() {
    var valid = true;
    requiredFields.forEach(function (field) {
      var value = (field.value || "").trim();
      if (!value) {
        setError(field, true);
        valid = false;
      } else {
        setError(field, false);
      }
    });

    var phoneField = form.querySelector("#enq-phone");
    if (phoneField) {
      var digits = phoneField.value.replace(/\D/g, "");
      if (digits.length < 10) {
        setError(phoneField, true);
        valid = false;
      }
    }
    return valid;
  }

  requiredFields.forEach(function (field) {
    field.addEventListener("input", function () {
      setError(field, false);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstError = form.querySelector(".field.error input, .field.error select, .field.error textarea");
      if (firstError) firstError.focus();
      return;
    }

    var name = form.querySelector("#enq-name").value.trim();
    var phone = form.querySelector("#enq-phone").value.trim();
    var destination = form.querySelector("#enq-destination").value;
    var month = form.querySelector("#enq-month").value;
    var adults = form.querySelector("#enq-adults").value || "0";
    var children = form.querySelector("#enq-children").value || "0";
    var budget = form.querySelector("#enq-budget").value;
    var message = form.querySelector("#enq-message").value.trim();

    var lines = [
      "*New Holiday Enquiry — Destiny Tours*",
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Destination: " + (destination || "Not specified"),
      "Travel Month: " + (month || "Flexible"),
      "Adults: " + adults + " | Children: " + children,
      "Budget: " + (budget || "Not specified"),
    ];
    if (message) {
      lines.push("Message: " + message);
    }

    var text = encodeURIComponent(lines.join("\n"));
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
    window.open(url, "_blank", "noopener");
    form.reset();
  });
})();
