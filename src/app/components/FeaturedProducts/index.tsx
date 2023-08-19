import { ChevronRightIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Jiujitsu Brasileño",
    href: "#",
    price: "$50",
    description:
      "Clases de Jiujitsu Brasileño para principiantes y avanzados. Aprende las técnicas de lucha y sumisión.",
    options: "Clases grupales y privadas disponibles",
    imageSrc: "/images/bjj.png",
    imageAlt: "Imagen de una clase de Jiujitsu Brasileño.",
  },
  {
    id: 2,
    name: "Muay Thai",
    href: "#",
    price: "$40",
    description:
      "Clases de Muay Thai para mejorar tu resistencia y habilidades de combate. Entrenamiento completo.",
    options: "Clases para todas las edades",
    imageSrc: "/images/muaythai.png",
    imageAlt: "Imagen de una clase de Muay Thai.",
  },
  {
    id: 3,
    name: "Kick Boxing",
    href: "#",
    price: "$35",
    description:
      "Clases de Kick Boxing para quemar calorías y desarrollar habilidades de combate. Apto para todos los niveles.",
    options: "Instructores certificados",
    imageSrc: "/images/kickbox.png",
    imageAlt: "Imagen de una clase de Kick Boxing.",
  },
  {
    id: 4,
    name: "Boxeo",
    href: "#",
    price: "$30",
    description:
      "Clases de Boxeo para mejorar tu fuerza y coordinación. Entrenamiento intensivo con sacos y guantes.",
    options: "Clases individuales y en grupo",
    imageSrc: "/images/box.png",
    imageAlt: "Imagen de una clase de Boxeo.",
  },
  {
    id: 5,
    name: "MMA",
    href: "#",
    price: "$60",
    description:
      "Entrenamiento completo en Artes Marciales Mixtas (MMA) con expertos instructores. Aprende a pelear en todas las distancias.",
    options: "Entrenamiento personalizado disponible",
    imageSrc: "/images/mma.png",
    imageAlt: "Imagen de una clase de MMA.",
  },
  {
    id: 6,
    name: "Clases de Artes Marciales para Niños",
    href: "#",
    price: "$25",
    description:
      "Clases de artes marciales diseñadas específicamente para niños. Fomenta la disciplina, la confianza y la actividad física.",
    options: "Grupos de edad adaptados",
    imageSrc: "/images/kids.png",
    imageAlt: "Imagen de una clase de artes marciales para niños.",
  },
];

// Ahora, el arreglo "martialArts" contiene información sobre las artes marciales.

export default function FeaturedProducts() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className=" text-4xl my-10">Nuestras Disciplinas</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="flex items-end aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {product.options}
                  </p>
                  <div className="flex my-10">
                    <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900 bg-slate-300">
                      <a href="#" className="flex items-center gap-x-1">
                        <span
                          className="absolute inset-0 "
                          aria-hidden="true"
                        />
                        Reservar clase de prueba
                        <ChevronRightIcon
                          className="-mr-2 h-5 w-5 text-gray-900"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
