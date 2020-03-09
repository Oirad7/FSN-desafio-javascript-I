// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

let cadastroDeAlunos = alunosDaEscola;

// implementação

function adicionarAluno(nome){
  
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

    let tamanho =  cadastroDeAlunos.length;
    
    if (cadastroDeAlunos.push({nome:nome,notas:[],cursos:[],faltas:0}) == tamanho + 1){
        console.log("Cadastro Realizado com Sucesso");
    } else{
        console.log("Ocorreu erro ao Cadastrar ");
    };

}

function converteData(data){
    
    dia  = data.getDate().toString()
    diaForm = (dia.length == 1) ? '0'+dia : dia
    mes  = (data.getMonth()+1).toString() //+1 getMonth Janeiro=0
    mesForm = (mes.length == 1) ? '0'+mes : mes
    anoForm = data.getFullYear()
    return diaForm+"/"+mesForm+"/"+anoForm;
}

function listarAlunos(){

 /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
  Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

    alunosDaEscola.forEach(function(value, index) {
        console.log("nome: " + value.nome);
        console.log("notas: " + value.notas);
        for(dados in value.cursos){
            console.log("Cursos: ",value.cursos[dados].nomeDoCurso+" - Matricula: " + converteData(value.cursos[dados].dataMatricula))};
            console.log("faltas: "+ value.faltas);
            console.log("=======================================");
        }
    )
}
function buscaGeral(nomeParaBusca){
    /*faz operação de busca para demais funções */ 
    let encontrou = null;

    cadastroDeAlunos.forEach((alunoBusca,posicao) => {
        if (alunoBusca.nome == nomeParaBusca){
            encontrou = posicao;
        }
    }
    )
    return encontrou;
}



function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */

    let encontrou=buscaGeral(nome);

    if(encontrou!==null){
        console.log("aluno encontrado");
        return cadastroDeAlunos[encontrou];        
    }else{
        console.log("aluno não encontrado!");
        return null;
    }
}    


function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    
    let posicao=buscaGeral(aluno.nome);
    
    if(posicao!==null){
        cadastroDeAlunos[posicao].cursos.push({nomeDoCurso:curso, dataMatricula:new Date});
        console.log("Curso "+ curso +" cadastrado para aluno "+ aluno.nome);
    }else{
        console.log("aluno não encontrado!");
    }
}

function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */

    let posicao = buscaGeral(aluno.nome);
   
    if (posicao!==null && cadastroDeAlunos[posicao].cursos.length>0) {
        cadastroDeAlunos[posicao].faltas += 1;
        console.log("Registrada falta para aluno " + aluno.nome + "!");
    }else{
        console.log("Aluno " + aluno.nome + " não está matriculado em um curso!");        
    }
}


function aplicarNota(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
   let posicao = buscaGeral(aluno.nome);
   
    if (posicao!==null && cadastroDeAlunos[posicao].cursos.length>0) {
       cadastroDeAlunos[posicao].notas.push(10);
       console.log("Registrada nota para aluno " + aluno.nome + "!");
    }else{
       console.log("Aluno " + aluno.nome + " não está matriculado em um curso!");        
    }   
}

function notaMedia(notas){
    /* calcula media das notas */
    notaMedia = notas.reduce((acumulador,valorAtual) => acumulador + valorAtual);
    notaMedia = notaMedia / notas.length;
    return notaMedia;
}
function aprovarAluno(aluno){
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
   let posicao = buscaGeral(aluno.nome);
   
    if (posicao!==null && cadastroDeAlunos[posicao].cursos.length>0) {
        
       if (notaMedia(cadastroDeAlunos[posicao].notas) >= 7 && cadastroDeAlunos[posicao].faltas < 3){
            console.log("Aluno " + aluno.nome + " aprovado!");
       }else{
            console.log("Aluno " + aluno.nome + " não aprovado!");
       }
   }else{
       console.log("Aluno " + aluno.nome + " não está matriculado em um curso!");        
   }   
}



//adicionarAluno("Bruno");
//console.log(cadastroDeAlunos);

//listarAlunos();

//console.log(buscarAluno("Bruno"));

//matricularAluno({nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},"NODE");

//aplicarFalta({nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0});

//aplicarNota({nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0});

aprovarAluno({nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0});
