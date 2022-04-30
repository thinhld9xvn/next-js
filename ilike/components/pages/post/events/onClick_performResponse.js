export function onClick_performResponse(e, data) {

    const {setUserTag, user} = data;

    e.preventDefault();

    setUserTag(user);

    document.querySelector('.cm__textarea')
            .focus();

}