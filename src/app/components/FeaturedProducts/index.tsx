/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Rodamiento Estándar',
      href: '#',
      price: '$15',
      description: 'Rodamiento de uso general para aplicaciones diversas. Alta durabilidad y resistencia.',
      options: 'Varios tamaños disponibles',
      imageSrc: '/images/ballbearings.png',
      imageAlt: 'Imagen de un rodamiento estándar.',
    },
    {
      id: 2,
      name: 'Rodamiento de Precisión',
      href: '#',
      price: '$30',
      description: 'Rodamiento diseñado para aplicaciones que requieren alta precisión y baja fricción.',
      options: 'Tolerancias precisas',
      imageSrc: '/images/ballbearings.png',
      imageAlt: 'Imagen de un rodamiento de precisión.',
    },
    {
      id: 3,
      name: 'Rodamiento de Rodillos Cónicos',
      href: '#',
      price: '$25',
      description: 'Rodamiento que maneja cargas radiales y axiales a través de rodillos cónicos. Excelente para aplicaciones de carga combinada.',
      options: 'Diversos tamaños disponibles',
      imageSrc: '/images/ballbearings.png',
      imageAlt: 'Imagen de un rodamiento de rodillos cónicos.',
    },
    // Puedes seguir agregando más productos de rodamientos aquí
  ];
  
  
  export default function FeaturedProducts() {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <h2 className=" text-4xl mb-10">Algunos de nustros productos</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
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
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  