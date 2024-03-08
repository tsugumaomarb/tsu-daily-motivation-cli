const axios = require('axios');
const chalk = require('chalk');

async function getMotivationalQuote() {
    try {
        const response = await axios.get('https://zenquotes.io/api/random');
        const quote = response.data[0].q;
        const author = response.data[0].a;
        console.log(chalk.green(`"${quote}"\n- ${author}`));
    } catch (error) {
        console.error(chalk.red('Could not fetch the quote, please try again later.'));
    }
}

console.log(chalk.yellow('Your daily dose of motivation:\n'));
getMotivationalQuote();
