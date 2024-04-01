import React from 'react';
import Image1 from '../Images/a1.png'
import Image2 from '../Images/a2.png'
import Image3 from '../Images/a3.png'
import Image4 from '../Images/a4.png'
import Image5 from '../Images/a5.png'

function Card() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={Image5} alt="Educational excursion"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Excursion</div>
                <p className="text-gray-700 text-base">
                An organised trip made for education. It is often adjunct to a longer journey or visit to a place, sometimes for education-related purposes.
                </p>
            </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Planes</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Airport</span>
        </div>
        </div>
        
        <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Image3} alt="River"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sailing</div>
            <p className="text-gray-700 text-base">
            Your Kids will be able to discover new passions. They will spend their time on boat trying their hand at different activities, have a chance to try new things and decide what they like best. Perhaps they will get hooked on sailing and want to learn more.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sailing</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Lake</span>
        </div>
    </div>

    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Image1} alt="Forest"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Nature</div>
        <p className="text-gray-700 text-base">
        For children, in particular, traveling can be a powerful and tactile way to increase their cross-cultural understanding while they develop empathy for others and a sense of personal independence. Travel can also allow children to develop essential life skills — patience, flexibility, confidence and self-esteem.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Learning</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Less fearfulness</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fun experiences</span>
      </div>
    </div>
  </div>
  )
}

export default Card