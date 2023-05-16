import React from "react";

const Tagline = () => {
    return (
       <section className="m-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="text-[28px] md:text-[45px] font-[600] ">
            <h1 className=" ">The essential elements of </h1>
            <h1 className=" text-[#E27066]"> life mystery </h1>
            </div>
            <div className="grid  justify-items-end">
                <p className="text-[12px] md:text-[13px] font-poppins leading-[16px] max-w-[445px]">We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling and successful life.</p>
            </div>

        </div>
       </section>

    )
}

export default Tagline