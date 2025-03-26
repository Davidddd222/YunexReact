"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet"
import { CgDetailsMore } from "react-icons/cg";
import EmpezarForm from "@/pages/Laboratorio/components/EmpezarForm";

const SHEET_SIDES = ["bottom"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <CgDetailsMore className="text-2xl"/>
             </SheetTrigger>
                <SheetContent className="bg-white" side={side}>
                <SheetHeader>
                 <SheetTitle className='text-3xl font-bold text-center text-gray-900 mb-2'>DOCUMENTOS</SheetTitle>
                 <div className="flex flex-wrap items-center  gap-4 mb-6">
                 <h1 className='text-2xl font-semibold text-center text-gray-900'>CONTRATOS</h1>

                 <Sheet>
                 <SheetTrigger
                 className="border ml-18 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-blue-500">
                   Nuevo contrato
                   </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px] bg-white">
                     <SheetTitle>
                     <SheetDescription>
                    </SheetDescription>
                    </SheetTitle>
                    <EmpezarForm />
                 </SheetContent>
                </Sheet>
                
                 </div>
                <SheetDescription>
                </SheetDescription>
                </SheetHeader>
                <div>
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">AQUÍ DEBERIÁN APARECR DETALLES DE LOS CONTRATOS DE LA EMPRESA CON LOS CLIENTES</h1>
                </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
