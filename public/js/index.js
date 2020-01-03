$("#go-to-scenes").on("click", event => {
  event.preventDefault();

  $.ajax({
    method: "GET",
    url: "/"
  }).then();
});
