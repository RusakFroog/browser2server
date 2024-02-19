import * as altClient from "alt-client";

class BrowserToServer {
    /**
     * @param {altClient.WebView} view
     * @param {string} [callName=browser.emitServer] name of event need to call from browser
    */
    initView(view, callName = "browser.emitServer") {
        view.on(callName, altClient.emitServer);
    }
}

export default new BrowserToServer();
