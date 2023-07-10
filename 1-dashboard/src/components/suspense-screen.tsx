import Loader from "./loader-component"


function SuspenceScreen() {
    return (
        <div style={{
            height: "100vh", width: "100vw", background: "#f5f5f9", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Loader />
        </div>
    )
}

export default SuspenceScreen