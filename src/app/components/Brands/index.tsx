export default function Brands() {
    return (
      <div className="bg-white py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-4xl font-semibold leading-8 text-gray-900">
              Algunas de nuestras marcas
            </h2>
            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/images/koyo.jpg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/images/ntn.jpg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/images/skf.jpg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/images/timken.jpg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
               <img
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/images/nsk.jpg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  