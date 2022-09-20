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

    const alert = document.getElementById('alert');

    // if fields are empty -> show the alert banner
    if(name.length === 0 || hookUrl.length === 0 || appUrl.length === 0) {
        alert.classList.remove('hidden');
        return;
    }

    // if urls are not starting with https:// -> show the alert banner
    if(!hookUrl.startsWith('https://') || !appUrl.startsWith('https://')) {
        alert.classList.remove('hidden');
        return;
    }

    // if urls are likely to be in the wrong order
    if(!hookUrl.includes('webhook') || !appUrl.includes('new')) {
        alert.classList.remove('hidden');
        return;
    }

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
    });
    document.getElementById("form").submit();
}

document.addEventListener('DOMContentLoaded', ready, false);
