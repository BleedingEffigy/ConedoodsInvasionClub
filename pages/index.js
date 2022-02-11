import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Boring Bananas Company</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Boring Bananas Co." key="ogtitle" />
        <meta property="og:description" content="Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://boringbananas.co/" key="ogurl"/>
        <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://boringbananas.co/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
        <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
        <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
        <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
        <meta name="twitter:image" content="https://boringbananas.co/images/Hola.gif" key="twimage" />
      </Head>


      <div className="min-h-screen py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <img src="/images/Moon.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none" width="1308" />
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="max-w-md mx-auto">
          <img src="/images/doodsbanner.jpg" 
              className="w-full shadow-black/50 shadow-md" 
              alt="Tailwind Play" />
          <div className="divide-y divide-gray-300/50">
            <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
              <h1 className="text-4xl text-pink-500/80 font-extrabold tracking-wider">Destroy All Doods</h1>

              <a href="#" className="underline">OpenSea</a> ∙ <a href="#" className="underline">LooksRare</a>∙ <a href="#" className="underline">Etherscan</a>∙ <a href="#" className="underline">Discord</a>∙ <a href="#" className="underline">Reddit</a>∙ <a href="#" className="underline">Twitter</a>∙ <a href="#" className="underline">Tiktok</a>∙ <a href="#" className="underline">Instagram</a>∙ <a href="#" className="underline">Facebook</a>∙

              <p>
                Cone Doods are aliens made with an appreciation of the style of the Doodles NFT project.
                5555 will be deployed to the Ethereum network.
              </p>

              <p>
                Cone Doods is just one of many projects crowdfunding
                <a href="#" className="underline">Ephemeus DAO</a>,
                whose mission is to teach 1 million people how to be users and builders in Web3
              </p>

              <button className="bg-pink-500 rounded-lg py-2 px-4 font-bold text-xl text-white/80 ring ring-pink-500/5 shadow-pink-500/50 shadow-lg">
              Get whitelisted
              </button>
            </div>
            <div className="pt-8 text-base leading-7 font-semibold bg-pink-500/30 rounded-lg p-2 shadow-md shadow-pink-500/50">
              <p className="text-gray-900">Want to learn more about Web3?</p>
              <p>
                <a href="https://ephemeus.ahernandez.dev/" className="text-pink-500 hover:text-pink-600">Visit our DAO &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>


    </div>  
    )
  }