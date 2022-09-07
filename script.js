const ready = () => {
    document.getElementById("inputSubmit").addEventListener('click', createAppClicked);
    generateAppName();
}

const generateAppName = () => {
    const randomSufix = (Math.random() + 1).toString(36).substring(2);
    const inputAppName = document.getElementById('inputAppName');
    inputAppName.value = `dash-workshop-${randomSufix}`; 
}

const createAppClicked = () => {
    const name = document.getElementById('inputAppName').value;
    const hookUrl = document.getElementById('inputWebhookUrl').value;
    const appUrl = document.getElementById('inputAppUrl').value;

    if(name.length > 0 && hookUrl.length > 0 && appUrl.length > 0) {
        input = document.getElementById("manifest")
        input.value = JSON.stringify({
        "name": name,
        "url": 'https://www.dashcon.io/',
        "hook_attributes": {
            "url": hookUrl,
        },
        "redirect_url": appUrl,
        "public": false,
        "default_permissions": {
            "issues": "write",
        },
        "default_events": [
            "issues",
        ]
        })
        console.log(document.getElementById("manifest").value);
        document.getElementById("form").submit();
    }
}

document.addEventListener('DOMContentLoaded', ready, false);
