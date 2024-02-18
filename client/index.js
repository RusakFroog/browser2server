import * as altClient from "alt-client";

class BrowserToServer {
    /**
     * @param {altClient.WebView} view
     * @param {string} [callName=browser.emitServer] name of event need to call from browser
    */
    initView(view, callName = "browser.emitServer") {
        view.on(callName, function() {
            const args = [...arguments];
            const eventName = args[0];
            
            args.shift();
            
            altClient.emitServer(eventName, args);
        });
    }
}

export default new BrowserToServer();