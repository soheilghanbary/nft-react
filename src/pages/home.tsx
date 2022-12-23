import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>this is my home page</h1>
            <button onClick={() => navigate('/users')}>Go to Users</button>
        </div>
    )
}