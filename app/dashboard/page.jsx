import Button from "../components/Button"
export default function Dashboard() {
    console.log("dashboard")
    const nama = "Restu Anom wardoyo"
    const age = 16
    return <>
        <div className="text-3xl font-bold text-center">
            Restu
        </div>
        <p className="text-md font-bold text-center">
            This is dashboard
        </p>
        <p className="text-md font-bold text-center">
        Nama saya adalah {nama}
        { 
            age < 20 ? <p>Aku masih bochil </p> : <p>Aku sudah dewasa</p>
        }
        </p>
        <Button color="bg-red-500" text="custom textnya"/>
        </>
}