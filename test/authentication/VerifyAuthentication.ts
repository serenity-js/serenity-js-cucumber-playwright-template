import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { By, isVisible, PageElement, Text } from '@serenity-js/web';

/**
 * VerifyAuthentication aggregates several tasks to make them easier to find:
 * - VerifyAuthentication.succeeded()
 * - VerifyAuthentication.failed()
 *
 * Note how both those tasks reuse VerifyAuthentication.hasFlashAlert()
 * to avoid code duplication.
 */
export class VerifyAuthentication {
    private static hasFlashAlert = () =>
        Task.where(`#actor verifies that flash alert is present`,
            Ensure.that(FlashMessages.flashAlert(), isVisible()),
        )

    static succeeded = () =>
        Task.where(`#actor verifies that authentication has succeeded`,
            VerifyAuthentication.hasFlashAlert(),
            Ensure.that(Text.of(FlashMessages.flashAlert()), includes('You logged into a secure area!')),
        )

    static failed = () =>
        Task.where(`#actor verifies that authentication has failed`,
            VerifyAuthentication.hasFlashAlert(),
            Ensure.that(Text.of(FlashMessages.flashAlert()), includes('Your username is invalid!')),
        )
}

/**
 * A tiny Lean Page Object, representing the flash messages
 * that show up when the user logs submits the authentication form.
 */
const FlashMessages = {
    flashAlert: () =>
        PageElement.located(By.id('flash')).describedAs('flash message'),
}
