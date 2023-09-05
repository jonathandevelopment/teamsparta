import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <div id="about" className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <p className="text-base font-semibold leading-7 text-[#0294b4]">
            100% costarricenses
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Academia  Team Sparta
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La Academia Team Sparta es un centro de entrenamiento de artes
            marciales de renombre que ha estado en el corazón de la comunidad
            durante más de una década. Fundada por apasionados y dedicados
            profesionales de las artes marciales, nuestra academia se ha
            convertido en un lugar de referencia para aquellos que buscan
            desarrollar sus habilidades físicas y mentales a través de las
            disciplinas de combate.
          </p>
          <div className="flex my-10">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900 bg-slate-300">
                <a href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0 " aria-hidden="true" />
                  Leer más
                  <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-900" aria-hidden="true" />
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
