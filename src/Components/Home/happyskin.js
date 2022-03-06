function HappySkin() {
  return (
    <section className="relative pt-14 lg:pt-6 lg:pb-20 bg-blue-100 space-y-10">
      {/* Title Section */}
      <div className="text-center mx-auto space-y-4">
        <h1 className="w-4/5 pt-14 mx-auto text-6xl  text-gray-500 font-serif ">
          happy skin = healthy skin
        </h1>
      </div>

      <div className="flex flex-col text-center pt-24 ">
        <div className="flex flex-col  text-left justify-center items-center space-y-6">
          <h1 className="text-3xl font-serif text-gray-500">our philosophy</h1>
          <p className="w-2/5">
            We are committed to using only ingredients that either directly
            benefit the health of the skin or support the integrity of our
            formulations. We never take into account whether something is
            synthetic or natural, instead choosing ingredients based on
            biocompatibility.<span className="text-pink-600">Learn more.</span> 
          </p>
        </div>

        <div className="flex flex-col mt-20 ml-28 text-left justify-left items-left space-y-6">
          <h1 className="text-3xl font-serif text-gray-500">the culprits</h1>
          <p className="w-2/5">
          We believe six ubiquitous ingredients are at the root of almost every skin issue we see, and when they're entirely removed from one’s routine (when you take a #drunkbreak), skin can reset and return to a healthy, balanced state. That’s our ingredient-elimination philosophy for a total skin reset.
          </p>
        </div>

        <div className="flex flex-col mt-20 ml-8 text-center justify-center items-center space-y-6">
          <h1 className="text-3xl font-serif text-gray-500">skincare regimen smoothies</h1>
          <p className="w-2/5">
          We think of our skincare routines as smoothies. Just hear us out: They’re good for you, they’re easy to mix, and you can change up the recipe whenever you want. Plus, all of our products are biocompatible and bioavailable, which means they’re highly absorbable.<span className="text-pink-600">Mix it up. </span> 
          </p>
        </div>


        <div className="text-center pt-10 mx-auto space-y-6">
        <h1 className="w-full mx-auto text-5xl font-bold text-gray-500 font-serif ">
        fall #drunkinlove
        </h1>
        <div className="w-3/5 m-24 px-2 items-center justify-center"> 
              <img src="https://cdn.shopify.com/s/files/1/0209/8446/files/LIPS_360x.png?v=1601059598" alt="card" />
              </div>
      </div>

      </div>
    </section>
  );
}

export default HappySkin;
