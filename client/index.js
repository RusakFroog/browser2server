import * as altClient from "alt-client";

export default {
    /**
     * @param {altClient.WebView} view
     * @param {string} [callName=browser.onServer] name of event need to call from browser
    */
    initView(view, callName = "browser.onServer") {
        view.on(callName, function() {
            const args = [...arguments];
            const eventName = args[0];
            
            args.shift();
            
            altClient.emitServer(eventName, args);
        });
    }
}