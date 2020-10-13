function enableFields(form){ 
    if ( form.getFormMode() != 'ADD' ){  
        form.setEnabled("nome",false);
        form.setEnabled("cpf",false);
        form.setEnabled("rg",false);
        form.setEnabled("estadoCivil",false);
        form.setEnabled("dtNasc",false);
        form.setEnabled("escolaridade",false);
        form.setEnabled("cep",false);
        form.setEnabled("logradouro",false);
        form.setEnabled("numero",false);
        form.setEnabled("bairro",false);
        form.setEnabled("cidade",false);
        form.setEnabled("estado",false);
    }
}