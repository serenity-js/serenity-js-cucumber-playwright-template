/**
 * This is a Cucumber.js profile
 * @see https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md
 *
 * @type {{default: string}}
 */
module.exports = {
    default: [
        `--require-module 'ts-node/register'`,              // use TypeScript in-memory transpiler, ts-node
        `--format "@serenity-js/cucumber"`,                 // use Serenity/JS Cucumber adapter - https://serenity-js.org/modules/cucumber/
        `--format-options '{"specDirectory": "features"}'`, // configure the adapter
        `--require "./features/**/*.steps.ts"`,             // load step definition libraries
        `--require './features/**/*.config.ts'`              // load configuration files, such as features/support/
    ].join(' ')
};
