const domain = 'meet.jit.si';
const options = {
    roomName: 'Y29uc3VsdGF0aW9uMQ==',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet')
};
const api = new JitsiMeetExternalAPI(domain, options);
api.executeCommand('displayName', 'PatientNameGoesHere')
api.addEventListener('participantRoleChanged', function(event) {
    console.log("Participant role changed");
    if (event.role === "moderator") {
        console.log("Password execute");
        api.executeCommand('password', '123qwe');
    }
});
api.on('passwordRequired', function() {
    api.executeCommand('password', '123qwe')
});