// Crie um perfil profissional que
// Interpole uma frase e um objeto com
// as características de um profissional a sua escolha

// criar objeto javascript 'profissional'

// criar variável com interpolação (template)

// imprimir perfilProfissional

const profissional = {
  nome: 'Marcú',
    modelo: 'Técnico de Ti',
    HardSkill : 'Manutenção, Suporte, Computadores, Segurança da Informação',
    SoftSkill : 'Resolução de Problemas, Organização e Foco, Trabalho em Equipe',
    Formação : 'Nivel superior',
}
const PerfilProfissional = `Olá, ${profissional.nome} ${profissional.modelo} ${profissional.HardSkill} ${profissional.SoftSkill} ${profissional.Formação}`
console.log(PerfilProfissional)