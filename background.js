var token = "OPEN_AI_TOKEN"

// create context menus
browser.contextMenus.create({
    id: "professional",
    title: "Write professionally: %s",
    contexts: ["selection"],
},
    () => void browser.runtime.lastError,
);

browser.contextMenus.create({
    id: "casual",
    title: "Write casually: %s",
    contexts: ["selection"],
},
    () => void browser.runtime.lastError,
);

// listen to context menu events
browser.contextMenus.onClicked.addListener(async (info, tab) => {
    // if (info.menuItemId === "copy-link-to-clipboard") {
    //     await browser.scripting.insertCSS({
    //         target: {
    //             tabId: tab.id,
    //         },
    //         css: `.progress { cursor: progress; }`
    //     });
    //     await fetch("https://api.openai.com/v1/chat/completions", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer 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"
    //         },
    //         body: JSON.stringify({
    //             model: "gpt-3.5-turbo",
    //             messages: [{ role: "user", content: "what is" + info.selectionText }]
    //         })
    //     }).then((data) => {
    //         return data.json();
    //     }).then((data) => {
    //         let msg = JSON.parse(JSON.stringify(data))
    //         let t2 = JSON.parse(JSON.stringify(msg.choices))
    //         console.log(t2[0].message.content);

    //         navigator.clipboard.writeText(t2[0].message.content).then(() => {
    //             console.log("set correctly")
    //         }, () => {
    //             console.log("failed to set")
    //         })

    //     })
    // } 
    if(info.menuItemId === "professional"){
        try {
            browser.scripting.insertCSS({
              target: {
                tabId: tab.id,
              },
              css: `body { cursor: progress; }`,
            });
          } catch (err) {
            console.error(`failed to insert CSS: ${err}`);
          }
        
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "write this message in a professional way. Only output the text:" + info.selectionText }]
            })
        }).then((data) => {
            return data.json();
        }).then((data) => {
            let msg = JSON.parse(JSON.stringify(data))
            let t2 = JSON.parse(JSON.stringify(msg.choices))
            console.log(t2[0].message.content);

            navigator.clipboard.writeText(t2[0].message.content).then(() => {
                console.log("set correctly")
            }, () => {
                console.log("failed to set")
            })

        })
        try {
            await browser.scripting.insertCSS({
              target: {
                tabId: tab.id,
              },
              css: `body { cursor: grab; }`,
            });
          } catch (err) {
            console.error(`failed to insert CSS: ${err}`);
          }
    }
    else if(info.menuItemId === "casual"){
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "write this message in a casual way. Only output the text:" + info.selectionText }]
            })
        }).then((data) => {
            return data.json();
        }).then((data) => {
            let msg = JSON.parse(JSON.stringify(data))
            let t2 = JSON.parse(JSON.stringify(msg.choices))
            console.log(t2[0].message.content);

            navigator.clipboard.writeText(t2[0].message.content).then(() => {
                console.log("set correctly")
            }, () => {
                console.log("failed to set")
            })

        })
    }
});