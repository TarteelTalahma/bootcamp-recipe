const Randerer = class {
  render = function (recipess) {
    $(`#continar`).empty();

    const source = $(`#template`).html();
    const template = Handlebars.compile(source);

    const newHTML = template({ recipess });
    $(`#continar`).append(newHTML);
  };
};
