const { homedir } = require("os")
const { resolve } = require('path')
const fs = require('fs-extra')

module.exports = class GeneratorAPI {
    constructor () {
        this._config = {}
        this._configPath = resolve(homedir(), '.local.eidc.json')
    }
    
    getConfigPath () {
        return this._configPath
    }

    async getData (key) {
        if (fs.existsSync(this._configPath)) {
            const data = await fs.readJson(this._configPath)
            if (!data[key]) throw new Error('Please save your API key first.')
            return data[key]
        } else {
            throw new Error('Please save your API key first.')
        }
    }

    async saveData (data) {
        try {
            const savedData = await fs.readJson(this._configPath)
            await fs.writeJsonSync(this._configPath, {
                ...savedData,
                ...data
            })
            console.log(`You have saved successfully. See ${this._configPath}`)
        } catch (error) {
            throw error
        }
    }

    async resetConfig () {
        this._config = {}
        try {
            await fs.writeJsonSync(this._configPath, this._config)
            console.log(`Initialization was successful. See ${this._configPath}`)
        } catch (error) {
            throw error
        }
    }
}