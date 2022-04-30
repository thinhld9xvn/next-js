export function onClick_showResponseBox(e, data) {

    const {showRespBox, setShowRespBox} = data;

    e.preventDefault();

    setShowRespBox(!showRespBox);

}