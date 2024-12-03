import FeatureSection from "@/_components/FeatureSection";
import SearchSection from "@/_components/SearchSection";

function Home() {
  return (
    <div className="mx-20 bg-mygreen">
      {/* Navbar */}
      <nav className=" border-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo und App-Name */}
            <div className="flex items-center">
              <div>
                <img
                  src="https://res.cloudinary.com/duzrxqgy4/image/upload/v1733152992/Logo_fg52wf.png"
                  alt="Logo"
                  className="h-20"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6 text-gray-100 text-xl font-medium">
              <a
                href="#"
                className="hover:text-green-500"
              >
                Über uns
              </a>
              <a
                href="#"
                className="hover:text-green-500"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:text-green-500"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="mx-auto w-[60%] bg-lime-200 rounded-lg">
          <SearchSection />

          {/* Search field */}
          <div className="py-6 text-center border-2 border-black">
            <input
              type="text"
              placeholder="Beschwerde eingeben (z. B. Bauchweh)"
              className="w-3/4 max-w-md p-3 rounded-md text-gray-800"
            />
            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold ml-2">
              Suchen
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Blog Teaser Section */}
      <section className="py-12 border-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teaser 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-blue-500 h-48 rounded-tl-lg rounded-tr-lg">
              <img
                src="https://via.placeholder.com/400x225/blue"
                alt="Teaser Bild 1"
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                KAMILLENBLÜTEN
              </p>
              <h3 className="text-xl font-bold mt-2">
                Der Klassiker unter den Heilpflanzen
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Kamille ist eine der bekanntesten Heilpflanzen. Sie wird für
                ihre beruhigende Wirkung bei Magen-Darm-Beschwerden und als Tee
                genutzt.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Von Max Mustermann</p>
              <img
                src="https://via.placeholder.com/30"
                alt="Max Mustermann"
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>

          {/* Teaser 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-red-500 h-48 rounded-tl-lg rounded-tr-lg">
              <img
                src="https://via.placeholder.com/400x225/red"
                alt="Teaser Bild 2"
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                BÄLDERWURZEL
              </p>
              <h3 className="text-xl font-bold mt-2">
                Beruhigung für den Körper und Geist
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Baldrianwurzel ist bekannt für ihre entspannende Wirkung. Sie
                wird bei Schlafproblemen und innerer Unruhe eingesetzt.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Von Julia Meier</p>
              <img
                src="https://via.placeholder.com/30"
                alt="Julia Meier"
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>

          {/* Teaser 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="bg-green-500 h-48 rounded-tl-lg rounded-tr-lg">
              <img
                src="https://via.placeholder.com/400x225/green"
                alt="Teaser Bild 3"
                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                LAVENDEL
              </p>
              <h3 className="text-xl font-bold mt-2">
                Entspannung für Körper und Seele
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Lavendel ist ein hervorragendes Mittel zur Beruhigung und wird
                oft für Bäder oder Tees verwendet, um Stress abzubauen.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Von Anna Schmidt</p>
              <img
                src="https://via.placeholder.com/30"
                alt="Anna Schmidt"
                className="rounded-full h-8 w-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-6 text-center border-black border-2">
        <p className="text-sm">&#169; 2024 Herbal Compass</p>
        <nav className="mt-4">
          <a
            href="#"
            className="text-white underline mx-2"
          >
            Über uns
          </a>
          <a
            href="#"
            className="text-white underline mx-2"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white underline mx-2"
          >
            Datenschutz
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
