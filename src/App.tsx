import { Music, Zap, Heart, Skull } from 'lucide-react';
import imagen from "../assets/imagen.jpg";
function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background chaos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl w-full">
            <div className="relative">
              {/* Glitch effect text */}
              <h1 className="text-8xl md:text-9xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-pulse">
                Alondra Carrillo Celis
              </h1>
              <div className="absolute top-0 left-0 text-8xl md:text-9xl font-black text-pink-500 opacity-20 transform -translate-x-1 -translate-y-1">
                Alondra Carrillo Celis
              </div>
              <div className="absolute top-0 left-0 text-8xl md:text-9xl font-black text-cyan-500 opacity-20 transform translate-x-1 translate-y-1">
                Alondra Carrillo Celis
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="w-2 h-2 bg-pink-500 rotate-45"></div>
              <div className="w-2 h-2 bg-cyan-500 rotate-45"></div>
              <div className="w-2 h-2 bg-yellow-400 rotate-45"></div>
            </div>

            <p className="text-2xl md:text-3xl text-white font-bold mb-4 uppercase tracking-wider">
              28/04/2002
            </p>

            <div className="flex gap-6 mt-8">
              <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-4 transform rotate-3 hover:rotate-6 transition-transform cursor-pointer">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-4 transform -rotate-3 hover:-rotate-6 transition-transform cursor-pointer">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 transform rotate-2 hover:rotate-6 transition-transform cursor-pointer">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="border-4 border-pink-500 p-8 transform -rotate-1 hover:rotate-0 transition-transform bg-black">
                  <h2 className="text-5xl font-black text-cyan-400 mb-6 uppercase">Mi Historia</h2>
                  <p className="text-white text-lg leading-relaxed">
                   Soy de Durango, Dgo México. Desde pequeña, siempre he sentido una conexión especial con la música y el arte.
                   A los 15 años, comencé a explorar la música y a experimentar con la creación de la misma.
                   Esta pasión me ha llevado a descubrir mi verdadera identidad y a disfrutar de la música.
                  </p>
                </div>

                <div className="border-4 border-cyan-500 p-8 transform rotate-1 hover:rotate-0 transition-transform bg-black">
                  <h3 className="text-3xl font-black text-pink-500 mb-4 uppercase">Objetivos Profesionales</h3>
                  <p className="text-white text-lg leading-relaxed">
                    Establecerme en una empresa innovadora donde pueda aplicar mis habilidades y crecer profesionalmente.
                    Contribuir al desarrollo de proyectos que tengan un impacto positivo en la sociedad.
                    Seguir aprendiendo y adaptándome a las nuevas tecnologías y tendencias del mercado.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 transform rotate-2 hover:rotate-0 transition-transform">
                  <h3 className="text-3xl font-black text-white mb-6 uppercase">Pasatiempos</h3>
                  <ul className="space-y-4 text-white text-lg">
                    <li className="flex items-center gap-3">
                      <Skull className="w-6 h-6 text-yellow-400" />
                      <span>Hacer y escuchar música</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      <span>Experimentar todo tipo de arte</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-yellow-400" />
                      <span>Leer</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Music className="w-6 h-6 text-yellow-400" />
                      <span>Investigar</span>
                    </li>
                        <li className="flex items-center gap-3">
                      <Music className="w-6 h-6 text-yellow-400" />
                      <span>Astronomía</span>
                    </li>
                  </ul>
                </div>

                 <div className="border-4 border-yellow-400 p-8 transform -rotate-2 hover:rotate-0 transition-transform bg-black">
      <h3 className="text-3xl font-black text-cyan-400 mb-4 uppercase">Mantra</h3>
      
      <img 
        src={imagen} 
        alt="Mantra" 
        className="w-full rounded-xl shadow-lg"
      />
    </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rotate-45 ${
                    i % 3 === 0 ? 'bg-pink-500' : i % 3 === 1 ? 'bg-cyan-500' : 'bg-yellow-400'
                  }`}
                ></div>
              ))}
            </div>
            <p className="text-white text-lg font-bold uppercase tracking-widest">
              Hola
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
