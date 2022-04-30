export function onClick_removeUserTag(e, data) {

    const {setUserTag} = data;

    e.preventDefault();

    setUserTag(null);

}