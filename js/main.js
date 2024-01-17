$(document).ready(function () {
  $("#appealsForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let offerType = $("#offerType").val();
    let file = $("#file").val();
    let content = $("#content").val();

    let inputData = {
      name: name,
      email: email,
      phone: phone,
      offerType: offerType,
      file: file,
      content: content,
    };

    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    $.post(baseUrl, { data: inputData }, function (response) {
      console.log("Server response:", response);
    });
  });
});
