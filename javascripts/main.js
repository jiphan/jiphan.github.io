console.log('This would be the main JS file.');
$(function () {
    var body = $("#p1").html();
    var template = Handlebars.compile(body);
    var context = {
        text1: "Hello",
        text2: "world!",
        text3: "something"
    };
    Handlebars.registerHelper('loud', function(aString) {
        return aString.toUpperCase();
    });
    var body2 = template(context);
    $("#p1").html(body2);
});