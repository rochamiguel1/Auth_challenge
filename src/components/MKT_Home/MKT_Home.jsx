import vector from "../../assets/Vector.png"

export default function MKT_Home() {

    return (
        <section>

            <div className="flex justify-around  text-gray-600 leading-4 font-medium text-xs">
                <h2>Proyecto</h2>
                <h2>Promotor</h2>
                <h2>Lugar</h2>
                <div className="flex">
                    <img src={vector} alt="" />
                    <h2>CO2</h2>
                </div>
                <div className="flex">
                    <img src={vector} alt="" />
                    <h2>Coste</h2>
                </div>
            </div>
        </section>

    )

}