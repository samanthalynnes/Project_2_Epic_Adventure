$(document).ready(function() {
  $("#user-submit").on("click", () => {
    const currentUser = $("#user-id")
      .val()
      .trim();
  });

  $(".userPage").on("click", event => {
    event.preventDefault();

    console.log(currentUser);

    $.ajax({
      method: "GET",
      url: `/user/${currentUser}`
    }).then(result => {
      console.log(result);

      $.ajax({
        method: "PUT",
        url: "/api/scenes/user",
        data: {
          page: newPage
        }
      });
    });
  });
});

// let currentPage = window.location.href;
// const pageID = parseInt(currentPage.slice(-1)[0]);
