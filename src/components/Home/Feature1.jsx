

const Feature1 = () => {
    return (
        <div className=" mt-28 mb-10">
            <h3 className="text-3xl text-center my-10">Course Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">

                <div className="card w-44 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-5 pt-5">
                            <img src="https://i.ibb.co/MD4NY7Q/smart-tv.png" alt="Shoes" className=" object-contain rounded-xl" />
                        </figure>
                        <h2 className="text-2xl text-center">Electronics</h2>

                    </div>
                </div>
                <div className="card w-44 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-5 pt-5">
                            <img src="https://i.ibb.co/0tMyD3C/earphone.png" alt="Shoes" className=" object-contain rounded-xl" />
                        </figure>
                        <h2 className="text-2xl text-center">Electrical</h2>

                    </div>
                </div>
                <div className="card w-44 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-5 pt-5">
                            <img src="https://i.ibb.co/gjkm20p/desktop.png" alt="Shoes" className=" object-contain rounded-xl" />
                        </figure>
                        <h2 className="text-2xl text-center">Development</h2>

                    </div>
                </div>
                <div className="card w-44 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-5 pt-5">
                            <img src="https://i.ibb.co/fvGXSRW/smart-watch.png" alt="Shoes" className=" object-contain rounded-xl" />
                        </figure>
                        <h2 className="text-2xl text-center">Micro-service</h2>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feature1;