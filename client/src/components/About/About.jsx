import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-12 items-center">
          <div className="md:w-1/2 lg:w-1/2">
            <img
              src="http://localhost:5173/src/components/Images/a.jpg"
              alt="École"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Complexe Scolaire KIM’S
            </h2>
            <p className="text-gray-600 mb-4">
              Le Complexe Scolaire KIM’S, créé en 2018, est une école approuvée par le Ministère de l'Enseignement Primaire, Secondaire
              et Professionnel de la République Démocratique du Congo. Il se compose actuellement de deux sections, à savoir la maternelle
              et l'élémentaire. Cette école est située dans la ville de Sake, à quelques kilomètres de la ville de Goma.
            </p>
            <p className="text-gray-600 mb-4">
              L'école vise à réduire la tendance à l'invalidité intellectuelle chez les enfants de sa communauté et à préparer les enfants
              à être compétitifs à l'échelle mondiale.
            </p>
            <p className="text-gray-600 mb-4">
              Le Complexe Scolaire KIM’S poursuit quatre objectifs prioritaires :
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Offrir à tous les élèves des chances égales pour l'émancipation sociale</li>
              <li>Promouvoir la confiance en soi et le développement de chaque élève</li>
              <li>Amener tous les élèves à des connaissances appropriées et à acquérir des compétences qui les rendent utiles à la société</li>
              <li>Préparer tous les élèves à être des citoyens responsables</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Le Complexe Scolaire KIM’S a été approuvé par le Ministère de l'Éducation de la RDC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

