import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About(){
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
          ¡Bienvenidos a la Academia Team Sparta en Grecia, Alajuela, Costa Rica! Somos un centro de entrenamiento de artes marciales 100% costarricense que ha dejado una marca perdurable en la comunidad durante más de una década. Fundada por apasionados y dedicados profesionales de las artes marciales, nuestra academia se ha convertido en un punto de referencia para aquellos que buscan desarrollar sus habilidades físicas y mentales a través de las disciplinas de combate.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Ubicados en la hermosa localidad de Grecia, Alajuela, en el corazón de Costa Rica, estamos orgullosos de ser parte de esta comunidad. Nuestra academia es un reflejo de la rica tradición de las artes marciales en este país, y hemos acogido a personas de todas las edades y niveles de experiencia en nuestro espacio. Ya sea que seas un principiante curioso o un atleta experimentado, en la Academia Team Sparta encontrarás un ambiente acogedor y estimulante donde podrás desafiar tus límites y crecer tanto física como mentalmente.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          En Team Sparta, creemos en la importancia de la disciplina, el respeto y la superación personal. Nuestro equipo de instructores altamente calificados está dedicado a guiar a nuestros estudiantes en su viaje hacia el dominio de las artes marciales. Ofrecemos una amplia variedad de disciplinas, desde el Jiu-Jitsu brasileño hasta el Muay Thai y el Taekwondo, entre otros. Nuestro enfoque es ayudarte a alcanzar tus metas, ya sea que busques mejorar tu condición física, aprender técnicas de autodefensa efectivas o simplemente disfrutar de una experiencia enriquecedora en un ambiente amigable y motivador.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          En la Academia Team Sparta, somos más que un centro de entrenamiento; somos una familia unida por nuestra pasión por las artes marciales y el deseo de crecer juntos. Te invitamos a unirte a nuestra comunidad y a embarcarte en un emocionante viaje de autodescubrimiento y desarrollo personal en el hermoso entorno de Grecia, Alajuela. ¡Te esperamos con los brazos abiertos en la Academia Team Sparta!
          </p>
          <div className="flex my-10">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900 bg-slate-300">
                <Link href="/contacto" className="flex items-center gap-x-1">
                  <span className="absolute inset-0 " aria-hidden="true" />
                  Reserva tu clase de prueba
                  <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-900" aria-hidden="true" />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
}