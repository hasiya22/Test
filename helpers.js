/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "👩‍🦰 *X-Troid*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🚀 *X-Troid*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🤖 *X-Troid*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
