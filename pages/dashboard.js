



const Dashboard = ({ datas }) => {
    return (
        <div>
            <h1>Datas</h1>
            {datas.map((data) => {
                <div key={data.id}>
                    merhaba
                    BU BİR DENEM
                </div>

            })}
        </div>
    )
}



export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    console.log(data)
    return {
        props: { datas: [{ id: 1 }, { id: 2 }] }
    }
}


export default Dashboard
