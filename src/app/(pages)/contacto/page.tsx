
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Contact() {
    return (
    <div id="about" className="bg-gray-100 py-6">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto lg:mx-0">
        <p className="text-base font-semibold leading-7 text-[#0294b4]">
          100% costarricenses
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Contáctenos
        </h2>
        <p className="mt-6 text-2xl leading-8 text-gray-800">
          Profesor Yordy Nuñez
        </p>
        <ul>
          <li>Cinturón Marrón en Jiujitsu brasileño certificado de la IBJJF</li>
          <li>Cinturón Marrón en Kickboxing</li>
        </ul>
        <p className="mt-2text-lg leading-8 text-gray-600">
          Tel: 89631439 / 61349276
        </p>
        <div className="flex my-4">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900 bg-slate-300">
              <Link href={`https://wa.me/+50689631439/?text=Quiero%20reservar%20una%20clase%20de%20prueba`} target="_blank" className="flex items-center gap-x-1">
                <span className="absolute inset-0 " aria-hidden="true" />
                Reservar una clase de prueba
                <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-900" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <p className="mt-6 text-2xl leading-8 text-gray-800">
          Estamos ubicados en Alajuela, Grecia, de la estación central de buses, 200 metros norte, a un costado de las canchas sinteticas Terrazas
        </p>
      </div>
    </div>
  </div>)
  }