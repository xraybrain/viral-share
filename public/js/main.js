$(document).ready(function () {
  $("#client-form").submit(function (event) {
    event.preventDefault();
    var data = {};
    $.each($(this).serializeArray(), function (_, d) {
      data[d.name] = d.value;
    });
    $.post({
      url: "/api/v1/generate/token",
      data: data,
      success: function (response) {
        console.log(response);
        if (response.success) {
          showSuccessAlert(response.result);
        } else {
          showErrorAlert(response.message);
        }
      },
    });

    $(document).on("click", ".app-copy", function (event) {
      event.preventDefault();
      const element = $(event.currentTarget);
      const data = element.attr("data-copy");
      window.navigator.clipboard.writeText(data);
      showToast("Copied!!!");
    });
  });
});

const alertSchema = `
  <div class="py-2">
    <div class="alert {type} my-5" id="app-alert">
      <a class="close btn-circle" data-dismiss="alert">&times;</a>
      <div>
        <h5 class="alert-title">{title}</h5>
        <p class="alert-body">{message}</p>
        {html}
      </div>
    </div>
  </div>
`;

function showSuccessAlert(message) {
  const alert = alertSchema
    .replace("{type}", "alert-success")
    .replace("{title}", "Token:")
    .replace(
      "{html}",
      `
      <div class="text-right">
        <button class="btn app-copy shadow-none" data-copy="{message}">Copy</button>
      </div>
    `
    )
    .replace(/\{message\}/gi, message);
  $(".app-section").append(alert);
}

function showErrorAlert(message) {
  const alert = alertSchema
    .replace("{type}", "alert-danger")
    .replace("{title}", "")
    .replace("{message}", message)
    .replace("{html}", "");
  $(".app-section").append(alert);
}

function showToast(message, timeout) {
  timeout = timeout || 2000;
  const id = `toaster-${Date.now()}`;
  const toast = `
    <div class="toaster-panel" id="${id}">
      <div class="toaster-body">
        ${message}
      </div>
    </div>
  `;
  $("body").append(toast);
  setTimeout(function () {
    $(`#${id}`).remove();
  }, timeout);
}
