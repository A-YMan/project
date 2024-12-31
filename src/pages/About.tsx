import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">À propos de DabaBlane</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            DabaBlane est née d'une vision simple : créer une plateforme qui connecte les commerçants locaux avec leurs clients de manière transparente et efficace. Notre mission est de dynamiser le commerce local tout en offrant aux consommateurs une expérience d'achat exceptionnelle.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Fondée en 2024, notre plateforme s'est rapidement développée pour devenir une référence dans le domaine du commerce digital au Maroc.
          </p>
        </div>
        <div className="relative">
          <img 
            src="/images/about-hero.jpg" 
            alt="DabaBlane Team" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/trust-icon.svg" 
                alt="Confiance" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Confiance</h3>
            <p className="text-gray-600">
              La transparence et l'honnêteté sont au cœur de toutes nos interactions.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/innovation-icon.svg" 
                alt="Innovation" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Nous innovons constamment pour améliorer l'expérience de nos utilisateurs.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <img 
                src="/images/community-icon.svg" 
                alt="Communauté" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Communauté</h3>
            <p className="text-gray-600">
              Nous construisons des liens durables entre commerçants et clients.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Notre Impact</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img 
            src="/images/impact-image.jpg" 
            alt="Impact DabaBlane" 
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depuis notre création, nous avons aidé plus de 1000 commerçants à développer leur présence en ligne et à atteindre de nouveaux clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Notre plateforme facilite des milliers de transactions chaque mois, contribuant ainsi à la croissance de l'économie locale.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Suivez-nous</h2>
        <p className="text-gray-600 mb-8">
          Restez connecté avec nous pour les dernières actualités et offres
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            className="text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="#" 
            className="text-2xl text-gray-600 hover:text-blue-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="#" 
            className="text-2xl text-gray-600 hover:text-pink-600 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="#" 
            className="text-2xl text-gray-600 hover:text-blue-700 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;