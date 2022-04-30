export function onClick_hideCommentsModal(e, data) {
    
    const {setShowCommentsBox} = data;

    e.preventDefault();

    setShowCommentsBox(false);

}