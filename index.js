const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Qual è il titolo del progetto?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Descrivi il progetto:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Come si installa il progetto?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Come si usa il progetto?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Come si può contribuire al progetto?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Qual è la licenza del progetto?',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { title, description, installation, usage, contributing, license } = answers;

  const readmeContent = `
# ${title}

## Descrizione
${description}

## Installazione
${installation}

## Uso
${usage}

## Contributi
${contributing}

## Licenza
${license}
  `;

  fs.writeFile('README.md', readmeContent.trim(), (err) => {
    if (err) throw err;
    console.log('README.md generato con successo!');
  });
});