//Botão "Sobre Mapeamento"

// document.getElementById("#explain").style.display = "none";
// document.getElementById("#vertentes").style.display = "none";
// document.getElementById("#form").style.display = "none";
// document.getElementById("#representante").style.display = "none";
// document.getElementById("#emaps").style.display = "none";


$(document).ready(function(){
    $("#bt-1").click(function(){
        $("#explain").toggle("slow");
        $("#vertentes").hide("slow");
        $("#form").hide("slow");
        $("#representante").hide("slow");
        $("#maps").hide("slow");

    });
});

//Botão "Formulário Mapeamento"
$(document).ready(function(){
    $("#bt-3").click(function(){
        $("#vertentes").hide("slow");
        $("#form").toggle("slow");
        $("#explain").hide("slow");
        $("#maps").hide("slow");
        });
});

//Botão "Vertentes do Mapeamento"

$(document).ready(function(){
    $("#bt-2").click(function(){
        $("#vertentes").toggle("slow");
        $("#explain").hide("slow");
        $("#form").hide("slow");
        $("#representante").hide("slow");
        $("#maps").hide("slow");
    });
});

//Botão "Mapa dos Pontos"
$(document).ready(function(){
    $("#bt-4").click(function(){
        $("#maps").toggle("slow");
        $("#explain").hide("slow");
        $("#vertentes").hide("slow");
        $("#form").hide("slow");
        $("#representante").hide("slow");
        });
});


//botões "Trasição de Cards"
$(document).ready(function(){
    $("#salvarDados").click(function(){
        $("#representante").toggle("slow");
        $("#form").slideToggle("slow");
    })
})

// Aqui adiciona as ações para os botões
$(document).ready(function(){
    $("#salvarDados1").click(function(){
        $("#Questão2").toggle("slow");
        
        })
})

$(document).ready(function(){
    $("#salvarDados2").click(function(){
        $("#Questão3").toggle("slow");
        })
})

$(document).ready(function(){
    $("#salvarDados3").click(function(){
        $("#Questão4").toggle("slow");
        })
})


$(document).ready(function(){
    $('select').formSelect();
  });
        