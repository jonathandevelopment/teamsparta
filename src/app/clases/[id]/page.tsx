import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { products } from "@/app/utils/products";
import Link from "next/link";

export default function  ClassePage({ params }: { params: any }) {

    
    const product = products[params.id]
    console.log(params);


    return (
        <div id="classes" className="">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className=" text-4xl my-10">Nuestras Disciplinas</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">

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
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {product.options}
                  </p>
                  <div className="flex my-10">
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
}
