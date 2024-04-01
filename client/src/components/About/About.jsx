import React from 'react';
import {Link} from 'react-router-dom';
import Image1 from '../Images/logo1.jpg';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src={Image1}
                            alt="image"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-10/12">
                        <h2 className="text-4xl text-gray-900 font-bold mb-4">
                            SCHOOL NAME: COMPLEXE SCOLAIRE KIM'S
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Complexe Scolaire KIM'S created in 2018 is a school approved by the Ministry of Primary, Secondary and Vocational Education in the Democratic Republic of Congo by ministerial order N°MINEPSP/CABMIN/2900/2018 DU 08/09/2018
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                         
                            APPROVAL NO.: N° MINEPSP/CABMIN/2900/2018
                            MANAGEMENT SYSTEM: Approved private school
                            ADDRESS: COMPLEXE SCOLAIRE KIM'S is located in the Eastern region of the Democratic Republic of Congo in the province of NORD-KIVU, TERRITOIRE DE MASISI, GROUPEMENT DE KAMURONZA, SAKE, QUARTIER MAYUTSA, AVENUE MULULU.
                            </p>
                            </p>
                        <h3 className="text-2xl text-gray-900 font-bold mt-6 mb-2">
                            SCHOOL OBJECTIVES :
                        </h3>
                        <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                            Complexe Scolaire KIM'S pursues 4 priority objectives and aims specifically to meet the needs of:
                            
                            <ol className="list-decimal list-inside">
                                <li>Give the children of SAKE, equal opportunities for social emancipation by offering a dignified school education. This, despite the fact that the region has been affected by incessant warfare over the past 20 years.</li>
                                <li>Promote the self-confidence and personal development of each of our students.</li>
                                <li>To enable all our students to acquire the knowledge and skills that will make them useful to society throughout their lives, and to take an active part in economic, social and cultural life.</li>
                                <li>Prepare all students to be responsible citizens.</li>
                            </ol>
                        </p>
                        <h3 className="text-2xl text-gray-900 font-bold mt-6 mb-2">
                            Our programs
                        </h3>
                        <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                            In kindergarten, children are divided into sections according to their age:
                            
                            <ul className="list-disc list-inside">
                                <li>3-year-olds</li>
                                <li>4-year-olds</li>
                                <li>Kindergarten 5 years</li>
                            </ul>
                            
                            At elementary school, we will open the following classes:
                            
                            <ul className="list-disc list-inside">
                                <li>Grade 1 up to 6</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
