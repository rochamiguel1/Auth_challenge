import forest from "../../assets/trees.png"



const user = process.env.EMAIL
const pass = process.env.PASSWORD
const api = process.env.API_KEY
export default function Login() {
    const api = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCOZiKCWqYYjx2ZZ02Y9UZmMPbfcbo6h3Q"




    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: { user }, password: { pass }, returnSecureToken: true })
        };
        fetch(api, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result));

    };

    return (
        <div className="flex flex-col justify-center items-center">
            
                <img className=" h-[192px] w-full" src={forest} alt="" />
          
            <div className="flex justify-center items-center">
                <div className="flex  items-center absolute  w-[132px] h-[132px] border-4 rounded-full border-[#0D9488] bg-white"></div>
         </div>
 

            <h1 className="flex items-center justify-center font-extrabold leading-9 text-3xl pt-20 ">Iniciar sesión</h1>
 
            <div className="flex flex-col m-4 p-4 max-h-72 max-w-md border gap-6">
                <div className="flex " >
                    <form onSubmit={handleSubmitLogin} className="flex flex-col px-8 py-8 shadow-gray-700">
                        <label className="flex justify-start " htmlFor="">Email</label>
                        <input className="border rounded-md mb-3" type="text" name="" id="" />
                        <label className="flex justify-start" htmlFor="">Contraseña</label>
                        <input className="border rounded-md" type="text" name="" id="" />
                        <input type="submit" value={"Acceder"} className=" bg-[#0D9488] text-white mt-4 rounded-md" />
                    </form>
                </div>
            </div>
        </div>
    )

}