function validateForm(form){
    var msg =""
	if(form.getValue("nome") == ""){
        msg+= "Campo nome não foi preenchido.";
    }
    if(form.getValue("cpf") == ""){
        msg+= "Campo CPF não foi preenchido.";
    }
    if(form.getValue("rg") == ""){
        msg+= "Campo RG  não foi preenchido.";
    }
    if(form.getValue("estadoCivil")==""){
        msg+= "Campo estado civil não foi preenchido.";
    }
    if(form.getValue("dtNasc") == ""){
        msg+= "Campo Data de nascimento não foi preenchido.";
    }
    if(form.getValue("dtNasc") == ""){
        msg+= "Campo Data de nascimento não foi preenchido.";
    }
    if(form.getValue("escolaridade") =="0"){
        msg+= "Campo escolaridade não escolhido"
    }
    /* Ponto comercialEndereco*/
    if(form.getValue("cep") == ""){
        msg+= "Campo CEP não foi preenchido.";
    }
    if(form.getValue("logradouro") == ""){
        msg+= "Campo Logradouro não foi preenchido.";
    }
    if(form.getValue("numero") == ""){
        msg+= "Campo Numero não foi preenchido.";
    }
    if(form.getValue("bairro") == ""){
        msg+= "Campo Bairro não foi preenchido.";
    }
    if(form.getValue("cidade") == ""){
        msg+= "Campo Cidade não foi preenchido.";
    }
    if(form.getValue("estado") == ""){
        msg+= "Campo Estado não foi preenchido.";
    }
    if(msg !=""){
        throw msg
    }
}