# browser2server
Simple module for altV mp to straight emit event from browser to server

# Installation

```bash
npm i altv-browser2server
```

# Usage 

### File directories

```
resource:

└ client
  └ html
    ├ index.html
    └ app.js
  └ index.js
└ server
  └ index.js
└ resource.toml
```

#### `client/index.js`

```js
import * as altClient from "alt-client";
import b2s from "altv-browser2server";

const view = new alt.WebView("http://resource/client/html/index.html");

// second param is the name of event that needs to be called on browser to send server event
// this param optional and by default is - browser.emitServer
b2s.initView(view, "browser.emitServer");
```

#### `server/index.js`

```js
import * as altServer from "alt-server";

altServer.onClient("server.module.testLog", (player, args) => {
    altServer.log("Data from webview: " + args);
});
```

#### `client/html/app.js` (file linked to `index.html`)
```js

function someHandler() {
    // some code...

    const data = {
        id: 1,
        name: "Rusak"
    };

    // first argument this is the name of the event that was selected in function as the second argument (by default: "browser.emitServer")
    // b2s.initView(view, "otherNameEvent");
    // second argument name of the event name on server-side
    // other args are unlimited for sending data to server-side
    alt.emit("browser.emitServer", "server.module.testLog", data, "other args")
}
```

### Result
![Result](https://i.imgur.com/e9mVZxO.jpg)
