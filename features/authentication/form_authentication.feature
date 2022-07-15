Feature: Form-Based Authentication

  In order to learn how to use Serenity/JS with Cucumber and WebdriverIO
  As a Curious Developer
  I'd like to see an example

  Background:
    Given Alice starts with the "Form Authentication" example

  Scenario Outline: Using username and password to log in

    ["The Internet"](https://the-internet.herokuapp.com/) is an example application
    that captures prominent and ugly functionality found on the web.
    Perfect for writing automated acceptance tests against 😎

    Note: With **Serenity/JS** you can use [Markdown](https://en.wikipedia.org/wiki/Markdown)
    to better describe each `Feature` and `Scenario`.

    When she logs in using "<username>" and "<password>"
    Then she should see that authentication has <outcome>

    Examples:
      | username | password             | outcome   |
      | tomsmith | SuperSecretPassword! | succeeded |
      | foobar   | barfoo               | failed    |
