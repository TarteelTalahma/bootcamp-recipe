re = new Randerer();

$.get("/sanity", function (res) {
  console.log(res);
});
const loadRecipess = function () {
  let ingredient = $("#inputText").val();
  $.get(`/recipes/${ingredient}`, function (response) {
    re.render(response);
    console.log(response);
  });
};
clickImg = function (img) {
  let div = $(img).closest(".foodCard");
  let ingredients = div.find(".ingredient");
  let li = ingredients.find("li");
  alert(li[0].innerText);
};
