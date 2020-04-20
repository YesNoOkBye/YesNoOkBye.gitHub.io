//Check of Specific Todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on X to remove todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//add new todos from the input
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing a new todo from input
        const todoText = $(this).val();
        $(this).val("");
        //create a new todo and add to li
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle()
});


