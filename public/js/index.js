$(document).ready(function() {
  $("").on("click", event => {
    event.preventDefault();

    let currentPage = window.location.href;
    const pageID = parseInt(currentPage.slice(-1)[0]);

    $.ajax({
      method: "PUT",
      url: "/api/scenes/user",
      data: {
        id: pageID
      }
    }).then();
  });
});
