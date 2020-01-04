$(document).ready(function() {
  $("#form-submit").on("click", () => {
    const currentUser = $("#user-id")
      .val()
      .trim();
  });

  $("").on("click", () => {
    $.ajax({
      method: "GET",
      url: `/user/${currentUser}`
    }).then(result => {
      $.ajax({
        method: "PUT",
        url: "/api/scenes/user",
        data: {
          page: result
        }
      });
    });
  });
});

// let currentPage = window.location.href;
// const pageID = parseInt(currentPage.slice(-1)[0]);
