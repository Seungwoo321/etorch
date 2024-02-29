module.exports = (options) => {
    const prompts = [
        {
            name: 'apiKey',
            type: 'input',
            message: `Please enter API key issued by ${options.source}.`,
        }
    ]
    return prompts
}