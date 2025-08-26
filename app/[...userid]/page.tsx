import Navbar from "../general_comp/navbar"

interface UserPageProps {
    params: Promise<{ userid: string[] }>
}

const User = async ({ params }: UserPageProps) => {
    const Params = await params
    
    return (
        <>
            <Navbar />
            <h1>WELCOME {Params.userid.join('/')}</h1>
        </>
    )
}

export default User
