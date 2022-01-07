var ReadingLine = {
    active: false,
    hidden: false,
    div: null,
    init: function () {
        var div = document.getElementById("ReadingLine");
        if (div) {
            document.body.removeChild(div);
        }

        this.div = document.createElement("div");
        this.div.id = "ReadingLine";

        this.mouseMove = this.mouseMove.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.checkStatus = this.checkStatus.bind(this);

        this.checkStatus();
        setInterval(this.checkStatus, 5000);
    },
    checkStatus: function(){
        try {
            chrome.runtime.sendMessage({"message": "ReadingLine-status"}, function (status) {
                if (status) {
                    this.enable();
                }
                else {
                    this.disable();
                }
            }.bind(this));
        }
        catch (e) {
            this.disable();
        }
    },
    enable: function () {
        if (this.active) return;

        document.body.appendChild(this.div);
        document.addEventListener("mousedown", this.mouseMove);
        document.addEventListener("mouseup", this.mouseMove);
        document.addEventListener("mousemove", this.mouseMove);
        document.addEventListener("mouseover", this.mouseMove);
        document.addEventListener("mouseout", this.mouseOut);
        this.active = true;
        chrome.runtime.sendMessage({"message": "ReadingLine-enable"});
    },
    disable: function () {
        if (!this.active) return;

        var div = document.getElementById("ReadingLine");
        if (div) {
            document.body.removeChild(div);
        }
        document.removeEventListener("mousedown", this.mouseMove);
        document.removeEventListener("mouseup", this.mouseMove);
        document.removeEventListener("mousemove", this.mouseMove);
        document.removeEventListener("mouseover", this.mouseMove);
        document.removeEventListener("mouseout", this.mouseOut);
        this.active = false;
        if (typeof chrome.app.isInstalled!=='undefined'){
            chrome.runtime.sendMessage({"message": "ReadingLine-disable"});
        }
    },
    mouseMove: function (e) {
        this.div.className = "active";
        this.div.style.top = (e.clientY) + "px";
        this.hidden = false;
    },
    mouseOut: function (e) {
        if (e.toElement == null && e.relatedTarget == null) {
            this.div.className = "hidden";
            this.hidden = true;
        }
    },
};

ReadingLine.init();

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    switch (msg.action) {
        case "ReadingLine-enable":
            ReadingLine.enable();
            break;
        case "ReadingLine-disable":
            ReadingLine.disable();
            break;
        case "ReadingLine-ping":
            chrome.runtime.sendMessage({"message": "ReadingLine-ping"});
            break;
    }
    sendResponse(msg.data, true);
});