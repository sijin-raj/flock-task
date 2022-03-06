function Shop() {
  return (
    <section className="relative pt-14 lg:pt-6 lg:pb-20">
    {/* Title Section */}
    <div className="text-center mx-auto space-y-4">
      <h1 className="w-4/5 lg:w-1/4 mx-auto text-2xl  text-gray-500 font-serif">
      An antioxidant-rich oil blended with skin-smoothing retinol? That’s golden.
      </h1>
      <p className="text-black text-2xl animate-bounce " > Shop <span className="text-black text-2xl animate-bounce"> | </span></p>
      </div>

      <div className="w-full mt-14 flex flex-row justify-center ">
          <div className="w-full  bg-pink-200 ">
              <div className="w-3/4 m-24 px-2 items-center justify-center"> 
              <img src="https://cdn.shopify.com/s/files/1/0209/8446/files/A-Gloei_Smoothie_Creative_04_1080px_540x.jpg?v=1645837000" alt="card" />
              </div>
          </div>
         <div className="w-full bg-yellow-200">
          <div className="w-4/5 flex flex-col px-8 py-8 space-y-8">
              <h1 className="w-1/5 text-6xl text-gray-600 font-bold">Glowing Somewhere?</h1>
              <p className="text-4xl font-medium text-gray-700">Hell yeah, you are. For your p.m. routine, mix 1 pump T.L.C. Framboos + 1 pump B-Hydra + 1-2 drops of A-Gloei for smoother, hydrated, thoroughly nourished skin.</p>
              <p className="text-3xl animate-bounce font-medium text-gray-700">Shop Drunk Life | </p>

          </div>
         </div>
      </div>
      <div className="w-full  flex flex-row justify-center ">
          <div className="w-full  bg-green-300 ">
          <div className="w-4/5 flex flex-col px-8 py-8 space-y-6 ">
              <h1 className="w-full text-6xl text-gray-600 font-bold">Color Words…</h1>
              <p className="text-4xl font-medium text-gray-700">What do a marula yellow comb, a neon puffer bag, and a bunch of bright compact mirrors have in common? Head to Drunk Life and check out the bright side of things.</p>
              <p className="text-3xl animate-bounce font-medium text-gray-700">Shop Drunk Life | </p>
          </div>
             
          </div>
         <div className="w-full bg-blue-200">
         <div className="w-3/4 m-24 px-2 items-center animate-pulse justify-center"> 
              <img src="https://cdn.shopify.com/s/files/1/0209/8446/files/A-Gloei_Smoothie_Creative_04_1080px_540x.jpg?v=1645837000" alt="card" />
              </div>
         </div>
      </div>

      </section>
  );
}

export default Shop;
