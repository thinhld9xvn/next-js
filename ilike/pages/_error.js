export default function Page() {
    return (
        <>
        </>
    );
}
export async function getServerSideProps(ctx) {   
    const { res } =  ctx;
    res.writeHead(301, { location: process.env.SITE_BASE_URL } );
    res.end();
    return {
        props : {
            
        }
    }
}