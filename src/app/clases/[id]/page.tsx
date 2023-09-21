import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { products } from "@/app/utils/products";
import Link from "next/link";

export default function ClassePage({ params }: { params: any }) {
  const product = products[params.id];

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className=" text-4xl my-10">{product.name}</h2>
          <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-900 ring-1 ring-gray-900 bg-slate-300">
                <Link href={`https://wa.me/89631439/?text=Quiero reservar una clase de prueba de ${product.name}`} className="flex items-center gap-x-1">
                  <span className="absolute inset-0 " aria-hidden="true" />
                  Reserve su clase de prueba
                  <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-900" aria-hidden="true" />
                </Link>
              </div>
            </div>
        </div>
        <div className="">
            <div className="bg-slate-800 flex items-center justify-center my-6">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className=""
              />
            </div>
            <p className=" text-gray-500">{product.detailDescription}</p>
            <ul 
            style={{listStyleType: 'disc'}}
            className="grid lg:grid-cols-3 gap-2 py-4 font-semibold">
              <li>Horarios Flexibles</li>
              <li>Instructores Altamente Calificados</li>
              <li>Ambiente de Aprendizaje Seguro</li>
              <li>Programas para Todas las Edades</li>
              <li>Comunidad Unida</li>
              <li>Enfoque Personalizado</li>
            </ul>
      </div>
      </div>
    </div>
  );
}
